import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const commonStyles = {
  m: 4,
  border: 1,
  // width: "5rem",
  // height: "5rem",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 2 }}
      >
        <Box sx={{ gridColumn: "span 8" }}>
          <Box sx={{ ...commonStyles, borderColor: "#000" }}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Sessions</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                98.3 K
              </Box>
              <Box
                sx={{
                  color: "success.dark",
                  display: "inline",
                  fontWeight: "bold",
                  mx: 0.5,
                  fontSize: 14,
                }}
              >
                +18.77%
              </Box>
              <Box
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: 14,
                }}
              >
                vs. last week
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ gridColumn: "span 4" }}>
          {/* <Item>xs=4</Item> */}
          <Typography variant="h4" p={3} m={2}>
            Welcome to Phone Box
          </Typography>
        </Box>
        <Box sx={{ gridColumn: "span 12" }}>
          <Item>xs=12</Item>
        </Box>
        <Box sx={{ gridColumn: "span 12" }}>
          <Item>xs=12</Item>
        </Box>
      </Box>
    </Box>
  );
}
