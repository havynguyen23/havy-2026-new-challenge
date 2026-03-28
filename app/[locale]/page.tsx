// Components
import { Introduction } from '@/app/components/Introduction';
import { RecentActivity } from '@/app/components/RecentActivity';
import { PageLinks } from '@/app/components/PageLinks';

const Home = () => {
  return (
    <>
      <Introduction />
      <RecentActivity />
      <PageLinks />
    </>
  );
};

export default Home;
