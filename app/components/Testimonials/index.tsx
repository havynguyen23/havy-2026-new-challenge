'use client';

import { useTranslations } from 'next-intl';

type Testimonial = {
  name: string;
  role: string;
  comment: string;
};

export const Testimonials = () => {
  const t = useTranslations('Testimonials');

  const testimonials: Testimonial[] = [
    {
      name: t('items.0.name'),
      role: t('items.0.role'),
      comment: t('items.0.comment'),
    },
    {
      name: t('items.1.name'),
      role: t('items.1.role'),
      comment: t('items.1.comment'),
    },
    {
      name: t('items.2.name'),
      role: t('items.2.role'),
      comment: t('items.2.comment'),
    },
  ];

  return (
    <section className="mx-auto w-full max-w-2xl space-y-6 py-12">
      <h2 className="text-lg font-semibold">{t('title')}</h2>
      <p className="text-sm text-black/40">{t('subtitle')}</p>
      <div className="space-y-3">
        {testimonials.map((item, index) => (
          <blockquote
            key={index}
            className="rounded-lg border border-black/10 bg-black/3 p-5"
          >
            <p className="text-base leading-relaxed">
              &ldquo;{item.comment}&rdquo;
            </p>
            <footer className="mt-3">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="ml-2 text-sm text-black/40">&mdash; {item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};
