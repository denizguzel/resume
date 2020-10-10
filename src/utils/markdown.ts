import markdown from 'markdown-it';

const Markdown = new markdown();

export default (text: string) => Markdown.render(text);
