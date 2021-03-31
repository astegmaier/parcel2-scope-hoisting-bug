import { getGlobalClassNames } from "@fluentui/style-utilities";

export const classNames = getGlobalClassNames({} as any, {} as any, false);

// This is the only thing that we're ultimately going to try to import into parcel.
export const aStringExport = "here is a string exported from simple-dependency";
