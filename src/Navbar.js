import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Aiensured</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
