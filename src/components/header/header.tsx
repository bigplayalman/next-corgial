import { Heading, Box, Grid } from "grommet";

export default function Header() {
  return (
    <>
      <Grid
        fill
        rows={["auto"]}
        columns={["xsmall", "auto"]}
        areas={[
          { name: "logo", start: [0, 0], end: [1, 0] },
          { name: "heading", start: [1, 0], end: [1, 0] },
        ]}
      >
        <Box gridArea="logo" pad="12px">
          <img
            src="/logo.svg"
            alt="Corgial logo"
            style={{ width: "100%", filter: "invert(0)" }}
          />
        </Box>
        <Box gridArea="heading" justify="center">
          <Heading>Corgial</Heading>
        </Box>
      </Grid>
    </>
  );
}
