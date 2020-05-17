import Head from "next/head";
import { Grommet, ResponsiveContext, Box, Grid } from "grommet";
import { theme } from "./theme";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";


export default function HomeComponent() {
  return (
    <Grommet theme={theme} themeMode="light" full>
      <Head>
        <title>Corgial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResponsiveContext.Consumer>
        {(_size) => (
          <Grid
            fill
            rows={["xsmall", "auto", "small"]}
            columns={["xsmall", "auto"]}
            areas={[
              { name: "header", start: [0, 0], end: [1, 0] },
              { name: "nav", start: [0, 1], end: [0, 1] },
              { name: "main", start: [1, 1], end: [1, 1] },
              { name: "footer", start: [0, 2], end: [1, 2] },
            ]}
          >
            <Box gridArea="header" background="brand" justify="center">
              <Header />
            </Box>
            <Box gridArea="nav" align="center" pad="small">
              <Sidebar />
            </Box>
            <Box gridArea="main" />
            <Box gridArea="footer" background="brand"/>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
