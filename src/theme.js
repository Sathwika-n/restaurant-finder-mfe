import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: "#050B20",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans",
        },
        subHeading: {
          fontSize: "40px",
          fontWeight: "700",
        },
        columnHeading: {
          fontSize: "30px",
          fontWeight: "700",
        },
        haveAccount: {
          fontSize: "18px",
          fontWeight: "400",
          color: "#004687",
        },
        boldHaveAccount: {
          fontSize: "18px",
          fontWeight: "700",
          color: "#004687",
        },
        columnSubHeading: {
          fontSize: "12px",
        },
        category: {
          fontSize: "24px",
          fontWeight: "700",
          color: "#004687",
        },
        cardTitle: {
          fontSize: "15px",
          fontWeight: "500",
        },
        reviewTitle: {
          fontSize: "18px",
          fontWeight: "900",
        },
        reviewContent: {
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          height: "48px",
          justifyContent: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "2px 16px",
          outline: "none",
        },
        signUp: {
          backgroundColor: "#004687",
          color: "white",
          fontFamily: "DM Sans",
          fontSize: 15,
          fontWeight: "500",
          borderRadius: "50px",
          height: "40px",
          width: "118px",
        },
        regular: {
          backgroundColor: "#004687",
          color: "white",
          fontFamily: "DM Sans",
          fontSize: 15,
          fontWeight: "500",
          borderRadius: "50px",
          height: "40px",
        },
        navItem: {
          fontFamily: "DM Sans",
          fontSize: 15,
          fontWeight: "100",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // Outer container styles
          borderRadius: "50px",
          backgroundColor: "rgb(241, 246, 252)", // Light blue background
          padding: "0 16px",
          width: "100%", // Adjust width as needed
          marginTop: 0, // Remove top margin
          marginBottom: 0, // Remove bottom margin
          width: "18rem",
        },
      },
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
        notchedOutline: {
          border: "none", // Removes the default border
        },
        input: {
          padding: "12px 16px",
          fontSize: "16px",
          fontFamily: "DM Sans",
          color: "#655b5b", // Light gray text color for the placeholder
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "#d32f2f",
            fontFamily: "DM Sans",
          },
        },
      },
    },
  },
});

export default theme;
