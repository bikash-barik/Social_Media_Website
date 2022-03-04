import React, { Component } from 'react'
import "./ProfileEdit.css";
export default function ProfileEdit() {

    return (
        <>
            <div className="edit-page-profile">
                <div className="container">
                    <div className="edit-page-profile-top">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="edit-page-profile-top-image">
                                    <img src="https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="edit-page-profile-top-left">
                                    <h4>Bikash Barik</h4>
                                    <p>Btw, SpaceX is no longer planning to upgrade Falcon 9 second stage for reusability. Accelerating BFR instead. <a href="#"><img src="https://img.icons8.com/ios/30/c12179/edit-row.png" /></a><br />
                                        New design is very exciting! Delightfully counter-intuitive.</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="edit-page-profile-top-right">
                                    <ul>

                                        {/* <li><a href="#" className="middle-message">
                                            <img src="https://img.icons8.com/ios/40/ffffff/comments.png" />
                                        </a></li> */}
                                        <li><a href="#"><img src="https://img.icons8.com/ios-glyphs/30/c12179/menu-2.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-page-profile-buttom">
                        <div className="tab_container">
                            <input id="tab1" type="radio" name="tabs" checked />
                            <label for="tab1"><span>Intro</span></label>

                            <input id="tab2" type="radio" name="tabs" />
                            <label for="tab2"><span>About</span></label>

                            <input id="tab3" type="radio" name="tabs" />
                            <label for="tab3"><span>Featured</span></label>

                            <input id="tab4" type="radio" name="tabs" />
                            <label for="tab4"><span>Background</span></label>

                            <input id="tab5" type="radio" name="tabs" />
                            <label for="tab5"><span>Skills</span></label>

                            <input id="tab6" type="radio" name="tabs" />
                            <label for="tab6"><span>Accomplishments</span></label>

                            <input id="tab7" type="radio" name="tabs" />
                            <label for="tab7"><span>Additional Information</span></label>

                            <input id="tab8" type="radio" name="tabs" />
                            <label for="tab8"><span>Supported Languages</span></label>

                                                            {/* into part */}

                            <section id="content1" className="tab-content1">
                                <h3>Research Work Preferences</h3>
                                <div className="profile-intro">
                                    <h4>Tell us what kind of research youre open to </h4>
                                    <h6>Research titles</h6>
                                    <a href="#">Add titles <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a>
                                    <ul>
                                        <li> <h6>Job Locations</h6></li>
                                        <li><a href="#">Add Locations <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                    </ul>
                                    <a href="#" className="map-edit">Odisha, India <img src="https://img.icons8.com/fluent-systems-filled/16/ffffff/plus-math.png" /></a>

                                    <h6>Start date</h6>

                                    <label className="container-1" >Immediately, Im actively applying
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container-1">Flexible, I'm casually browsing
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    {/* // <!-- <label className="container-1">Three
                                //   <input type="radio" name="radio" />
                                //   <span className="checkmark"></span>
                                // </label>
                                // <label className="container-1">Four
                                //   <input type="radio" name="radio" />
                                //   <span className="checkmark"></span>
                                // </label> --> */}

                                    <br /><h6>Research Types</h6>
                                    <div className="research-type">
                                        <ul>
                                            <li><a href="#" className="map-edit">Full-time <img src="https://img.icons8.com/metro/16/ffffff/checkmark.png" /></a></li>
                                            <li><a href="#" className="tik-edit">Contract  <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit">Part-time <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit">Temporary <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit">Remote <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                        </ul>
                                    </div>
                                    <h6 className="research-h6">Choose who sees youre open</h6>
                                    <p>You decide if you want only recruiters all Vichyan members to see this</p>
                                    <div className="submit-add">
                                        <a href="#">Add To Profile</a>
                                    </div><div className="clear"></div>
                                </div>
                            </section>

                                                            {/* End Of intro? */}

                            {/* Edit About Part */}

                            <section id="content2" className="tab-content1">
                                <div className="Edit-About">
                                    <h3>Edit About</h3>

                                    <textarea placeholder="Type summary..."></textarea>
                                    <div className="submit-save">
                                        <a href="#">Save</a>
                                    </div><div className="clear"></div>
                                </div>
                            </section>






                            <section id="content3" className="tab-content1">
                                <div className="tab-in-tab">

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-post-tab" data-toggle="pill" href="#pills-post" role="tab" aria-controls="pills-post" aria-selected="true">Posts</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-articles-tab" data-toggle="pill" href="#pills-articles" role="tab" aria-controls="pills-articles" aria-selected="false">Articles</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-link-tab" data-toggle="pill" href="#pills-link" role="tab" aria-controls="pills-link" aria-selected="false">Link</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-media-tab" data-toggle="pill" href="#pills-media" role="tab" aria-controls="pills-media" aria-selected="false">Media</a>
                                        </li>
                                    </ul>

                                    {/* Edit Post Part */}

                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-post" role="tabpanel" aria-labelledby="pills-post-tab">
                                            <div className="add-a-post">
                                                <h6>Add a post</h6>
                                                <div className="add-a-post-inner-content">
                                                    <p>To protect the privacy of the other members, group, event , posts cannot be featured.</p>
                                                    <img src="https://img.icons8.com/ios/100/c12179/tv.png" />
                                                </div>
                                                <div className="submit-save">
                                                    <a href="#">Done</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane fade" id="pills-articles" role="tabpanel" aria-labelledby="pills-articles-tab">
                                            <div className="add-a-post">
                                                <h6>Add an article</h6>
                                                <div className="add-a-article-inner-content">
                                                    <img src="https://img.icons8.com/ios/70/c12179/tv.png" />
                                                    <h6>No content to display</h6>
                                                    <p>When you publish a new article,it will show up here</p>
                                                </div>
                                                <div className="submit-save">
                                                    <a href="#">Done</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-link" role="tabpanel" aria-labelledby="pills-link-tab">
                                            <div className="add-a-post">
                                                <h6>Shows websites, or external photos, documents videos and presentations</h6>
                                                <div className="add-a-link-inner-content-link">

                                                    <input type="text" name="link-text" placeholder="Paste or type a link to a file or video" />
                                                </div>
                                                <h4><img src="https://img.icons8.com/ios/18/c12179/tv.png" /> Supported formats</h4>
                                                <div className="submit-save">
                                                    <a href="#">Done</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="tab-pane fade" id="pills-media" role="tabpanel" aria-labelledby="pills-media-tab">
                                            <div className="upload-btml-wrapper">
                                                <button className="btml">
                                                    <ul>
                                                        <li><img src="https://img.icons8.com/ios/18/c12179/tv.png" /></li>
                                                        <li>Upload File</li>
                                                    </ul>
                                                </button>
                                                <input type="file" name="myfile" />
                                            </div>
                                            <div className="upload-btml-wrapper">
                                                <button className="btml">
                                                    <ul>
                                                        <li><img src="https://img.icons8.com/ios/18/c12179/tv.png" /></li>
                                                        <li>Image</li>
                                                    </ul></button>
                                                <input type="file" name="myfile" />
                                            </div>
                                            <div className="upload-btml-wrapper">
                                                <button className="btml">
                                                    <ul>
                                                        <li><img src="https://img.icons8.com/ios/18/c12179/tv.png" /></li>
                                                        <li>Video</li>
                                                    </ul>
                                                </button>
                                                <input type="file" name="myfile" />
                                            </div>
                                            <div className="upload-btml-wrapper">
                                                <button className="btml">
                                                    <ul>
                                                        <li><img src="https://img.icons8.com/ios/18/c12179/tv.png" /></li>
                                                        <li>Audio</li>
                                                    </ul>
                                                </button>
                                                <input type="file" name="myfile" />
                                            </div>
                                            <div className="upload-btml-wrapper">
                                                <button className="btml">
                                                    <ul>
                                                        <li><img src="https://img.icons8.com/ios/18/c12179/tv.png" /></li>
                                                        <li>Document</li>
                                                    </ul>
                                                </button>
                                                <input type="file" name="myfile" />
                                            </div>

                                            <div className="submit-save">
                                                <a href="#">Done</a>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </section>

                            {/* Background Part */}


                            <section id="content4" className="tab-content1">
                                <div className="tab-in-tab">

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-work-experience-tab" data-toggle="pill" href="#pills-work-experience" role="tab" aria-controls="pills-work-experience" aria-selected="true">Work Experience</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-education-tab" data-toggle="pill" href="#pills-education" role="tab" aria-controls="pills-education" aria-selected="false">Education</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-licenses-tab" data-toggle="pill" href="#pills-licenses" role="tab" aria-controls="pills-licenses" aria-selected="false">Licenses & Certification</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-volunteer-tab" data-toggle="pill" href="#pills-volunteer" role="tab" aria-controls="pills-volunteer" aria-selected="false">Volunteer Experience</a>
                                        </li>
                                    </ul>




                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-work-experience" role="tabpanel" aria-labelledby="pills-work-experience-tab">
                                            <div className="background">
                                                <div className="publication">
                                                    <form>
                                                        <label for="fname">Title</label><br />
                                                        <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                        <label for="fname">Employment type</label><br />
                                                        <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                        <label for="fname">Company</label><br />
                                                        <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                        <label for="fname">Location</label><br />
                                                        <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                        <label className="container-2">I am currently working in this role
                                                            <input type="checkbox" checked="checked" />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                        <ul className="year-month-select">
                                                            <li> <label for="fname">Start Date</label><br />
                                                                <select name="month" id="month">
                                                                    <option value="audi">Month</option>
                                                                    <option value="volvo">Jan</option>
                                                                    <option value="saab">Fev</option>
                                                                    <option value="opel">Mar</option>
                                                                    <option value="audi">Apr</option>
                                                                </select> </li>
                                                            <li><label for="fname">End Date</label><br />
                                                                <select name="day" id="month">
                                                                    <option value="audi">Month</option>
                                                                    <option value="volvo">1</option>
                                                                    <option value="saab">2</option>
                                                                    <option value="opel">3</option>
                                                                    <option value="audi">Audi</option>
                                                                </select></li>
                                                        </ul>

                                                        <label for="fname">You have 1 current position. Would you like to end it ? </label><br></br> <br />
                                                        <label className="container-2">End this position
                                                            <input type="checkbox" checked="checked" />
                                                            <span className="checkmark"></span>
                                                        </label><br /><br />
                                                        <label className="container-2">Update my industry
                                                            <input type="checkbox" checked="checked" />
                                                            <span className="checkmark"></span>
                                                        </label><br /><br />
                                                        <label className="container-2">Update my headline
                                                            <input type="checkbox" checked="checked" />
                                                            <span className="checkmark"></span>
                                                        </label><br /><br />

                                                        <label for="fname">Headline</label><br />  <br />
                                                        <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="UI-UX Designer and Developer"></textarea><br />

                                                        <label for="fname">Desscription</label><br />  <br />
                                                        <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                        <label for="fname">Add or link to external documents, photos, sites, videos and presentations.</label><br />

                                                        <ul className="button-link-add">
                                                            <li>
                                                                <a href="#" className="button-upload">Upload</a>

                                                            </li>
                                                            <li>
                                                                <a href="#" className="button-link">Link</a>
                                                            </li>
                                                        </ul>
                                                        <ul className="button-link-add">
                                                            <a href="#">? Supported formats</a>
                                                        </ul>
                                                        <div className="row on-off-background">
                                                            <div className="col-md-1">
                                                                <label className="switch">
                                                                    <input type="checkbox" />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>

                                                            <div className="col-md-11">
                                                                <h5>Share with network</h5>
                                                                <h6>if enabled, your network may be informed job changes, educational changes and work anniversaries </h6>
                                                                <a href="#">Learn how these are shared and when</a>
                                                            </div>
                                                        </div>
                                                        <input type="submit" value="Save" />

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-education" role="tabpanel" aria-labelledby="pills-articles-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">School</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="fname">Degree</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="fname">Field of study</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <ul className="year-month-select">
                                                        <li> <label for="fname">Start year</label><br />
                                                            <select name="month" id="month">
                                                                <option value="audi">Year</option>
                                                                <option value="volvo">Jan</option>
                                                                <option value="saab">Fev</option>
                                                                <option value="opel">Mar</option>
                                                                <option value="audi">Apr</option>
                                                            </select> </li>
                                                        <li><label for="fname">End year (or expected)</label><br />
                                                            <select name="day" id="month">
                                                                <option value="audi">Year</option>
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="opel">3</option>
                                                                <option value="audi">Audi</option>
                                                            </select></li>

                                                    </ul>
                                                    <label for="fname">Grade</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="fname">Activities and Societies</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Ex: Alpha , Omega,Volley ball"></textarea>

                                                    <div className="row on-off-background">
                                                        <div className="col-md-1">
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>

                                                        <div className="col-md-11">
                                                            <h5>Share with network</h5>
                                                            <h6>if enabled, your network may be informed job changes, educational changes and work anniversaries </h6>
                                                            <a href="#">Learn how these are shared and when</a>
                                                        </div>
                                                    </div>
                                                    <input type="submit" value="Save" />


                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-licenses" role="tabpanel" aria-labelledby="pills-licenses-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Name</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex. Cisco Certified Network Associate Security (CCNA)Associate Security (CCNA)" />
                                                    <label for="fname">Issuing Organisation</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Cisco" />

                                                    <label for="fname">This credential does not expire </label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Business" />




                                                    <ul className="year-month-select">
                                                        <li> <label for="fname">Issue Date</label><br />
                                                            <select name="month" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">Jan</option>
                                                                <option value="saab">Fev</option>
                                                                <option value="opel">Mar</option>
                                                                <option value="audi">Apr</option>
                                                            </select> </li>
                                                        <li><label for="fname">Expiration Date</label><br />
                                                            <select name="day" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="opel">3</option>
                                                                <option value="audi">Audi</option>
                                                            </select></li>
                                                    </ul>
                                                    <ul className="year-month-select">
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                    </ul>

                                                    <label for="fname">Credential ID</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />
                                                    <label for="fname">Credential URL</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />


                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to publications with your network <a href="#"> Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <ul className="submit-last-background">
                                                        <li><input type="submit" value="Save and Add Another" /></li>
                                                        <li><input type="submit" value="Save" /></li>
                                                    </ul>


                                                </form>
                                            </div>

                                        </div>


                                        <div className="tab-pane fade" id="pills-volunteer" role="tabpanel" aria-labelledby="pills-volunteer-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Organisation</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex. Cisco Certified Network Associate Security (CCNA)" />
                                                    <label for="fname">Role</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Cisco" />
                                                    <label for="fname">Cause</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Business" />

                                                    <label className="container-2">I  am currently Volunteering in this role
                                                        <input type="checkbox" checked="checked" />
                                                        <span className="checkmark"></span>
                                                    </label>



                                                    <ul className="year-month-select">
                                                        <li> <label for="fname">Start Date</label><br />
                                                            <select name="month" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">Jan</option>
                                                                <option value="saab">Fev</option>
                                                                <option value="opel">Mar</option>
                                                                <option value="audi">Apr</option>
                                                            </select> </li>
                                                        <li><label for="fname">End Date</label><br />
                                                            <select name="day" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="opel">3</option>
                                                                <option value="audi">Audi</option>
                                                            </select></li>
                                                    </ul>
                                                    <ul className="year-month-select">
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                    </ul>

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to publications with your network <a href="#"> Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Add Skill */}

                            <section id="content5" className="tab-content1">
                                <div className="profile-skills">
                                    <h3>Add Skills</h3>
                                    <div className="edit-skill-input">
                                        <form action="/action_page.php">
                                            <input type="text" placeholder="Skill ( Ex : Data Analysis)" name="search" />
                                            <button type="submit"><img src="https://img.icons8.com/material-outlined/18/c12179/search--v1.png" /></button>
                                        </form>
                                        <p>You can add 10 more skills</p>
                                    </div>
                                    <h6>Suggested skills based of your profile : </h6>
                                    <div className="research-type-skills">
                                        <ul>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" className="tik-edit-1">UX Research <img src="https://img.icons8.com/material-sharp/16/c12179/plus-math--v1.png" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="submit-add">
                                        <a href="#">Save</a>
                                    </div>


                                </div>
                            </section>




                            <section id="content6" className="tab-content1">
                                {/* <!-- <div className="tabs-1">
                          <ul className="tabs-nav">
                            <li><a href="#tab-5">Publications</a></li>
                            <li><a href="#tab-6">Patents</a></li>
                            <li><a href="#tab-7">Courses</a></li>
                            <li><a href="#tab-8">Projects</a></li>
                            <li><a href="#tab-9">Honors & Awards</a></li>
                            <li><a href="#tab-10">Test Scores</a></li>
                            <li><a href="#tab-11">Language</a></li>
                            <li><a href="#tab-12">Organisations</a></li>
                          </ul>
                          
                        </div> --> */}
                                <div className="tab-in-tab">

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-publications-tab" data-toggle="pill" href="#pills-publications" role="tab" aria-controls="pills-publications" aria-selected="true">Publications</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-patents-tab" data-toggle="pill" href="#pills-patents" role="tab" aria-controls="pills-patents" aria-selected="false">Patents</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-courses-tab" data-toggle="pill" href="#pills-courses" role="tab" aria-controls="pills-courses" aria-selected="false">Courses</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-projects-tab" data-toggle="pill" href="#pills-projects" role="tab" aria-controls="pills-projects" aria-selected="false">Projects</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-awards-tab" data-toggle="pill" href="#pills-awards" role="tab" aria-controls="pills-awards" aria-selected="false">Honors & Awards</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-scores-tab" data-toggle="pill" href="#pills-scores" role="tab" aria-controls="pills-scores" aria-selected="false">Test Scores</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-language-tab" data-toggle="pill" href="#pills-language" role="tab" aria-controls="pills-language" aria-selected="false">Language</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-organisations-tab" data-toggle="pill" href="#pills-organisations" role="tab" aria-controls="pills-organisations" aria-selected="false">Organisations</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-publications" role="tabpanel" aria-labelledby="pills-publications-tab">
                                            <div className="publication">
                                                <form >
                                                    <label for="fname">Title</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="lname">Publication / Publisher</label><br />
                                                    <input type="text" id="lname" name="lastname" placeholder="Ex: Harvard Business Review " />

                                                    <label for="lname">Publication date</label><br /><br />
                                                    <select name="month" id="month">
                                                        <option value="audi">Month</option>
                                                        <option value="volvo">Jan</option>
                                                        <option value="saab">Fev</option>
                                                        <option value="opel">Mar</option>
                                                        <option value="audi">Apr</option>
                                                    </select>

                                                    <select name="day" id="month">
                                                        <option value="audi">Day</option>
                                                        <option value="volvo">1</option>
                                                        <option value="saab">2</option>
                                                        <option value="opel">3</option>
                                                        <option value="audi">Audi</option>
                                                    </select>

                                                    <select name="year" id="month">
                                                        <option value="volvo">year</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select>	<br />

                                                    <label for="lname">Author</label><br /><br />
                                                    <ul className="publication-author-list">
                                                        <li><img src="images/user-chat.png" /></li>
                                                        <li><p>Bikash Barik</p></li>
                                                    </ul>
                                                    <input type="text" id="fname" name="firstname" placeholder="" />
                                                    <a className="add-author-a" href="#">Add Author</a>

                                                    <label for="fname">Publication URL</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to publications with your network <a href="#" style={{ color: "000" }}> Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>
                                        </div>




                                        <div className="tab-pane fade" id="pills-patents" role="tabpanel" aria-labelledby="pills-patents-tab">
                                            <div className="publication">
                                                <form action="/action_page.php">
                                                    <label for="fname">Patent title</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Patent office</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Patent or application number</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="lname">Author</label><br /><br />
                                                    <ul className="publication-author-list">
                                                        <li><img src="images/user-chat.png" /></li>
                                                        <li><p>Bikash Barik</p></li>
                                                    </ul>
                                                    <input type="text" id="fname" name="firstname" placeholder="" />
                                                    <a className="add-author-a" href="#">Add Author</a><br />

                                                    <label for="fname" style={{ margin: "0" }} >Status</label><br />
                                                    <label className="container-1" >Immediately, I'm actively applying
                                                        <input type="radio" checked="checked" name="radio" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="container-1">Flexible, I'm casually browsing
                                                        <input type="radio" name="radio" />
                                                        <span className="checkmark"></span>
                                                    </label>

                                                    <label for="lname" style={{ width: "100%" }} >Issue date</label><br /><br />
                                                    <select name="month" id="month">
                                                        <option value="audi">Month</option>
                                                        <option value="volvo">Jan</option>
                                                        <option value="saab">Fev</option>
                                                        <option value="opel">Mar</option>
                                                        <option value="audi">Apr</option>
                                                    </select>

                                                    <select name="day" id="month">
                                                        <option value="audi">Day</option>
                                                        <option value="volvo">1</option>
                                                        <option value="saab">2</option>
                                                        <option value="opel">3</option>
                                                        <option value="audi">Audi</option>
                                                    </select>

                                                    <select name="year" id="month">
                                                        <option value="volvo">year</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select> <br />


                                                    <label for="fname">Patent URL</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />

                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-courses" role="tabpanel" aria-labelledby="pills-courses-tab">
                                            <div className="publication">
                                                <form >
                                                    <label for="fname">Course name</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Number</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Associated with</label><br />
                                                    <select name="cars" id="cars" style={{ width: "77%", padding: "5px 4px" }}>
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br /><br />
                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />

                                                </form>
                                            </div>
                                        </div>



                                        <div className="tab-pane fade" id="pills-projects" role="tabpanel" aria-labelledby="pills-projects-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Project name</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label className="container-2">I am currently working on this project
                                                        <input type="checkbox" checked="checked" />
                                                        <span className="checkmark"></span>
                                                    </label>



                                                    <ul className="year-month-select">
                                                        <li> <label for="fname">Start Date</label><br />
                                                            <select name="month" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">Jan</option>
                                                                <option value="saab">Fev</option>
                                                                <option value="opel">Mar</option>
                                                                <option value="audi">Apr</option>
                                                            </select> </li>
                                                        <li><label for="fname">End Date</label><br />
                                                            <select name="day" id="month">
                                                                <option value="audi">Month</option>
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="opel">3</option>
                                                                <option value="audi">Audi</option>
                                                            </select></li>
                                                    </ul>
                                                    <ul className="year-month-select">
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Year</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                    </ul>

                                                    <label for="lname">Creator</label><br /><br />
                                                    <ul className="publication-author-list">
                                                        <li><img src="images/user-chat.png" /></li>
                                                        <li><p>Bikash Barik</p></li>
                                                    </ul>
                                                    <input type="text" id="fname" name="firstname" placeholder="" />
                                                    <a className="add-author-a" href="#">Add Author</a>

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Associated with</label><br />
                                                    <select name="cars" id="cars" style={{ width: "77%", padding: "5px 4px" }} >
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br />

                                                    <label for="fname">Project URL</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-awards" role="tabpanel" aria-labelledby="pills-awards-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Title</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Associated with</label><br />
                                                    <select name="cars" id="cars" style={{ width: "77%", padding: "5px 4px" }} >
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br />

                                                    <label for="fname">Issuer</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="lname" style={{ width: "100%" }}>Issue date</label><br />
                                                    <select name="Month" id="month">
                                                        <option value="audi">Month</option>
                                                        <option value="volvo">Jan</option>
                                                        <option value="saab">Fev</option>
                                                        <option value="opel">Mar</option>
                                                        <option value="audi">Apr</option>
                                                    </select>

                                                    <select name="Year" id="month">
                                                        <option value="audi">Day</option>
                                                        <option value="volvo">1</option>
                                                        <option value="saab">2</option>
                                                        <option value="opel">3</option>
                                                        <option value="audi">Audi</option>
                                                    </select> <br />

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-scores" role="tabpanel" aria-labelledby="pills-scores-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Test name</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Associated with</label><br />
                                                    <select name="cars" id="cars" style={{ width: "77%", padding: "5px 4px" }} >
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br />

                                                    <label for="fname">Score</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="Ex: Giving and receiving feedback" />

                                                    <label for="lname" style={{ width: "100%" }}>Test date</label><br />
                                                    <select name="Month" id="month">
                                                        <option value="audi">Month</option>
                                                        <option value="volvo">Jan</option>
                                                        <option value="saab">Fev</option>
                                                        <option value="opel">Mar</option>
                                                        <option value="audi">Apr</option>
                                                    </select>

                                                    <select name="Year" id="month">
                                                        <option value="audi">Day</option>
                                                        <option value="volvo">1</option>
                                                        <option value="saab">2</option>
                                                        <option value="opel">3</option>
                                                        <option value="audi">Audi</option>
                                                    </select> <br />

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-language" role="tabpanel" aria-labelledby="pills-language-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Languages</label><br />
                                                    <input type="text" id="fname" name="firstname" style={{ width: "45%" }} placeholder="" />

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Proficiency</label><br />
                                                    <select name="cars" id="cars" style={{ width: "45%", padding: "5px 4px" }} >
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br />
                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />
                                                </form>
                                            </div>

                                        </div>

                                        <div className="tab-pane fade" id="pills-organisations" role="tabpanel" aria-labelledby="pills-organisations-tab">
                                            <div className="publication">
                                                <form>
                                                    <label for="fname">Name</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname">Position held</label><br />
                                                    <input type="text" id="fname" name="firstname" placeholder="" />

                                                    <label for="fname" style={{ width: "100%", margin: "0" }}>Associated with</label><br />
                                                    <select name="cars" id="cars" style={{ width: "77%", padding: "5px 4px" }} >
                                                        <option value="volvo">_</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">Mercedes</option>
                                                        <option value="audi">Audi</option>
                                                    </select><br />


                                                    <label className="container-2">Membership ongoing
                                                        <input type="checkbox" checked="checked" />
                                                        <span className="checkmark"></span>
                                                    </label>


                                                    <ul className="year-month-select">
                                                        <li> <label for="fname">Start date </label><br />
                                                            <select name="month" id="month">
                                                                <option value="audi">Date</option>
                                                                <option value="volvo">Jan</option>
                                                                <option value="saab">Fev</option>
                                                                <option value="opel">Mar</option>
                                                                <option value="audi">Apr</option>
                                                            </select> </li>
                                                        <li><label for="fname">End date</label><br />
                                                            <select name="day" id="month">
                                                                <option value="audi">Date</option>
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="opel">3</option>
                                                                <option value="audi">Audi</option>
                                                            </select></li>
                                                    </ul>
                                                    <ul className="year-month-select">
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Date</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                        <li><select name="month" id="month">
                                                            <option value="audi">Date</option>
                                                            <option value="volvo">Jan</option>
                                                            <option value="saab">Fev</option>
                                                            <option value="opel">Mar</option>
                                                            <option value="audi">Apr</option>
                                                        </select><br /></li>
                                                    </ul>

                                                    <label for="fname">Desscription</label><br />  <br />
                                                    <textarea rows="4" cols="50" name="comment" form="usrform"></textarea>

                                                    <div className="last-cotent-publication">
                                                        <h6>We no longer share changes to patents with your network <a href="#">  Learn how these are shared and when</a></h6>
                                                    </div>
                                                    <input type="submit" value="Save" />

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Additional Information */}

                            <section id="content7" className="tab-content1">
                                <div className="additional-information">
                                    <h3 className="additional-heading">Ask For Recommedation</h3>
                                    <h6>Help us to personalize your request</h6>
                                    <form>
                                        <p>Who do you want to ask?</p>
                                        <input type="text" name="who" placeholder="Who do you want to ask?" />
                                    </form>
                                    <div className="submit-add-info">
                                        <a href="#">Next</a>
                                    </div>
                                </div>
                            </section>

                            {/* Supported Language Part? */}

                            <section id="content8" className="tab-content1">
                                <div className="supported-language">
                                    <h4>Create Your Profile in another language</h4>
                                    <div className="another-language">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 xs-12">
                                                <div className="another-language-left">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12 xs-12">
                                                            <i className="left-p"><img className="left-p" src="https://img.icons8.com/ios/80/c12179/globe--v2.png" /></i>
                                                        </div>
                                                        <div className="col-md-8 col-sm-12 xs-12">
                                                            <p className="left-p">Add more than one language on your<br />profile to make finding you easier.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 xs-12">
                                                <div className="another-language-right">
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-12 xs-12">
                                                            <img className="right-p" src="https://img.icons8.com/windows/80/c12179/3d-glasses.png" />
                                                        </div>
                                                        <div className="col-md-8 col-sm-12 xs-12">
                                                            <p className="right-p">We will match viewers’ language to
                                                                your available language profile. If
                                                                there’s no match, your default profile
                                                                will be shown.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Language of new profile</p>
                                    <select id="cars" name="carlist" form="carform">
                                        <option value="volvo">Choose</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <p><i className="fas fa-lightbulb"></i> You may have only 1 profile per language <a href="#">  Learn more</a></p>
                                </div>

                            </section>

                        </div>
                    </div>
                </div></div>

        </>
    )
}

