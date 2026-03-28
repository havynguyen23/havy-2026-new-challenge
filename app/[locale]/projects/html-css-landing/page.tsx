import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// Utils
import { customGenerateMetadata } from '@/app/utils/pages';

// Constants
import { ROUTES } from '@/app/constants/routes';
import type { ProjectStatus } from '../components/ProjectCard';

// Components
import { Link } from '@/i18n/navigation';

export const generateMetadata = async () => {
  const t = await getTranslations('HtmlCssLandingProjectPage');
  return customGenerateMetadata({
    PATH: ROUTES.HTML_CSS_LANDING_PROJECT.PATH,
    TITLE: t('title'),
    LABEL_KEY: '',
  });
};

const statusStyles: Record<ProjectStatus, string> = {
  planned: 'border border-black/20 text-black/50',
  'in-progress': 'border border-amber-400 text-amber-600',
  completed: 'border border-green-400 text-green-600',
};

const HtmlCssLandingProject = () => {
  const t = useTranslations('HtmlCssLandingProjectPage');
  const tProjects = useTranslations('ProjectsPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-black/50 hover:text-black/80 transition-colors"
      >
        ← {t('backToProjects')}
      </Link>

      <div className="mt-4 mb-3 flex items-start justify-between gap-3">
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles['in-progress']}`}
        >
          {tProjects('status.in-progress')}
        </span>
      </div>

      <p className="mb-8 text-sm text-black/60 leading-relaxed">
        {t('overview')}
      </p>

      <div className="mb-8 rounded-lg border border-black/10 p-5">
        <h2 className="mb-4 text-base font-semibold">{t('techStackTitle')}</h2>
        <div className="flex flex-col gap-3">
          {(t.raw('techStack') as { name: string; description: string }[]).map((item) => (
            <div key={item.name} className="flex items-start gap-3">
              <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black/60 shrink-0">
                {item.name}
              </span>
              <span className="text-sm text-black/60">{item.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-black/10 p-5">
        <h2 className="mb-4 text-base font-semibold">{t('goalsTitle')}</h2>
        <ul className="flex flex-col gap-2">
          {(t.raw('goals') as string[]).map((goal) => (
            <li key={goal} className="flex items-start gap-2 text-sm text-black/60">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HtmlCssLandingProject;
