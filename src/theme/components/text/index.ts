import textStyles from "./textStyles";

// types
import type { color, className, type } from "../../../types/components/text";
import { propTypesColor, propTypesType } from "../../../types/components/text";

export interface TextStylesType {
  defaultProps?: {
    type?: type;
    color?: color;
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
      h1?: typeof textStyles.h1;
      h2?: typeof textStyles.h2;
      h3?: typeof textStyles.h3;
      h4?: typeof textStyles.h4;
      h5?: typeof textStyles.h5;
      h6?: typeof textStyles.h6;
      p?: typeof textStyles.p;
    };
  };
}

export const text: TextStylesType = {
  defaultProps: {
    type: "p",
    color: "gray",
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
      h1: textStyles.h1,
      h2: textStyles.h2,
      h3: textStyles.h3,
      h4: textStyles.h4,
      h5: textStyles.h5,
      h6: textStyles.h6,
      p: textStyles.p,
    },
  },
};

export default text;
