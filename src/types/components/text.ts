import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Alert component.
 */

// typescript types
export type color = colors;
export type className = string;
export type children = ReactNode;
export type type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

// javascript prop-types
export const propTypesColor: any = propTypesColors;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesType: any = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
