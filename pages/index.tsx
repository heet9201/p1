import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen justify-center gap-x-10 bg-[#15083E]">
      <div className="flex flex-col justify-center font-sans h-screen w-screen content-center pl-40">
        <div className="pt-0 text-7xl text-white ">THE RISE OF</div>
        <div className="pt-0 text-7xl bg-clip-text text-transparent bg-gradient-to-r to-[#FC96BB] from-[#6CD3FF] ">
          DIGITAL AUDIO
        </div>
        <div className="flex flex-row">
          <div className="font-sans text-7xl bg-clip-text text-transparent bg-gradient-to-r to-[#FC96BB] from-[#6CD3FF]">
            &
          </div>
          <div className="flex flex-col text-3xl text-white pl-6">
            <div>its impact on the listening culture:</div>
            <div>A study through SPOTIFY</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-auto h-screen w-screen content-center"></div>
    </div>
  );
}
