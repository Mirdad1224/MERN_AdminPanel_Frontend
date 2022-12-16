import { useSelector } from "react-redux";
import { themeSettings } from "../theme";
import { selectMode } from "../redux/mode";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {Outlet} from 'react-router-dom'
import { PaletteMode } from "@mui/material";
import '../types/theme.d'

const ThemeWrapper = () => {
    const mode = useSelector(selectMode) as PaletteMode;
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <ThemeProvider theme={theme}>
        <Outlet />
    </ThemeProvider>
  )
}

export default ThemeWrapper