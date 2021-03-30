// These do not:

// import { AnimationClassNames } from "@fluentui/style-utilities";
// console.log("here is AnimationClassNames: ", AnimationClassNames);

// import { buildClassMap } from "@fluentui/style-utilities";
// console.log("here is buildClassMap: ", buildClassMap);

// This triggers the issue:
import { initializeIcons } from "@fluentui/react";
initializeIcons();
