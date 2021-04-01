import { add } from "simple-dependency2";

// This is unused by parcel-repro-simple
export const sum = add(3, 3);

// This is the only thing that we're ultimately going to try to import into parcel.
export const aStringExport = "here is a string exported from simple-dependency";
