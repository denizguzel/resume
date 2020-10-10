import { format } from 'date-fns';
import { copySync, emptyDirSync, readFileSync, writeFileSync } from 'fs-extra';
import repoName from 'git-repo-name';
import username from 'git-username';
import handlebars from 'handlebars';
import { normalizeSync } from 'normalize-diacritics';
import { launch } from 'puppeteer';
import getSlug from 'speakingurl';
import templateData from './metadata/metadata';
import markdownHelper from './utils/markdown';

class Builder {
  private readonly SRC_DIRECTORY = __dirname;
  private readonly OUTPUT_DIRECTORY = this.SRC_DIRECTORY + '/../dist';
  private readonly data = templateData;
  private pdfFileName: string = '';

  constructor() {
    this.registerHandlebarsHelpers();
  }

  async compile(): Promise<void> {
    this.cleanWorkspace();
    this.copyAssets();
    this.compileHTML();
    await this.toPdf(`${this.OUTPUT_DIRECTORY}/index.html`, `${this.OUTPUT_DIRECTORY}/${this.pdfFileName}`);
  }

  private async toPdf(inputFilePath: string, outputFilePath: string): Promise<void> {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto(`file://${inputFilePath}`, {
      waitUntil: 'networkidle0',
    });
    await page.pdf({
      path: outputFilePath,
      format: 'A4',
      margin: {
        top: '2.54cm',
        right: '2.54cm',
        bottom: '2.54cm',
        left: '2.54cm',
      },
    });
    await browser.close();
  }

  private cleanWorkspace(): void {
    emptyDirSync(this.OUTPUT_DIRECTORY);
  }

  private copyAssets(): void {
    copySync(this.SRC_DIRECTORY + '/assets', this.OUTPUT_DIRECTORY);
  }

  private compileHTML(): void {
    const source = readFileSync(this.SRC_DIRECTORY + '/templates/index.html', 'utf-8');
    const template = handlebars.compile(source);
    this.pdfFileName = `${this.normalizeWord(this.data.name)}.${this.normalizeWord(this.data.title)}.pdf`;
    const html = template({
      ...this.data,
      baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
      pdfFileName: this.pdfFileName,
      updatedAt: format(new Date(), 'MMMM d, yyyy'),
    });
    writeFileSync(this.OUTPUT_DIRECTORY + '/index.html', html);
  }

  private normalizeWord(word: string): string {
    return getSlug(normalizeSync(word));
  }

  private registerHandlebarsHelpers(): void {
    handlebars.registerHelper('markdown', markdownHelper);
  }
}

const builder = new Builder();
builder.compile();
