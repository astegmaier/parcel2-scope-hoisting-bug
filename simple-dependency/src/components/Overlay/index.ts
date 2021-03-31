// Actually importing these files has something to do with causing the repro
// export * from './Overlay';
// export * from './Overlay.base';
// export * from './Overlay.types';

// This, by itself (when repro2 just contains a string export) does _not_ repro the problem
// When repro2 contains more stuff (see that file), it is possible to trigger the repro.
export * from './repro2';

export const aStringFromOverlayIndex = 'here is a string from components/Overlay/index.ts';
