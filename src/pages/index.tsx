import Page from '@app/components/Page/Page';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Page title="Welcome">
      <p>
        {process.env.APP_DESCRIPTION} v{process.env.APP_VERSION}.
      </p>
    </Page>
  );
};

export default Home;
