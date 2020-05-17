import { Button } from "grommet";
import * as Icons from "grommet-icons";

export default function Sidebar() {
  return (
    <>
      <Button
        icon={<Icons.Music />}
        hoverIndicator
        primary
        style={{ padding: 10, marginBottom: 10 }}
        size="large"
        a11yTitle="Music Library"
        plain={false}
      />
      <Button
        icon={<Icons.Upload />}
        hoverIndicator
        primary
        style={{ padding: 10, marginBottom: 10 }}
        size="large"
        a11yTitle="Upload Music"
        plain={false}
      />
    </>
  );
}
