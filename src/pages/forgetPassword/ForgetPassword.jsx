import React, { Component, useState,useEffect} from "react";
import "../../style.css";
import { forgetPassword } from "../../Redux/actions/userAction";
import { useDispatch , useSelector} from "react-redux";

export default function Forgetpassword({history}) {
  const [email, setEmail] = useState("");
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
    if (!email) {
      alert("Please Enter your Correct email.");
    } else {
      dispatch(forgetPassword(email));
      history.push("/SetNewPassword");
      console.log("Forget Password succesfull.....");
    }
  };

  return (
    <div>
      <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" class="navbar_logo" />
        </a>
      </nav>

      <div class="bg_managec">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="signin-form">
                <h1>Reset Password</h1>
                <p>
                  Enter the email and we'll send you a link to reset your
                  password
                </p>
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email / Phone No"
                    autocomplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <br />
                  <span id="messages"></span>

                  <span id="messages2"></span>

                  <input
                    src=""
                    type="submit"
                    name="submit"
                    value="Submit"
                  />
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
    </div>
  );
}
