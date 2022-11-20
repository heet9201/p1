import React from "react";

const intro = () => {
  return (
    <div className="!z-50 flex flex-row h-screen w-screen justify-center gap-x-10">
      <div className="flex flex-col justify-center font-sans h-screen w-screen content-center pl-40">
        <div className="pt-0 text-7xl text-white ">Introduction</div>
        <div className="pt-0 text-2xl bg-clip-text text-white">
          As the name suggests, this project will explain the rise in popularity
          of some very famous streaming services such as Netflix, Spotify, Hulu,
          Apple Music, etc. via the help of visual data.{" "}
        </div>
        <div className="text-2xl">
          This data essay also explains why platforms like Napster and
          Blockbuster failed in this "Streaming Age".
        </div>
      </div>
      <div className="flex justify-center p-auto h-screen w-screen content-center">
        <div className="flex flex-col">
          <div></div>
          <div>
            <button>{/* <Link href="/introduction"> Next </Link> */}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default intro;
