import { APP_INFORMATION } from '@/app/constants/app';

export const Logo = () => {
  return (
    <div className="flex flex-col">
      <span className="font-fleur text-4xl text-blue-500 font-bold">
        {APP_INFORMATION.NAME_IN_VIETNAMESE}
      </span>
    </div>
  );
};
