import { useTranslations } from 'next-intl';

const Practices = () => {
  const t = useTranslations('PracticesPage');

  return (
    <div className="w-full max-w-2xl py-12">
      <h1 className="mb-6 text-2xl font-semibold">{t('title')}</h1>
      <p className="text-black/60">{t('placeholder')}</p>
    </div>
  );
};

export default Practices;
