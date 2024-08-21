import Image from "next/image";

import { nunito, raleway, jetbrains } from "@/app/_fonts";

const Home = () => {
  return (
    <div
      className={`max-w-[1000px] mx-10 lg:m-auto ${raleway.className}`}
      id="_portfolio"
    >
      <header className="flex justify-between my-4 lg:my-12 lg:mt-6">
        <div id="left"></div>
        <div id="right">
          <ul
            className={`flex justify-start text-ts ${jetbrains.className} list-none`}
          >
            <li className="text-[1.5rem] mx-4">
              <a href="#" className="hover:text-tp transition-all no-underline">
                Blogs
              </a>
            </li>
            <li className="text-[1.5rem] mx-4">
              <a href="#" className="hover:text-tp transition-all no-underline">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
      <section id="hero" className="min-h-[85vh] pt-4 lg:pt-20">
        {/* We will divide into sections */}
        <article id="intro" className="text-left">
          <p className={`text-3xl text-ts ${jetbrains.className}`}>I am</p>
          <span
            id="name"
            className={`text-[4rem] my-3 lg:mb-12 inline-block lg:text-[5rem] font-semibold text-skyblue ${jetbrains.className}`}
          >
            Krishna Modepalli
          </span>
          <p className="text-xl leading-8 text-justify tracking-wider text-ts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptas fuga quas exercitationem alias voluptate vitae rerum
            deleniti. Natus dolore temporibus consectetur illum nesciunt
            exercitationem vitae nam, officia harum. Odit ad eos vero cumque,
            consectetur doloribus necessitatibus adipisci voluptatum
            voluptatibus sit illum accusamus animi! Incidunt nam veniam libero
            blanditiis ducimus.
          </p>
        </article>
      </section>
      <footer>
        <div
          className={`flex justify-between align-middle lg:mx-6 ${jetbrains.className}`}
        >
          <div className="left flex gap-2 text-[0.7rem] text-ts">
            <span className="uppercase footer-link my-2 pointer-events-none cursor-pointer font-bold">
              krishnamodepalli
            </span>
            <a
              href="#"
              className="footer-link flex text-ts gap-1 font-semibold rounded-md my-2 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                viewBox="0 0 640 512"
              >
                <path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l131.2 0C178 151 242.6 96 320 96s142 55 156.8 128L608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-131.2 0z" />
              </svg>
              v1.2.0
            </a>
          </div>
          <div className="right flex gap-2 text-[0.7rem] text-ts">
            <a
              href="https://twitter.com/krishnamodepal"
              target="_blank"
              className="footer-link inline-flex items-center justify-center text-ts gap-1 font-semibold rounded-md my-2 px-2 hover:text-tp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                viewBox="0 0 512 512"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/krishnamodepalli"
              target="_blank"
              className="footer-link inline-flex items-center justify-center text-ts gap-1 font-semibold rounded-md my-2 px-2 hover:text-tp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/krshn02"
              target="_blank"
              className="footer-link my-2 inline-flex items-center justify-center gap-1 rounded-md px-2 font-semibold text-ts hover:text-tp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                viewBox="0 0 640 512"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
