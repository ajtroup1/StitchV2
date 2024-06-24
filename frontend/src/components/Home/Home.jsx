import { useState } from "react";
import "../../css/Home.css";
import HomeLogin from "./HomeLogin";

function Home() {
  return (
    <div className="home-main">
      <div className="home-1-section">
        <div className="left-home">
          <img src="../../src/assets/home-collab-icon.png" id="collab-icon" />
        </div>
        <div className="right-home">
          <p className="nav-title">Stitch</p>
          <p className="home-stitch-description">
            Stitch is a collaborative storytelling platform designed to bring
            your stories to life with the help of other authors from around the
            world. Whether you're a seasoned writer or just starting out, Stitch
            provides a unique space for creative minds to connect and weave
            their narratives together. Start your journey by posting an
            introduction to your story, setting the stage for endless
            possibilities. Other users can then add their own twists and turns,
            creating a collection of interconnected tales. Alternatively, dive
            into the stories initiated by others, contributing your imagination
            to expand their narrative universe. With Stitch, storytelling
            becomes a communal experience, where every contribution is a thread
            that enriches the fabric of the story. Engage with a vibrant
            community of writers, receive feedback, and watch as your stories
            evolve in unexpected and exciting ways. Join Stitch today and become
            a part of a collaborative storytelling community!
          </p>
        </div>
      </div>
      <div className="home-2-section">
        <HomeLogin />
      </div>
    </div>
  );
}

export default Home;
