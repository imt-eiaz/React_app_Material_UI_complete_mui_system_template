import React from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
// import Grid2 from "@mui/material/Grid2";
import Grid from "@mui/material/Grid2";

export default function Body() {
  return (
    <Grid container>
      <Grid item size={{ md: 3 }}>
        <Paper>Paper 1</Paper>
      </Grid>

      <Grid item size={{ md: 3 }}>
        <Paper>Paper 2</Paper>
      </Grid>

      <Grid item size={{ md: 3 }}>
        <Paper>Paper 3</Paper>
      </Grid>

      <Grid item size={{ md: 3 }}>
        <Paper>Paper 4</Paper>
      </Grid>
    </Grid>
  );
}
