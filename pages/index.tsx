import Head from "next/head";
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Corgial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grommet theme={theme}>
        <main>main</main>

        <footer>footer</footer>
      </Grommet>
    </div>
  );
}
