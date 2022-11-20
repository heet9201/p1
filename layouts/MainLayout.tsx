import React from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import particlesOptions from "./particlesOptions";
import { loadFull } from "tsparticles";

// interface Props {
//   children: React.ReactNode;
// }

// const MainLayout = ({ children }: Props) => {
const MainLayout = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <div className="!-z--10">
      <Particles init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default MainLayout;
