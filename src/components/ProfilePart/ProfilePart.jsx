import React, { Component } from 'react'
import '../../style.css'
import '../../all.css';

export default function ProfilePart() {

    return (
        <>

           
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="article_bg">
                            <div className="left_pink_bg_article "></div>
                            <img src="images/left_mdl.png" className="left_img" />
                            <img src="images/user.png" className="left-img_circle" />
                            <h4 className="post_article">Naina Mohanty</h4>
                            <h6 className="profile_name">UI-UX Analyst </h6>
                            <p style={{alignItems:"center", justifyContent: "center",marginLeft: "200px"}}><span className="following">111 Following</span> &nbsp;&nbsp;<span className="followers">178 followers</span></p>
                            <div className="lit_pink_article ">
                                <a href="/profileEdit" className="article_p">Edit Profile Selection  &nbsp;<img src="https://img.icons8.com/material-outlined/18/c3357f/pencil--v2.png"/></a>
                            </div>
                        </div>
                        <div className="dashboard">
                            <h3 className="dash_h3"> My Dashboard <span className="dash_span">Private to you</span></h3>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="dash_border">
                                        <h1 className="dash_count">900</h1>
                                    </div>
                                    <p className="dash_p">Who viewed your profile</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="dash_border">
                                        <h1 className="dash_count">500</h1>
                                    </div>
                                    <p className="dash_p">Search appearances</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="dash_border">
                                        <h1 className="dash_count">90</h1>
                                    </div>
                                    <p className="dash_p">Post views</p>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard">
                            <h3 className="dash_h3"> Activity <span className="dash_span">400 Followers</span></h3>
                            <p className="dash_manage">Manage Followers</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/blog_dash.png" className="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/blog_dash2.png" className="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/blog_dash.png" className="media-object" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>


                        <div className="dashboard">
                            <h3 className="dash_h3"> Experience <span className="dash_span">4+ Years</span></h3>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/exp.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/exp_1.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/exp_2.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <a href="#" className="edit_clr"><i className="fa fa-plus-circle"></i></a><br />
                                    <a href="#" className="pencil_edit"><i className="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <a href="#" className="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>


                        <div className="dashboard">
                            <h3 className="dash_h3"> Education</h3>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/edu_2.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/edu.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/edu_1.png" className="media-object exp" />
                                        </div>
                                        <div className="media-body">
                                            <h5 className="dash_h5">UI-UX Analyst</h5>
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrsLol good one Commented 8 hrsLol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <a href="#" className="edit_clr"><i className="fa fa-plus-circle"></i></a><br />
                                    <a href="#" className="pencil_edit"><i className="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <a href="#" className="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard">
                            <h3 className="dash_h3"> Skills</h3>
                            <div className="row">
                                <div className="col-md-10">
                                    <p className="skills"><i className="fa fa-genderless tick_mark"></i> &nbsp; Adobe Illustrator</p>
                                    <p className="skills"> <i className="fa fa-genderless tick_mark"></i> &nbsp; 2012 – 2014 </p>
                                    <p className="skills"> <i className="fa fa-genderless tick_mark"></i> &nbsp;Adobe after effect </p>
                                    <p className="skills"> <i className="fa fa-genderless tick_mark"></i> &nbsp;2012 – 2014 </p>
                                    <p className="skills"> <i className="fa fa-genderless tick_mark"></i> &nbsp; KIIT UNIVERSITY </p>
                                    <p className="skills">  <i className="fa fa-genderless tick_mark"></i> &nbsp;2012 – 2014 </p>

                                </div>

                                <div className="col-md-2">
                                    <a href="#" className="edit_clr"><i className="fa fa-plus-circle"></i></a><br />
                                    <a href="#" className="pencil_edit"><i className="fas fa-pencil-alt"></i></a>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <a href="#" className="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                        <div className="dashboard">
                            <h3 className="dash_h3"> Intrest</h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest_1.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest_2.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest_2.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest_3.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="media">
                                        <div className="media-left">
                                            <img src="images/intrest_4.png" className="media-object exp" style={{ width: '60px' }} />
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading dash_media"> Lol good one Commented 8 hrs  </h6>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-10"></div>
                                <div className="col-md-2">
                                    <a href="#" className="see_more pull-right">See More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                     
                


        </>
    )
}

