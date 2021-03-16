import Head from 'next/head';

interface PageProps {
  children: React.ReactNode;
  title: string;
}

export default function Page(props: PageProps) {
  return (
    <div className="page">
      <Head>
        <title>{props.title}</title>
      </Head>

      <main>
        <h1>{props.title}</h1>

        {props.children}
      </main>
    </div>
  );
}
