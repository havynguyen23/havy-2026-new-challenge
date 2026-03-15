type OutlineItem = {
  date: string;
  label: string;
};

type OutlineProps = {
  items: OutlineItem[];
  activeDate: string;
  onSelect: (date: string) => void;
};

export const Outline = ({ items, activeDate, onSelect }: OutlineProps) => {
  return (
    <>
      {/* Mobile: dropdown select */}
      <div className="lg:hidden w-full mb-6 relative">
        <select
          value={activeDate}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full appearance-none rounded-md border border-black/15 bg-white py-2 pl-3 pr-8 text-sm text-black/70 focus:border-black/30 focus:outline-none"
        >
          {items.map((item) => (
            <option key={item.date} value={item.date}>
              {item.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black/40">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      {/* Desktop: sidebar */}
      <nav className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto w-44 shrink-0">
        <ul className="space-y-1.5 border-l-2 border-black/10">
          {items.map((item) => (
            <li key={item.date}>
              <button
                onClick={() => onSelect(item.date)}
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
    </>
  );
};
