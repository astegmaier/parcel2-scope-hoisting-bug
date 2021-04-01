// Importing any component from @fluentui/react will trigger a runtime error when scope-hoisting is on.
import { Overlay } from "@fluentui/react";
console.log("here is Overlay: ", Overlay);

// This also triggers the issue:
// import { initializeIcons } from "@fluentui/react";
// initializeIcons();
