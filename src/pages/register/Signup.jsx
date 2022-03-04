import React, { useState, useEffect } from "react";
import "../../style.css";
import { register } from "../../Redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function Signup({history}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    
    useEffect(() => {
      if (userInfo) {
        history.push("/");
      }
    }, [history, userInfo]);



  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else {
      dispatch(register(firstName, lastName, email, password));
      history.push("/OTP");
    }
  };

  
  

  return (
    <div>
      <nav className="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
        <a className="navbar-brand font-bold mob_75" href="index.html">
          <img src="images/logo.png" className="navbar_logo" />
        </a>
      </nav>

      <div className="">
        <div className="container">
          <div className="main_bg">
            <div className="row">
              <div className="col-md-3 mobile_none">
                <div className="signin-first">
                  <div className="signup_a">
                    <a href="/login" className="signin">
                      Sign In
                    </a>
                  </div>
                  <div className=" signin_h4">
                    <a href="signup.html" className="signup">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3  desktop">
                <div className="signin-img2"></div>
                <div className="img-rectangle2">
                  <img src="images/logo_center.png" className="signup_logo" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="signin-form-signup" style={{ padding: "0px" }}>
                  <h1>Create An Account</h1>
                  <form onSubmit={submitHandler}>
                    <div className="row desktop" style={{ width: "87%" }}>
                      <div className="col-md-6">
                        <input
                          type="text"
                          id="username"
                          name="validation password"
                          placeholder="First Name"
                          autocomplete="off"
                          style={{ width: "100%", outline: "none" }}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <br />
                        <span id="messages" style={{ outline: "none" }}></span>
                      </div>

                      <div className="col-md-6">
                        <input
                          type="text"
                          id="username2"
                          name="validation password"
                          placeholder="Last Name"
                          autocomplete="off"
                          style={{ width: "100%", outline: "none" }}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <br />
                        <span id="messages2" style={{ outline: "none" }}></span>
                      </div>
                    </div>
                    {/* <input type="text" id="username" name="validation password" placeholder="First Name" autocomplete="off" className="mob" style={{ outline: 'none' }} />
                                        <span id="messages"></span> */}

                    {/* <input type="text" id="username2" name="validation password" placeholder="Last Name" autocomplete="off" className="mob" style={{ outline: 'none' }} />
                                        <span id="messages2"></span> */}

                    <input
                      type="text"
                      id="email"
                      name="validation password"
                      placeholder="Email address"
                      autocomplete="off"
                      style={{ outline: "none" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <span id="messages3"></span>

                    <input
                      type="password"
                      id="password"
                      name="validation password"
                      placeholder="Password"
                      style={{ outline: "none" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <span id="messages4"></span>

                    <input
                      type="password"
                      id="password"
                      name="validation password"
                      placeholder="Conform Password"
                      style={{ outline: "none" }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                    <span id="messages4"></span>

                    <input
                      type="text"
                      id="contact"
                      name="signin"
                      placeholder="Contact"
                      style={{ outline: "none" }}
                    />
                    <br />
                    <span id="messages5"></span>

                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      style={{ outline: "none" }}
                    />
                    {/* <input type="text" name="signin" placeholder="Date of Birth"/> */}
                    <p>
                      By clicking Sign up. You agree to our term, Data Policy
                      and cookie policy, You may receive SMS notifications from
                      us can opt out at any time.
                    </p>
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      style={{
                        outline: "none",
                        background: "#c12179",
                        color: "white",
                      }}
                    />
                  </form>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="text_right3">
                      <a href="/login" className="sin_up">
                        Sign In
                      </a>
                      <p className="account">
                        If you have already have account with us.
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
  );
}
