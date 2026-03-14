'use client';

import { useEffect, useState } from 'react';

type OutlineItem = {
  date: string;
  label: string;
};

export const Outline = ({ items }: { items: OutlineItem[] }) => {
  const [activeDate, setActiveDate] = useState(items[0]?.date ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observerEntries) => {
        for (const entry of observerEntries) {
          if (entry.isIntersecting) {
            setActiveDate(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' },
    );

    for (const item of items) {
      const el = document.getElementById(item.date);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (date: string) => {
    const el = document.getElementById(date);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto w-44 shrink-0">
      <ul className="space-y-1.5 border-l-2 border-black/10">
        {items.map((item) => (
          <li key={item.date}>
            <button
              onClick={() => handleClick(item.date)}
              className={`block w-full cursor-pointer border-l-2 -ml-0.5 py-1 pl-3 text-left text-xs transition-colors ${
                activeDate === item.date
                  ? 'border-black/60 font-medium text-black/80'
                  : 'border-transparent text-black/40 hover:text-black/60'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
