import Head from 'next/head';
import ElektroHeld24 from '../components/ElektroHeld24.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>ElektroHeld24</title>
        <meta name="description" content="Reparaturservice für Haushaltsgeräte in Lüneburg" />
      </Head>
      <ElektroHeld24 />
    </>
  );
}
