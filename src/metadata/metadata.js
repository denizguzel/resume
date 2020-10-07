module.exports = {
  name: 'Deniz Güzel',
  title: 'Frontend Developer',
  facts: {
    Residence: 'Bahçelievler/İstanbul',
    Homepage: `<a href="https://github.com/denizguzel">
                  <span class="print">https://github.com/denizguzel</span>
                  <span class="screen">Github</span>
                </a>`,
    Email: '<a href="mailto:denizguzel.iu@gmail.com">denizguzel.iu@gmail.com</a>',
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
        'Bootstrap, Sass, HTML5, CSS3',
        'Patternlab, Fractal with Twig Template Engine',
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
      props: ['Git', 'Yarn', 'Npm', 'Webpack'],
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
          title: 'Marvel Project, Frontend Developer (https://videotron.com/en)',
          props: [
            'Lead technical support of complex UX flows and development',
            'GTM (Google Tag Manager) implementation (based on state management with NGXS)',
            'Developing and maintaining atomic design component structure of multiple applications based on project UI-Kit',
            'Angular and CMS (Drupal) E2E integration with cross-domain state transfer.',
            'Working on two main frontend application which are web self-care and customer self representative. First one is for customers and second one is internal (behind a VPN) frontend application for customer representatives. Both are pushed to production successfully.',
          ],
        },
        {
          title: 'Fizz, Frontend Developer (https://fizz.ca/)',
          props: ['App development from beginning to end with Angular 5-7, RxJS, NGRX, Typescript, Sass'],
        },
      ],
      badges: ['Angular', 'RxJS', 'NGXS', 'NGRX', 'Patternlab', 'Twig'],
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
  ],
  additional: ['Military Services: Completed', 'No smoking', 'No driver license'],
};
