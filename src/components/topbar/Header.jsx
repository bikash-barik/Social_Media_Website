import React, { Component } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { logout } from "../../Redux/actions/userAction";

const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {  userInfo } = userLogin

const logoutHandler = () => {
  dispatch(logout())
}
  return (
    <>
      {/* // <!--.Navbar --> mob_75 */}
      <nav class="mb-4 navbar navbar-expand-lg navbar-dark red darken-2">
        <a class="navbar-brand font-bold mob_75 mobile_none" href="#">
          <img src="images/logo.png" class="navbar_logo" />
        </a>

       
        <div class=" navbar-collapse" id="navbarText1">
          <div class="mob_margin col-md-7">
            <form class="form-inline full_width">
              <input
                type="text"
                class="nav-link width_80"
                placeholder="Search ........."
              />
              <a href="#" class="menu_search">
                <img src="https://img.icons8.com/material-outlined/28/000000/search--v1.png" />
              </a>
            </form>
          </div>

          <div class="col-md-3">
            <div class="social-media-number">
              <a href="/" class="fa social_media">
                <img src="https://img.icons8.com/material-sharp/28/ffffff/home.png" />
              </a>
              <a href="/connection" class="fa social_media">
                <img src="https://img.icons8.com/ios-glyphs/28/ffffff/person-male.png" />
                <h6>6</h6>
              </a>
              <a href="/messenger" class="fa social_media">
                <img src="https://img.icons8.com/windows/28/ffffff/chat--v1.png" />
                <h6>2</h6>
              </a>
              <a href="/notification" class="fa  social_media">
                <img src="https://img.icons8.com/ios/28/ffffff/appointment-reminders.png" />
                <h6>8</h6>
              </a>
            </div>
          </div>

          <div class="col-md-2">
              <div class="row">
                <div class="col-md-7 col-sm-2 col-xs-2">
                    <a class="" href="/profile">
                    <img
                      src="images/user.png"
                      class="user_image user_image_top"
                    />
                  </a>
                </div>
                <div class="col-md-9 col-sm-12 col-xs-3">
                  <div class="dropdown">
                    <button
                      class=" side_btn1"
                      type="button"
                      data-toggle="dropdown"
                    >
                      <img style={{textDecoration: "none"}} src="https://img.icons8.com/material-rounded/32/ffffff/settings.png" />
                    </button>
                    <div class="dropdowm_Style dropdown-menu dropdown-menu-right dropdown-cyan" >
                                        <a className="dropdown-item" onClick={logoutHandler}>Logout</a>
                                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>
      {/* // <!--/.Navbar --> */}
    </>
  );
}




export default Header;
