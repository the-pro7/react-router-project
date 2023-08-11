import React from "react";
import BannerImage from "../assets/hero-banner.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="hero">
      <div className="hero__intro">
        <h1>One place for all your favourite movies and shows.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut maxime
          ea suscipit, labore minus error dolor quas quod exercitationem
          tempora, fugiat ex repellendus enim in!
        </p>
      </div>
      <img
        src={BannerImage}
        alt="video illustration"
        style={{ width: "70%" }}
      />
      <div className="hero__buttons">
        <Link to="/movies" className="hero__buttons--explore">Explore Movies</Link>
        <Link to="signup" className="hero__buttons--signup">Signup Now</Link>
      </div>
    </main>
  );
};

export default Home;
