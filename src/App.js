import Home from "./pages/home/Home";
import Login from "./pages/login/Signin";
import Profile from "./pages/profile/Profile";
import OTP from "./pages/forgetPassword/OTP";
import ProfileEdit from "./pages/profile/ProfileEdit";
import Register from "./pages/register/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";
import Connection from "./pages/connection/connection";
import Notification from "./pages/notification/Notification";
import Forgetpassword from "./pages/forgetPassword/ForgetPassword";
import SetNewPassword from "./pages/forgetPassword/SetPassword";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Forgetpassword" component={Forgetpassword} />
        <Route exact path="/SetNewPassword" component={SetNewPassword} />
        <Route exact path="/OTP" component={OTP} />
        <Route exact path="/messenger" component={Messenger} />
        <Route exact path="/connection" component={Connection} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profileEdit" component={ProfileEdit} />
        {/* <Route exact path="/user/:id" component={Profile} />
        <Route exact path="/post/:id" component={ProfileEdit} />
         */}
      </Switch>
    </Router>
  );
}

export default App;
