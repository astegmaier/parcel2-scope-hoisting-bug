export * from "simple-dependency";
import "./sideEffect";

export function somethingFromReExportPackage() {
  return "this function came from the re-exporting package";
}
