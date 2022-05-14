import Page from '@app/components/Page/Page';
import type { NextPage } from 'next';

const Error404: NextPage = () => {
  return (
    <Page title="Page Not Found">
      <p>It looks like nothing was found at this location.</p>
    </Page>
  );
};

export default Error404;
