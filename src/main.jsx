
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import post from "./assets/pic.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import "./post.css";


function Post() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user-detail">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
            alt="post"
            className="dp"
            id="my-id"
          />
          <div>
            <h3>Numan Arshad</h3>
            <span>Saturdary at 11:00 AM</span>
          </div>
        </div>
        <SlOptions />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        architecto quaerat sunt illum, esse eveniet quas minima.
      </p>
      <img src={post} alt="post image" className="post-photo" id="my-id" />


       <div className="gap">
 <FcLike />
 <BiCommentDetail />
 <IoMdShareAlt />
 <p>158 and others like</p>
 </div>
 </div>


  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

