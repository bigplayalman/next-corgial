import { Heading, Box, Grid, Select } from "grommet";
import { useState, useContext, useEffect } from "react";
import CorgialContext from "../../store/context";
import { pluck, distinctUntilChanged } from "rxjs/operators";

export default function Header() {
  const context = useContext(CorgialContext);
  const [value, setValue] = useState("light");
  const onChange = (option: string) => {
    if (option === "light") {
      context.app.state.next({ theme: "light" });
    } else {
      context.app.state.next({ theme: "dark" });
    }
  };

  useEffect(() => {
    let valid = true;
    const sub = context.app.state
      .pipe(pluck("theme"), distinctUntilChanged())
      .subscribe((theme) => {
        if (valid) {
          setValue(theme);
        }
      });
    return () => {
      valid = false;
      sub.unsubscribe();
    };
  }, [context]);

  return (
    <>
      <Grid
        fill
        rows={["auto"]}
        columns={["xsmall", "auto", "small"]}
        areas={[
          { name: "logo", start: [0, 0], end: [1, 0] },
          { name: "heading", start: [1, 0], end: [1, 0] },
          { name: "toggle", start: [2, 0], end: [2, 0] },
        ]}
      >
        <Box gridArea="logo" pad="12px">
          <img
            src="/logo.svg"
            alt="Corgial logo"
            style={{ width: "100%", filter: value === "light" ? "invert(0)" : "invert(1)"}}
          />
        </Box>
        <Box gridArea="heading" justify="center">
          <Heading>Corgial</Heading>
        </Box>
        <Box gridArea="toggle" justify="center" pad={{ right: "12px" }}>
          <Select
            options={["light", "dark"]}
            value={value}
            onChange={({ option }) => onChange(option)}
          />
        </Box>
      </Grid>
    </>
  );
}
