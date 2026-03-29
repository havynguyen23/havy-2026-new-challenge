import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

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
        <div className="flex items-center gap-2">
          <span className="shrink-0 rounded-full border border-blue-300 px-2.5 py-0.5 text-xs font-medium text-blue-500">
            Free to use
          </span>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles['completed']}`}
          >
            {tProjects('status.completed')}
          </span>
        </div>
      </div>

      <p className="mb-1 text-xs text-black/40">{tProjects('projects.0.period')}</p>

      <p className="mb-4 text-sm text-black/60 leading-relaxed">
        {t('overview')}
      </p>

      <a
        href="https://github.com/havynguyen23/html-css-landing"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-black/80 hover:text-black transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        View on GitHub
      </a>

      <div className="mb-8 overflow-hidden rounded-lg border border-black/10">
        <Image
          src="/images/preview/html-css-landing.jpg"
          alt={t('title')}
          width={672}
          height={378}
          className="w-full object-cover"
        />
      </div>

      <div className="mb-8 rounded-lg border border-black/10 p-5">
        <h2 className="mb-4 text-base font-semibold">{t('techStackTitle')}</h2>
        <div className="flex flex-col gap-3">
          {(t.raw('techStack') as { name: string; description: string }[]).map(
            (item) => (
              <div key={item.name} className="flex items-start gap-3">
                <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black/60 shrink-0">
                  {item.name}
                </span>
                <span className="text-sm text-black/60">
                  {item.description}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="rounded-lg border border-black/10 p-5">
        <h2 className="mb-4 text-base font-semibold">{t('goalsTitle')}</h2>
        <ul className="flex flex-col gap-2">
          {(t.raw('goals') as string[]).map((goal) => (
            <li
              key={goal}
              className="flex items-start gap-2 text-sm text-black/60"
            >
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
