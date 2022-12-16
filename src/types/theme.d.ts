// import { ThemeOptions } from "@mui/material/styles";
import { PaletteMode} from "@mui/material";


declare module "@mui/material/styles" {
  interface Palette {
    mode?: string
    primary?: PalletColor;
    secondary?: PalletColor;
    neutral?: PaletteColor;
    bg?: PaletteColor ;
  }

  interface PaletteOptions {
    mode?: PaletteMode
    primary?: PalletColorOptions;
    secondary?: PalletColorOptions;
    neutral?: PalletColorOptions;
    bg?: PalletColorOptions;
  }

  interface SimplePaletteColorOptions {
    0?: string; 
    10?: string; 
    50?: string; 
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    1000?: string;
    main?: string;
    light?: string;
    alt?: string;
    default?: string;
  }

  interface PaletteColor {
    0?: string; 
    10?: string; 
    50?: string; 
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    1000?: string;
    main?: string;
    light?: string;
    alt?: string;
    default?: string;
  }

//   interface Theme {}

//   interface ThemeOptions {}
}
