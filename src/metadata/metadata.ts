export default {
  name: 'Deniz Güzel',
  title: 'Frontend Developer',
  facts: {
    Residence: 'Bahçelievler/İstanbul',
    Homepage: `<a href="https://github.com/denizguzel">
                  <span class="print">https://github.com/denizguzel</span>
                  <span class="screen">https://github.com/denizguzel</span>
               </a>
              `,
    Email: '<a href="mailto:denizguzel.iu@gmail.com">denizguzel.iu@gmail.com</a>',
    LinkedIn: '<a href="https://www.linkedin.com/in/deniz-guzel/">https://www.linkedin.com/in/deniz-guzel/</a>',
    Phone: '543 503 92 93',
  },
  skills: [
    {
      title: 'General',
      props: ['Javascript with latest ECMAScript', 'Typescript'],
    },
    {
      title: 'Front-end',
      props: [
        'Angular with NGXS or NGRX, RxJS',
        'SSR (Server Side Rendering) with Angular Universal',
        'Jest, Puppeteer',
        'Bootstrap, Sass, HTML5, CSS3',
        'Patternlab, Fractal with Twig Template Engine',
        'Storybook',
        'React with Redux (intermediate knowledge)',
        'Next.js (intermediate knowledge)',
        'Vue.js (entry knowledge)',
      ],
    },
    {
      title: 'Back-end',
      props: ['Express (entry knowledge)', 'NestJS (entry knowledge)'],
    },
    {
      title: 'Tools',
      props: ['Git', 'Yarn', 'Npm', 'Webpack', 'Github', 'Jenkins', 'Bitbucket', 'Jira'],
    },
  ],
  workHistory: [
    {
      title: 'Frontend Developer',
      company: 'Etiya Bilgi Teknolojileri, İstanbul',
      date: {
        start: 'Sep 2017',
        end: 'Current',
      },
      contents: [
        {
          title:
            'Marvel Project, Frontend Developer <a href="https://videotron.com/en" target="_blank">(https://videotron.com/en)</a>',
          props: [
            'Lead technical support of complex UX flows and development',
            'Deciding on development standarts and architecture',
            'GTM (Google Tag Manager) implementation (based on state management with NGXS)',
            'Developing and maintaining atomic design component structure of multiple applications based on project UI-Kit',
            'Angular and CMS (Drupal) E2E integration with cross-domain state transfer',
            'Working on two main frontend application which are web self-care and customer self representative. First one is for customers and second one is internal (behind a VPN) frontend application for customer representatives. Both are pushed to production successfully',
            'Technical support to colleagues and pair programming',
            'Still on development, approximately 2 year or more',
          ],
        },
        {
          title: 'Fizz, Frontend Developer <a href="https://fizz.ca/" target="_blank">(https://fizz.ca)</a>',
          props: [
            'App development from beginning to end (approximately 1 year or more) with Angular 5-7, RxJS, NGRX, Typescript, Sass',
          ],
        },
      ],
      badges: ['Angular', 'RxJS', 'NGXS', 'NGRX', 'Jest', 'Patternlab', 'Twig', 'Keycloak', 'Nrwl'],
    },
  ],
  educations: [
    {
      title: 'Bachelor of Science: Computer Engineering',
      description: 'Istanbul University - Istanbul',
      date: {
        start: 'Sep 2012',
        end: 'Jul 2017',
      },
    },
  ],
  affiliations: [
    'Levent Arman Özak, Software Architect, 0 532 787 21 53',
    'Remzi Özcan, Software Team Leader, 0 507 006 88 72',
    'Erhan Günal, Software Team Leader, 0 507 614 09 64',
  ],
  additional: ['Military Services: Completed', 'No smoking', 'No driver license'],
};
