// this _will_ cause a repro:

import { getGlobalClassNames } from '../../Styling';

export const classNames = getGlobalClassNames({} as any, {} as any, false);

// this _will_ this cause a repro.

// import { getGlobalClassNames } from '../../Styling';

// const GlobalClassNames = {
//   root: 'ms-Overlay',
//   rootDark: 'ms-Overlay--dark',
// };

// export const classNames = getGlobalClassNames(GlobalClassNames, {} as any);

// // this _will_ cause a repro

// import { getGlobalClassNames } from '../../Styling';

// const GlobalClassNames = {
//   root: 'ms-Overlay',
//   rootDark: 'ms-Overlay--dark',
// };

// export const getStyles = (props: any): any => {
//   const classNames = getGlobalClassNames(GlobalClassNames, props.theme);

//   return classNames;
// };

// This _will_ cause a repro:

// import { IOverlayStyleProps } from './Overlay.types';
// import { getGlobalClassNames } from '../../Styling';

// const GlobalClassNames = {
//   root: 'ms-Overlay',
//   rootDark: 'ms-Overlay--dark',
// };

// export const getStyles = (props: IOverlayStyleProps): any => {
//   const classNames = getGlobalClassNames(GlobalClassNames, props.theme);

//   return classNames;
// };

// This WILL NOT cause a repro:

// import { createTheme } from '../../Styling';
// export const myTheme2 = createTheme();

// This WILL cause a repro:

// import { IOverlayStyleProps, IOverlayStyles } from './Overlay.types';
// import { HighContrastSelector, getGlobalClassNames } from '../../Styling';

// const GlobalClassNames = {
//   root: 'ms-Overlay',
//   rootDark: 'ms-Overlay--dark',
// };

// export const getStyles = (props: IOverlayStyleProps): IOverlayStyles => {
//   const { className, theme, isNone, isDark } = props;

//   const { palette } = theme;

//   const classNames = getGlobalClassNames(GlobalClassNames, theme);

//   return {
//     root: [
//       classNames.root,
//       theme.fonts.medium,
//       {
//         backgroundColor: palette.whiteTranslucent40,
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         position: 'absolute',

//         selectors: {
//           [HighContrastSelector]: {
//             border: '1px solid WindowText',
//             opacity: 0,
//           },
//         },
//       },

//       isNone && {
//         visibility: 'hidden',
//       },

//       isDark && [
//         classNames.rootDark,
//         {
//           backgroundColor: palette.blackTranslucent40,
//         },
//       ],

//       className,
//     ],
//   };
// };

export const aStringFromOverlayOverlay = 'here is a string from components/Overlay/repro.ts';
