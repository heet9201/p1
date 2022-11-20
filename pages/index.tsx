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
        <div className="flex flex-col justify-center font-sans h-screen w-screen content-center pl-40">
          <div className="pt-0 text-7xl text-white ">P1</div>
          <div className="pt-0 text-7xl bg-clip-text text-white">
            Rise of Streaming Services and its effect on media
          </div>
          <div>Neilay Bhatt | AU2040254</div>
        </div>
        <div className="flex justify-center p-auto h-screen w-screen content-center">
          <div className="flex flex-col">
            <div>
              Hello! I am Neilay Bhatt from B.Tech in Computer Science and
              Engineering. This is my Project 1 a data essay.
            </div>
            <div>
              <button>
                <Link href="/introduction"> Next </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
