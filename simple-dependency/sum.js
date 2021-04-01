import { add } from "simple-dependency2";

// This is NOT used by parcel-repro-simple
export const sum = add(3, 3);

// This is the ONLY thing that is used by parcel-repro-simple
export const aStringExport = "here is a string exported from simple-dependency";
