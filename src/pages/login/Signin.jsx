import React, { Component, useState, useEffect } from "react";
import "../../style.css";
import { login } from "../../Redux/actions/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
 
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/OTP");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please Enter your Correct email and password");
    } else {
      dispatch(login(email, password));
      console.log("login succesfull.....");
    }
  };

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>
      </nav>

      <div class="bg_manage">
        <div class="container">
          <div class="main_bg">
            <div class="row">
              <div class="col-md-3">
                <div class="signin-first mobile_none">
                  <div class="signin_h4">
                    <h4>Sign In</h4>
                  </div>
                  <div class="signup_a ">
                    <a href="/register" class="signup_clr">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mobile_none">
                <div class="img-rectangle"></div>
                <div class="signin-img">
                  <img src="images/logo_center.png" class="logo_center" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="signin-form">
                  <h1>Sign In</h1>
                  <form onSubmit={submitHandler}>
                    <input
                      type="text"
                      id="username"
                      name="validation password"
                      placeholder="Email / Phone No"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <br />
                    <span id="messages"></span>

                    <input
                      type="password"
                      id="password"
                      name="validation password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <span id="messages2"></span>

                    <div
                      class="signin-form-f-p-s-p"
                      style={{ padding: "5px 0px" }}
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <a href="/forgetpassword" class="pass">
                            Forgot Password?
                          </a>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                    </div>
                    <input type="submit" name="submit" value="Sign In" />
                    {/* {isFetching ? (
                                                <CircularProgress color="white" size="20px" />
                                            ) : (disabled={isFetching}
                                                ""
                                            )} */}

                    {/* <button type="button">Register with Us</button> */}
                  </form>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="text_right">
                        <a href="/register" class="sin_up">
                          Sign Up
                        </a>
                        <p class="account">
                          If you don't have account with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

// const mapStateToProps = (state) => {
//     return {
//       user: state.userState?.user,
//     };
//   };
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       Signin: () => dispatch(login())
//     }
//   }

//   export default connect(mapStateToProps, mapDispatchToProps)(Signin);
