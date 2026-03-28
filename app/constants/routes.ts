import { APP_INFORMATION } from './app';

export const ROUTES = {
  HOME: {
    PATH: '/',
    TITLE: APP_INFORMATION.BIO,
    LABEL_KEY: 'home',
  },
  ABOUT: {
    PATH: '/about',
    TITLE: '',
    LABEL_KEY: 'about',
  },
  TRAINING: {
    PATH: '/training',
    TITLE: '',
    LABEL_KEY: 'self-learning',
  },
  PROJECTS: {
    PATH: '/projects',
    TITLE: '',
    LABEL_KEY: 'projects',
  },
  PLANS: {
    PATH: '/plans',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  TESTER_PLAN: {
    PATH: '/plans/become-a-tester',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  HTML_PLAN: {
    PATH: '/plans/html-fundamentals',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  CSS_PLAN: {
    PATH: '/plans/css-fundamentals',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  JS_PLAN: {
    PATH: '/plans/javascript-fundamentals',
    TITLE: '',
    LABEL_KEY: 'plans',
  },
  HTML_CSS_LANDING_PROJECT: {
    PATH: '/projects/html-css-landing',
    TITLE: '',
    LABEL_KEY: 'projects',
  },
} as const;
