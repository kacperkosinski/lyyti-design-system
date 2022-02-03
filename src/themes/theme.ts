import { createTheme } from '@material-ui/core/styles';
import type {} from '@material-ui/lab/themeAugmentation';

const baseFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const objektivMk1FontFamily = ['"Objektiv MK1"'].concat(baseFontStack).join(',');
const objektivMk3FontFamily = ['"Objektiv MK3"'].concat(baseFontStack).join(',');

interface ColorStateOptions {
  activeContained: string;
  hover: string;
  selected: string;
  activeOutlined: string;
  outlinedStroke: string;
  disabledBg: string;
}

interface ColorShadeOptions {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    primaryStates: ColorStateOptions;
    light: ColorShadeOptions;
    lightStates: ColorStateOptions;
  }
  interface PaletteOptions {
    primaryStates: ColorStateOptions;
    light: ColorShadeOptions;
    lightStates: ColorStateOptions;
  }
}

export default createTheme({
  palette: {
    primary: {
      main: '#045B56',
      dark: '#034E49',
      light: '#05756F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EE8B3A',
      dark: '#DD6E13',
      light: '#F2A96D',
      contrastText: '#FFFFFF',
    },
    light: {
      main: '#FAFAFA',
      dark: '#F3F3F3',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#1F98CD',
      dark: '#18769F',
      light: '#7CCEE9',
      contrastText: '#1F98CD',
    },
    error: {
      main: '#D1492E',
      dark: '#A33924',
      light: '#F4A094',
      contrastText: '#D1492E',
    },
    warning: {
      main: '#F09000',
      dark: '#B86D00',
      light: '#FFC573',
      contrastText: '#F09000',
    },
    success: {
      main: '#50B54E',
      dark: '#3E903C',
      light: '#99DCA1',
      contrastText: '#50B54E',
    },
    text: {
      primary: '#192832',
      secondary: '#7A8389',
      disabled: 'rgba(122, 131, 137, 0.5)',
    },
    action: {
      hover: 'rgba(122, 131, 137, 0.1)',
      selected: 'rgba(122, 131, 137, 0.08)',
      disabled: '#B8BCBF',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    grey: {
      '50': '#F9FAFB',
      '100': '#E3E6E9',
      '200': '#B1B9BE',
      '300': '#7A8389',
      '400': '#46545B',
      '500': '#192832',
    },
    primaryStates: {
      activeContained: 'rgba(255, 255, 255, 0.3)',
      hover: 'rgba(4, 91, 86, 0.1)',
      selected: 'rgba(4, 91, 86, 0.08)',
      activeOutlined: 'rgba(4, 91, 86, 0.24)',
      outlinedStroke: '#045B56',
      disabledBg: '#739C9A',
    },
    lightStates: {
      activeContained: 'rgba(250, 250, 250, 0.3)',
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 255, 255, 0.08)',
      activeOutlined: 'rgba(255, 255, 255, 0.24)',
      outlinedStroke: 'rgba(255, 255, 255, 0.5)',
      disabledBg: '#E9E9E9',
    },
  },
  typography: {
    fontFamily: objektivMk3FontFamily,
    h1: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '-2%',
    },
    h2: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '2.25rem',
      letterSpacing: '-2%',
    },
    h3: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.875rem',
      letterSpacing: '-1%',
    },
    h4: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.375rem',
      letterSpacing: '0em',
    },
    h5: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.125rem',
      letterSpacing: '0em',
    },
    subtitle1: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.1px',
    },
    subtitle2: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0em',
    },
    body2: {
      fontSize: '1rem',
      letterSpacing: '0em',
    },
    button: {
      fontFamily: objektivMk1FontFamily,
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.625',
      letterSpacing: '0.01rem',
    },
    caption: {
      fontFamily: objektivMk1FontFamily,
      fontSize: '0.75rem',
      letterSpacing: '0em',
    },
    overline: {},
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
    MuiSwitch: {
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04)',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'rgba(4, 91, 86, 0.08)',
          '&:hover': {
            backgroundColor: 'rgba(4, 91, 86, 0.1)',
          },
        },
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgba(4, 91, 86, 0.1)',
        },
      },
    },
  },
});
