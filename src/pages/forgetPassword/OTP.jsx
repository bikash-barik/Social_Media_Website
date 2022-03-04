// import "./OTPVerify.css";
import React, { Component, useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import "../../style.css";
import "./OTP.css";
// ==========backend call==========
import { otpVerify } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const OTP = ({history}) => {
  const [email, setEmail] = useState("");
  const [oTP, setOTP] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!oTP) {
      alert("Please Enter your Correct otp and MailId");
    } else {
      dispatch(otpVerify(email, oTP));
      history.push("/");
      console.log("otp succesfull.....");
    }
  };

  //theme
  const classes = useStyles();
  const theme = useTheme();
  //otp
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Timer

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      {/* ============= Nav======================== */}
      <nav class=" navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>
      </nav>
      {/* =================Nav End================== */}

      <Container component="main" maxWidth="sm" className="Container">
        <div className={classes.paper}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            className={classes.grid}
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item container justify="center">
              <Grid item container alignItems="center" direction="column">
                <Grid item>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Verification Code
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Paper elevation={0}>
                <Typography variant="h6">
                  Please enter the verification code sent to your EmailId
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justify="center"
              alignItems="center"
              direction="column"
            >
              <input
                    type="text"
                    id="username"
                    name="validation password"
                    placeholder="Email / Phone No"
                    autocomplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    style={{
                      border: "2px solid #c12179",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "20px",
                      fontWeight: "bold",
                      width: "80%",
                      padding: "10px 10px",
                      background: "transparent",
                      color: "black",
                      marginTop: "5px",
                    }}
                  />

                  

                  <input
                    type="text"
                    id="otp"
                    name="validation code"
                    placeholder="OTP Code"
                    value={oTP}
                    onChange={(e) => setOTP(e.target.value)}

                    style={{
                      border: "2px solid #c12179",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontSize: "20px",
                      fontWeight: "bold",
                      width: "80%",
                      padding: "10px 10px",
                      background: "transparent",
                      color: "black",
                      marginTop: "5px",
                    }}
                  />
              {/* <Grid item spacing={3} justify="center">
                <OtpInput
                  className="OtpInput"
                  onChange={(otp) => console.log(otp)}
                  numInputs={6}
                  value={oTP}
                  onChange={(e) => setOTP(e.target.value)}
                  separator={
                    <span>
                      <strong></strong>
                    </span>
                  }
                  inputStyle={{
                    width: "2.9rem",
                    height: "2.9rem",
                    margin: "0 0.2rem",
                    fontSize: "1rem",
                    borderRadius: 10,
                    border: "1px solid rgba(193, 33, 121,0.3)",
                  }}
                />
              </Grid> */}
              {/* <div className="otp_Input">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div> */}

              <Grid
                item
                xs={12}
                textAlign="center"
                style={{ marginTop: "20px" }}
              >
                <Paper elevation={0}>
                  <Typography variant="h6" className="mob_resend">
                    Did not receive the code?{" "}
                    <a href="/forgetpassword" style={{ color: "#c12179" }}>
                      Resend SMS
                    </a>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    className="mob_resend"
                  >
                    {" "}
                    Resend OTP in{" "}
                    <span style={{ color: "#c12179", fontWeight: "bold" }}>
                      {" "}
                      00:{counter}
                    </span>{" "}
                  </Typography>
                </Paper>
              </Grid>
              <input
                onClick={submitHandler}
                type="submit"
                name="submit"
                value="Verify"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "80%",
                  padding: "10px 0",
                  background: "#c12179",
                  color: "white",
                  marginTop: "35px",
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default OTP;
