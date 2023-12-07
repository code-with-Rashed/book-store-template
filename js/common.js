"use strict";
// Id Selector Func
var select_id = (id) => {
  return document.getElementById(id);
};
// Current page activat
var activePage = () => {
  let nav_bar = select_id("nav-bar");
  let nav_links = nav_bar.getElementsByTagName("a");
  for (let i = 0; i < nav_links.length; i++) {
    let files = nav_links[i].href.split("/").pop();
    let file_detail = files.split(".");
    if (location.href.indexOf(file_detail[0]) > 0) {
      nav_links[i].classList.add("active");
    }
  }
};
activePage();
