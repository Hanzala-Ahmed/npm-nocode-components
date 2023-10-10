import PropTypes from "prop-types";
import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { children, className, color, type } from "../../types/components/text";
import {
  propTypesChildren,
  propTypesClassName,
  propTypesColor,
  propTypesType,
} from "../../types/components/text";

export interface TextProps {
  color?: color;
  className?: className;
  children: children;
  type?: type;
}

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ type, color, className, children, ...rest }, ref) => {
    // 1. init
    const { text } = useTheme();
    const { defaultProps, valid, styles } = text;
    const { base, types } = styles;

    // 2. set default props
    type = type ?? defaultProps.type;
    color = color ?? defaultProps.color;
    className = className ?? defaultProps.className;

    // 3. set styles
    const textBase = objectsToString(base.text);
    const textType = objectsToString(types[findMatch(valid.types, type, "p")]);
    const classes = twMerge(classnames(textBase, textType), className);

    // 4. return
    return (
      <div ref={ref} className={`${classes}`} {...rest}>
        {children}
      </div>
    );
  },
);

Text.propTypes = {
  type: PropTypes.oneOf(propTypesType),
  color: PropTypes.oneOf(propTypesColor),
  className: propTypesClassName,
  children: propTypesChildren,
};

Text.displayName = "MaterialTailwind.Text";

export default Text;
