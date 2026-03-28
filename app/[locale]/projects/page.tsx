import { useTranslations } from 'next-intl';

// Utils
import { customGenerateMetadata } from '@/app/utils/pages';

// Constants
import { ROUTES } from '@/app/constants/routes';
import { PROJECTS } from './constants/projects';

// Components
import { PageLinks } from '@/app/components/PageLinks';
import { ProjectCard } from './components/ProjectCard';

export const generateMetadata = () => customGenerateMetadata(ROUTES.PROJECTS);

const Projects = () => {
  const t = useTranslations('ProjectsPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              title: t(`projects.${project.id}.title`),
              description: t(`projects.${project.id}.description`),
              period: t(`projects.${project.id}.period`),
              topics: t.raw(`projects.${project.id}.topics`) as string[],
            }}
            statusLabel={t(`status.${project.status}`)}
          />
        ))}
      </div>

      <PageLinks exclude="/projects" />
    </div>
  );
};

export default Projects;
