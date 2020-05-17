import { ThemeType } from "grommet";

export const theme: ThemeType = {
  global: {
    colors: {
      brand: {
        dark: "#393e46",
        light: "#3FD2C7",
      },
      background: {
        dark: "#222831",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#393e46",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222831",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#393e46",
        light: "#11111111",
      },
      text: {
        dark: "#EEEEEE",
        light: "#333333",
      },
      "text-strong": {
        dark: "#FFFFFF",
        light: "#000000",
      },
      "text-weak": {
        dark: "#CCCCCC",
        light: "#444444",
      },
      "text-xweak": {
        dark: "#999999",
        light: "#666666",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: '"Open Sans"',
      size: "12px",
      height: "16px",
      maxWidth: "192px",
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
    active: {
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    control: {
      border: {
        radius: "0px",
      },
    },
    drop: {
      border: {
        radius: "0px",
      },
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "3px",
      large: "8px",
      xlarge: "16px",
    },
    breakpoints: {
      small: {
        value: 512,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "3px",
          large: "4px",
          xlarge: "8px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "2px",
          small: "4px",
          medium: "8px",
          large: "16px",
          xlarge: "32px",
        },
        size: {
          xxsmall: "16px",
          xsmall: "32px",
          small: "64px",
          medium: "128px",
          large: "256px",
          xlarge: "512px",
          full: "100%",
        },
      },
      medium: {
        value: 1024,
      },
      large: {},
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "2px",
      xsmall: "4px",
      small: "8px",
      medium: "16px",
      large: "32px",
      xlarge: "64px",
      responsiveBreakpoint: "small",
    },
    input: {
      padding: "8px",
      weight: 600,
    },
    spacing: "16px",
    size: {
      xxsmall: "32px",
      xsmall: "64px",
      small: "128px",
      medium: "256px",
      large: "512px",
      xlarge: "768px",
      xxlarge: "1024px",
      full: "100%",
    },
  },
  chart: {},
  diagram: {
    line: {},
  },
  meter: {},
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
  button: {
    border: {
      width: "2px",
      radius: "12px",
    },
    padding: {
      vertical: "2px",
      horizontal: "14px",
    },
  },
  checkBox: {
    check: {
      radius: "0px",
    },
    toggle: {
      radius: "16px",
      size: "32px",
    },
    size: "16px",
  },
  radioButton: {
    size: "16px",
  },
  formField: {
    border: {
      color: "border",
      side: "bottom",
    },
    content: {
      pad: "small",
    },
    disabled: {
      background: {
        color: "status-disabled",
        opacity: "medium",
      },
    },
    error: {
      color: "status-critical",
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    help: {
      color: "dark-3",
      margin: {
        start: "small",
      },
    },
    label: {
      margin: {
        vertical: "xsmall",
        horizontal: "small",
      },
    },
    margin: {
      bottom: "small",
    },
    round: "0px",
  },
  calendar: {
    small: {
      fontSize: "8.8px",
      lineHeight: 1.375,
      daySize: "18.29px",
    },
    medium: {
      fontSize: "12px",
      lineHeight: 1.45,
      daySize: "36.57px",
    },
    large: {
      fontSize: "21.6px",
      lineHeight: 1.11,
      daySize: "73.14px",
    },
  },
  clock: {
    analog: {
      hour: {
        width: "5px",
        size: "16px",
      },
      minute: {
        width: "3px",
        size: "8px",
      },
      second: {
        width: "2px",
        size: "6px",
      },
      size: {
        small: "48px",
        medium: "64px",
        large: "96px",
        xlarge: "144px",
        huge: "192px",
      },
    },
    digital: {
      text: {
        xsmall: {
          size: "5.6000000000000005px",
          height: 1.5,
        },
        small: {
          size: "8.8px",
          height: 1.43,
        },
        medium: {
          size: "12px",
          height: 1.375,
        },
        large: {
          size: "15.2px",
          height: 1.167,
        },
        xlarge: {
          size: "18.4px",
          height: 1.1875,
        },
        xxlarge: {
          size: "24.799999999999997px",
          height: 1.125,
        },
      },
    },
  },
  heading: {
    level: {
      "1": {
        small: {
          size: "25px",
          height: "29px",
          maxWidth: "397px",
        },
        medium: {
          size: "38px",
          height: "42px",
          maxWidth: "602px",
        },
        large: {
          size: "63px",
          height: "67px",
          maxWidth: "1011px",
        },
        xlarge: {
          size: "89px",
          height: "93px",
          maxWidth: "1421px",
        },
      },
      "2": {
        small: {
          size: "22px",
          height: "26px",
          maxWidth: "346px",
        },
        medium: {
          size: "31px",
          height: "35px",
          maxWidth: "499px",
        },
        large: {
          size: "41px",
          height: "45px",
          maxWidth: "653px",
        },
        xlarge: {
          size: "50px",
          height: "54px",
          maxWidth: "806px",
        },
      },
      "3": {
        small: {
          size: "18px",
          height: "22px",
          maxWidth: "294px",
        },
        medium: {
          size: "25px",
          height: "29px",
          maxWidth: "397px",
        },
        large: {
          size: "31px",
          height: "35px",
          maxWidth: "499px",
        },
        xlarge: {
          size: "38px",
          height: "42px",
          maxWidth: "602px",
        },
      },
      "4": {
        small: {
          size: "15px",
          height: "19px",
          maxWidth: "243px",
        },
        medium: {
          size: "18px",
          height: "22px",
          maxWidth: "294px",
        },
        large: {
          size: "22px",
          height: "26px",
          maxWidth: "346px",
        },
        xlarge: {
          size: "25px",
          height: "29px",
          maxWidth: "397px",
        },
      },
      "5": {
        small: {
          size: "10px",
          height: "14px",
          maxWidth: "166px",
        },
        medium: {
          size: "10px",
          height: "14px",
          maxWidth: "166px",
        },
        large: {
          size: "10px",
          height: "14px",
          maxWidth: "166px",
        },
        xlarge: {
          size: "10px",
          height: "14px",
          maxWidth: "166px",
        },
      },
      "6": {
        small: {
          size: "9px",
          height: "13px",
          maxWidth: "141px",
        },
        medium: {
          size: "9px",
          height: "13px",
          maxWidth: "141px",
        },
        large: {
          size: "9px",
          height: "13px",
          maxWidth: "141px",
        },
        xlarge: {
          size: "9px",
          height: "13px",
          maxWidth: "141px",
        },
      },
    },
    font: {
      family: '"Roboto"',
    },
  },
  paragraph: {
    small: {
      size: "10px",
      height: "14px",
      maxWidth: "166px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "243px",
    },
    xlarge: {
      size: "18px",
      height: "22px",
      maxWidth: "294px",
    },
    xxlarge: {
      size: "25px",
      height: "29px",
      maxWidth: "397px",
    },
  },
  text: {
    xsmall: {
      size: "9px",
      height: "13px",
      maxWidth: "141px",
    },
    small: {
      size: "10px",
      height: "14px",
      maxWidth: "166px",
    },
    medium: {
      size: "12px",
      height: "16px",
      maxWidth: "192px",
    },
    large: {
      size: "15px",
      height: "19px",
      maxWidth: "243px",
    },
    xlarge: {
      size: "18px",
      height: "22px",
      maxWidth: "294px",
    },
    xxlarge: {
      size: "25px",
      height: "29px",
      maxWidth: "397px",
    },
  },
};
