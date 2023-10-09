import textH2 from "./textH2";
import textH1 from "./textH1";
import textH3 from "./textH3";
import textH4 from "./textH4";
import textH5 from "./textH5";
import textH6 from "./textH6";
import textP from "./textP";

// types
import type { color, action, animate, className, type } from "../../../types/components/text";
import { propTypesColor, propTypesType } from "../../../types/components/text";

export interface TextStylesType {
  defaultProps?: {
    type?: type;
    color?: color;
    action?: action;
    animate?: animate;
    className?: className;
  };
  valid?: {
    types?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      text?: object;
      action?: object;
    };
    types?: {
      h1?: typeof textH1;
      h2?: typeof textH2;
      h3?: typeof textH3;
      h4?: typeof textH4;
      h5?: typeof textH5;
      h6?: typeof textH6;
      p?: typeof textP;
    };
  };
}

export const text: TextStylesType = {
  defaultProps: {
    type: "p",
    color: "gray",
    action: undefined,
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  valid: {
    types: propTypesType,
    colors: propTypesColor,
  },
  styles: {
    base: {
      text: {
        display: "block",
        fontFamily: "font-sans",
        mx: "mx-0",
        my: "my-0",
      },
    },
    types: {
      h1: textH1,
      h2: textH2,
      h3: textH3,
      h4: textH4,
      h5: textH5,
      h6: textH6,
      p: textP,
    },
  },
};

export default text;
