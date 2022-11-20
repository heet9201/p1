import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <MainLayout></MainLayout>
      <div className="flex flex-row h-screen w-screen justify-center gap-x-10">
        <div className="flex flex-col justify-center font-sans h-screen w-screen mt-0 pl-36">
          <div className="pt-0 text-7xl text-white ">P1</div>
          <div className="pt-0 text-5xl bg-clip-text text-white">
            Rise of Streaming Services and its effect on media
          </div>
          <div className="flex mt-5">Neilay Bhatt | AU2040254</div>
        </div>
        <div className="flex flex-col justify-center p-auto h-screen w-screen content-center mx-18">
          <div className="flex text-3xl mb-5">
            Hello! I am Neilay Bhatt from B.Tech in Computer Science and
            Engineering. This is my Project 1 a data essay.
          </div>
          <div className="">
            <button>
              <Link href="/introduction"> Next </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
