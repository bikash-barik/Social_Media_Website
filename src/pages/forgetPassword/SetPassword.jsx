import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetpassword } from "../../Redux/actions/userAction";

import "../../style.css";

import { CircularProgress } from "@material-ui/core";
export default function SetPassword({ history }) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email && !code) {
      alert("Please Enter your Correct email and Code");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dispatch(resetpassword(email, code, password));
      history.push("/login");
      console.log("Chack Your Mailid.....");
    }
  };

  return (
    <div>
      <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>

        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText1" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText1">
                </div> */}
      </nav>

      {/* <div class="bg_manage"> */}
      <div class="container">
        <div class="">
          <div class="row  justify-content-center">
            <div class="col-md-6">
              <div class="signin-form">
                <h1>Create new password</h1>
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
                    type="text"
                    id="code"
                    name="validation code"
                    placeholder="OTP Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <input
                    type="password"
                    id="password"
                    name="validation password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="validation password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <br />

                  <br />
                  <span id="messages"></span>

                  <span id="messages2"></span>

                  <input
                    type="submit"
                    name="submit"
                    value="Update My Password"
                  />
                  {/* {isFetching ? (
                                            <CircularProgress color="white" size="20px" />
                                        ) : (
                                            ""
                                        )} */}
                </form>

                <div class="row">
                  <div class="col-md-12">
                    <div class="text_right">
                      <a href="/login" class="sin_up">
                        <img src="https://img.icons8.com/material-rounded/15/000000/less-than.png" />
                        Back to Sign In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
