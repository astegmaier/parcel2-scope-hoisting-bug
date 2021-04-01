// These do not:

// import { AnimationClassNames } from "@fluentui/style-utilities";
// console.log("here is AnimationClassNames: ", AnimationClassNames);

// import { buildClassMap } from "@fluentui/style-utilities";
// console.log("here is buildClassMap: ", buildClassMap);

// This triggers the issue:
import { initializeIcons } from "@fluentui/react";
initializeIcons();

// This also triggers a different issue:
// import { Overlay } from "@fluentui/react";
// console.log("here is Overlay: ", Overlay);

// "aString" was exported from "@fluentui/react/src/index.ts", and it works fine.
// import { aString } from "@fluentui/react";
// console.log(aString)

// This works, too, but the and the output starts using $parcel$exportWildcard
// import { aStringFromOverlay } from "@fluentui/react";
// console.log(aStringFromOverlay);

// This works, too.
// import { aStringFromOverlayIndex } from "@fluentui/react";
// console.log(aStringFromOverlayIndex);

// This blows up (hooray!). It's imported from "@fluentui/react/src/components/Overlay/Overlay.ts"
// import { aStringFromOverlayOverlay } from "@fluentui/react";
// console.log(aStringFromOverlayOverlay);
