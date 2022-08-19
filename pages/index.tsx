import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import { useAppSelector } from "../hooks/hooks";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col w-full font-titillium">
      <Navbar />
      <Banner />
      <ArticlesSection />
    </div>
  );
};

export default Home;
