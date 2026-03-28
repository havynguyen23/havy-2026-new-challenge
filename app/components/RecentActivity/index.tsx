'use client';

import { useLocale, useTranslations } from 'next-intl';

// i18n
import { Link } from '@/i18n/navigation';

// Data
import { diaryEntries } from '@/app/[locale]/training/entries';

const RECENT_COUNT = 5;

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const RecentActivity = () => {
  const t = useTranslations('RecentActivity');
  const locale = useLocale();

  const entries = diaryEntries[locale] ?? [];
  const recent = [...entries].reverse().slice(0, RECENT_COUNT);

  if (recent.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-2xl py-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{t('title')}</h2>
        <Link
          href="/training"
          className="text-sm text-black/40 transition-colors hover:text-black/70"
        >
          {t('viewAll')} &rarr;
        </Link>
      </div>

      <div className="space-y-2">
        {recent.map((entry) => (
          <Link
            key={entry.date}
            href={`/training?date=${entry.date}`}
            className="group flex items-center justify-between rounded-lg border border-black/10 px-4 py-3 transition-colors hover:border-black/25 hover:bg-black/5"
          >
            <span className="text-sm">{entry.title}</span>
            <span className="ml-4 shrink-0 text-xs text-black/40">
              {formatDate(entry.date)}
              <span className="ml-1 inline-block transition-transform duration-150 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
