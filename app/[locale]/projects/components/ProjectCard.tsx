// Utils
import { Link } from '@/i18n/navigation';

// Types
export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export interface Project {
  id: string;
  title: string;
  description: string;
  period: string;
  topics: string[];
  status: ProjectStatus;
  slug?: string;
}

const statusStyles: Record<ProjectStatus, string> = {
  planned: 'border border-black/20 text-black/50',
  'in-progress': 'border border-amber-400 text-amber-600',
  completed: 'border border-green-400 text-green-600',
};

interface ProjectCardProps {
  project: Project;
  statusLabel: string;
}

export const ProjectCard = ({ project, statusLabel }: ProjectCardProps) => {
  const content = (
    <div className="rounded-lg border border-black/10 p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabel}
        </span>
      </div>

      <p className="mb-4 text-sm text-black/60">{project.description}</p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-black/60"
            >
              {topic}
            </span>
          ))}
        </div>
        <span className="text-xs text-black/40">{project.period}</span>
      </div>
    </div>
  );

  if (project.slug) {
    return (
      <Link href={`/projects/${project.slug}`} className="block hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
};
