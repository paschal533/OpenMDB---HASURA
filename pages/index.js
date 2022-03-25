import Head from 'next/head';
import { Header, Hero, Row } from '../components';

export default function Home() {

  return (
    <div>
      <Head>
        <title>MoviesAPI - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <div>
        <Row />
      </div>
    </div>
  );
}
