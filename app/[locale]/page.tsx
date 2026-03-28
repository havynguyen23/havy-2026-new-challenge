// Components
import { Introduction } from '@/app/components/Introduction';
import { Testimonials } from '@/app/components/Testimonials';
import { RecentActivity } from '@/app/components/RecentActivity';
import { PageLinks } from '@/app/components/PageLinks';

const Home = () => {
  return (
    <>
      <Introduction />
      <Testimonials />
      <RecentActivity />
      <PageLinks />
    </>
  );
};

export default Home;
