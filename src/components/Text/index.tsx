import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { AnimatePresence, m, MotionProps, domAnimation, LazyMotion } from "framer-motion";

// utils
import classnames from "classnames";
import merge from "deepmerge";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type {
  color,
  action,
  animate,
  className,
  children,
  type,
} from "../../types/components/text";
import {
  propTypesColor,
  propTypesAction,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
  propTypesType,
} from "../../types/components/text";
import IconButton from "../IconButton";

export interface TextProps extends Omit<MotionProps, "animate"> {
  color?: color;
  action?: action;
  animate?: animate;
  className?: className;
  children: children;
  type?: type;
}

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ type, color, action, animate, className, children, ...rest }, ref) => {
    // 1. init
    const { text } = useTheme();
    const { defaultProps, valid, styles } = text;
    const { base, variants } = styles;

    // 2. set default props
    type = type ?? defaultProps.type;
    color = color ?? defaultProps.color;
    className = className ?? defaultProps.className;
    animate = animate ?? defaultProps.animate;
    action = action ?? defaultProps.action;

    // 3. set styles
    const textBase = objectsToString(base.text);
    const alertAction = objectsToString(base.action);
    const textType = objectsToString(
      variants[findMatch(valid.types, type, "p")][findMatch(valid.colors, color, "gray")],
    );
    const classes = twMerge(classnames(textBase, textType), className);

    // 4. set animation
    const mainAnimation = {
      unmount: {
        opacity: 0,
      },
      mount: {
        opacity: 1,
      },
    };
    const appliedAnimation = merge(mainAnimation, animate);

    // 5. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 6. return
    return (
      <LazyMotion features={domAnimation}>
        <NewAnimatePresence>
          <m.div
            {...rest}
            ref={ref}
            className={`${classes} block`}
            initial="unmount"
            exit="unmount"
            animate={open ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {children}
            {action || null}
          </m.div>
        </NewAnimatePresence>
      </LazyMotion>
    );
  },
);

Text.propTypes = {
  type: PropTypes.oneOf(propTypesType),
  color: PropTypes.oneOf(propTypesColor),
  action: propTypesAction,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Text.displayName = "MaterialTailwind.Text";

export default Text;
