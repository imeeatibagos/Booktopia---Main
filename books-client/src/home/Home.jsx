import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoriteBooks />
      <FavBook />
      <PromoBanner />
    </div>
  );
};

export default Home;
