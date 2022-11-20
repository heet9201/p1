import React from "react";
import Intro_History from "../components/intro_history";
import MainLayout from "../layouts/MainLayout";

const introduction = () => {
  return (
    <div>
      <MainLayout pcolor={"#ff0000"} />
      <Intro_History />
    </div>
  );
};

export default introduction;
