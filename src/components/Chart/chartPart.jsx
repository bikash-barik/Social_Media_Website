import React, { Component } from 'react';
import '../../style.css'
import '../../all.css';
import './chartPart.css';
export default function chartPart() {
    return (
        <>
            
            <div class="chat-page">
                <div class="container-fluid h-100">
                    <div class="row justify-content-center h-100">
                        <div class="col-md-4 chat" style={{ padding: "0 0 0 24px" }}><div class="card mb-sm-3 mb-md-0 contacts_card">
                            <div class="card-header">
                                <div class="input-group">
                                    <input type="text" id="myInput" placeholder="Search..." name="" class="form-control search" />
                                    <div class="input-group-prepend">
                                        <span class="input-group-text search_btn"><img src="https://img.icons8.com/material-rounded/24/ffffff/search.png"/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="tabset">
                                {/* <!-- Tab 1 --> */}
                                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
                                    <label for="tab1">Recent</label>
                                    {/* <!-- Tab 2 --> */}
                                    <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
                                    <label for="tab2">Online</label>
                                    {/* <!-- Tab 3 --> */}
                                    {/* <!-- <input type="radio" name="tabset" id="tab3" aria-controls="dunkles">
                                                    <label for="tab3">Dunkles Bock</label> --> */}

                                    <div class="tab-panels">
                                        <section id="marzen" class="tab-panel">
                                            <div class="card-body contacts_body">
                                                <ul id="myUL" class="contacts">
                                                    <li class="active">
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Chinmaya</span>
                                                                <p>Kalid is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-1.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Tarak Meheta</span>
                                                                <p>Tarak left 7 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-3.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Doll</span>
                                                                <p>Doll left 30 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-4.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Rashid Samim</span>
                                                                <p>Rashid left 50 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-4.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Rashid Samim</span>
                                                                <p>Rashid left 50 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-4.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Rashid Samim</span>
                                                                <p>Rashid left 50 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-4.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Rashid Samim</span>
                                                                <p>Rashid left 50 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-4.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon offline"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Rashid Samim</span>
                                                                <p>Rashid left 50 mins ago</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>
                                        <section id="rauchbier" class="tab-panel">
                                            <div class="card-body contacts_body">
                                                <ul id="myUL" class="contacts">
                                                    <li class="active">
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Chinmaya</span>
                                                                <p>Kalid is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Chinmaya</span>
                                                                <p>Kalid is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Chinmaya</span>
                                                                <p>Kalid is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Chinmaya</span>
                                                                <p>Kalid is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex bd-highlight">
                                                            <div class="img_cont">
                                                                <img src="images/chat-img-2.jpg" class="rounded-circle user_img" />
                                                                <span class="online_icon"></span>
                                                            </div>
                                                            <div class="user_info">
                                                                <span>Marc Twies</span>
                                                                <p>Marc is online</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>
                                        {/* <!--  <section id="dunkles" class="tab-panel">
                                                                                                                                    <h2>6C. Dunkles Bock</h2>
                                                                                                                                    <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
                                                                                                                                    <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
                                                                                                                                </section> --> */}
                                    </div>
  
                                </div>

                                <div class="card-footer"></div>
                            </div></div>
                            <div class="col-md-8 chat" style={{ padding: "0 23px 0 0px" }}>
                                <div class="card">
                                    <div class="card-header msg_head">
                                        <div class="d-flex bd-highlight">
                                            <div class="img_cont">
                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img" />
                                                <span class="online_icon"></span>
                                            </div>
                                            <div class="user_info">
                                                <span>Chinmaya</span>
                                                <p>1767 Messages</p>
                                            </div>
                                            <div class="video_cam">

                                                <span><img src="https://img.icons8.com/ios-glyphs/24/000000/phone-disconnected.png" style={{ transform: "rotate(0deg)" }}/></span>
                                                <span><img src="https://img.icons8.com/material-rounded/24/000000/video-call.png"/></span>
                                            </div>
                                        </div>
                                        <span id="action_menu_btn"><img src="https://img.icons8.com/material-outlined/24/000000/menu-2.png" style={{ color: "#828282" }}/></span>
                                        <div class="action_menu">
                                            <ul>
                                                <li><i class="fas fa-user-circle"></i> View profile</li>
                                                <li><i class="fas fa-users"></i> Add to close friends</li>
                                                <li><i class="fas fa-plus"></i> Add to group</li>
                                                <li><i class="fas fa-ban"></i> Block</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="card-body msg_card_body">
                                        <div class="d-flex justify-content-start mb-4">
                                            <div class="img_cont_msg">
                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                                            </div>
                                            <div class="msg_cotainer">
                                                Hi, how are you Manas?
                                                <span class="msg_time">8:40 AM, Today</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mb-4">
                                            <div class="msg_cotainer_send">
                                                Hi Chinmaya i am good tnx how about you?
                                                <span class="msg_time_send">8:55 AM, Today</span>
                                            </div>
                                            <div class="img_cont_msg">
                                                <img src="images/baby.png" class="rounded-circle user_img_msg" />
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start mb-4">
                                            <div class="img_cont_msg">
                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                                            </div>
                                            <div class="msg_cotainer">
                                                I am good too, thank you for your chat template
                                                <span class="msg_time">9:00 AM, Today</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mb-4">
                                            <div class="msg_cotainer_send">
                                                You are welcome
                                                <span class="msg_time_send">9:05 AM, Today</span>
                                            </div>
                                            <div class="img_cont_msg">
                                                <img src="images/baby.png" class="rounded-circle user_img_msg" />
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start mb-4">
                                            <div class="img_cont_msg">
                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                                            </div>
                                            <div class="msg_cotainer">
                                                I am looking for your next templates
                                                <span class="msg_time">9:07 AM, Today</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mb-4">
                                            <div class="msg_cotainer_send">
                                                Ok, thank you have a good day
                                                <span class="msg_time_send">9:10 AM, Today</span>
                                            </div>
                                            <div class="img_cont_msg">
                                                <img src="images/baby.png" class="rounded-circle user_img_msg" />
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-start mb-4">
                                            <div class="img_cont_msg">
                                                <img src="images/Anonymous.jpg" class="rounded-circle user_img_msg" />
                                            </div>
                                            <div class="msg_cotainer">
                                                Bye, see you
                                                <span class="msg_time">9:12 AM, Today</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="input-group">
                                            <div class="input-group-append">
                                                <span class="input-group-text attach_btn">
                                                <img src="https://img.icons8.com/ios/24/000000/happy--v1.png"/> 
                                                    </span>
                                                <span class="input-group-text attach_btn">
                                                <img src="https://img.icons8.com/ios-filled/24/000000/attach.png"/>
                                                </span>
                                            </div>
                                             <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                                             {/* <textarea class="form-control type_msg textarea-control" rows="3" placeholder="Textarea with emoji image input" data-emojiable="true"></textarea> */}

                                            {/* <p class="lead emoji-picker-container">
                                                <textarea class="form-control textarea-control" rows="3" placeholder="Textarea with emoji image input" data-emojiable="true"></textarea>
                                            
                                            </p> */}
                                            <div class="input-group-append">
                                                <span class="input-group-text send_btn"><img src="https://img.icons8.com/material-rounded/24/ffffff/filled-sent.png"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


       

        </>

    )
}

