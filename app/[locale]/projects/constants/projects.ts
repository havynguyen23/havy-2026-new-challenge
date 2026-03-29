// Constants
import { ROUTES } from '@/app/constants/routes';

// Components
import type { ProjectStatus } from '../components/ProjectCard';

export type ProjectStaticData = {
  id: string;
  status: ProjectStatus;
  slug?: string;
};

export const PROJECTS: ProjectStaticData[] = [
  {
    id: '0',
    status: 'in-progress',
    slug: ROUTES.HTML_CSS_LANDING_PROJECT.PATH.split('/').pop(),
  },
  {
    id: '1',
    status: 'planned',
    slug: ROUTES.MANUAL_TESTING_PROJECT.PATH.split('/').pop(),
  },
];
