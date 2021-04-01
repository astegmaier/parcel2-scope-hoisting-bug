import { getGlobalClassNames } from "simple-dependency2";

export const classNames = getGlobalClassNames();

// This is the only thing that we're ultimately going to try to import into parcel.
export const aStringExport = "here is a string exported from simple-dependency";
