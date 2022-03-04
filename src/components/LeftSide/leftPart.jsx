import React, { Component } from "react";
import "../../style.css";
import "../../all.css";
import "./leftPart.css";

export default function leftside() {
  return (
    <>
      <div class="col-md-3 col-sm-12 col-xs-12 mobile_none">
        <div class="clr-bdr mt-o">
          <h4 class="articles">Top Research Articles /</h4>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img
                src="images/l-1.png"
                class="media-object"
                style={{ width: "60px" }}
              />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img
                src="images/l-2.png"
                class="media-object"
                style={{ width: "60px" }}
              />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>

          <div class="media" style={{ background: "#f4f4f4", padding: "5px" }}>
            <div class="media-left">
              <img
                src="images/l-3.png"
                class="media-object"
                style={{ width: "60px" }}
              />
            </div>
            <div class="media-body">
              <h6 class="media-heading">7 frequentlyasked Questions fddhj </h6>
              <p class="media_p">
                Publised 20. 06. 2020 <br />
                by<b style={{ color: "#000" }}>John Dame</b>
              </p>
            </div>
          </div>
          <br />
          <a href="#" class="more">
            Show More Articles /
          </a>
        </div>
        <br />
        <div class="top-reasearch-left">
          <h4 class="articles">
            Write A Recearch Paper &nbsp; &nbsp;&nbsp;
            <i class="fa fa-pencil-square-o " aria-hidden="true"></i>
          </h4>

          <div>
            <div class="tab">
              <button
                class="tablinks"
                onclick="openCity(event, 'Work')"
                id="defaultOpen"
              >
                <img src="images/icons/work.png" class="work_image_article" />{" "}
                &nbsp;Work
              </button>
              <button class="tablinks" onclick="openCity(event, 'Bookmark')">
                <img
                  src="images/icons/bookmark.png"
                  class="work_image_article"
                />{" "}
                &nbsp;Bookmark
              </button>
              <button
                class="tablinks"
                onclick="openCity(event, 'Appreciations')"
              >
                <img src="images/icons/3_a.png" class="work_image_article" />{" "}
                &nbsp;Appreciations
              </button>
              <button class="tablinks" onclick="openCity(event, 'Insights')">
                <img
                  src="images/icons/insites.png"
                  class="work_image_article"
                />{" "}
                &nbsp;Insights
              </button>
              <button class="tablinks" onclick="openCity(event, 'Draft')">
                <img src="images/icons/draft.png" class="work_image_article" />{" "}
                &nbsp;Draft
              </button>
              <button class="tablinks" onclick="openCity(event, 'Updates')">
                <img src="images/icons/last.png" class="work_image_article" />{" "}
                &nbsp;Updates
              </button>
            </div>
            <br />
            <div id="Work" class="tabcontent">
              <h5 class="create"> Create Work</h5>
              <p>
                <i
                  class="fa fa-pencil-square-o pencil_article"
                  style={{ display: "block" }}
                ></i>
              </p>
              <a href="work.html" class="view">
                View Details
              </a>
              <p class="feedback">
                Get feedback,views, and appreciations.Public projects can be
                featured by our curators.
              </p>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}
