import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { selectUserId } from "../redux/mode";
import { useGetUserQuery } from "../redux/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(isNonMobile);
  const userId = useSelector(selectUserId);
  const { data } = useGetUserQuery(userId);
  const theme = useTheme();

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      maxWidth="100%"
      minHeight="100%"
      bgcolor={
        theme.palette.mode === "dark"
          ? theme.palette?.bg?.default
          : theme.palette?.bg?.alt
      }
      paddingBottom='2rem'
    >
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
