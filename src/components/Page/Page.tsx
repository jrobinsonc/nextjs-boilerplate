import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface PageProps {
  title: string;
  pageClass?: string;
}

const Page: FC<PropsWithChildren<PageProps>> = ({
  pageClass = '',
  title,
  children,
}) => {
  return (
    <div className={`page ${pageClass}`}>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="page__main">
        <h1>{title}</h1>

        {children}
      </main>
    </div>
  );
};

export default Page;
