import { nunito, jetbrains, raleway, montserrat } from "@/app/_fonts";

import ProjectCard from "@/components/ui/ProjectCard";
import FooterLink from "@/components/ui/FooterLink";

import getProjects from "./_lib/get-projects";
import Link from "next/link";

const Home = async () => {
  const projs = await getProjects();

  return (
    <div
      className={`mx-10 max-w-[1000px] lg:m-auto ${raleway.className}`}
      id="_portfolio"
    >
      <header className="my-4 flex justify-between lg:my-12 lg:mt-6">
        <div id="left"></div>
        <div id="right">
          <ul
            className={`flex justify-start text-ts ${jetbrains.className} list-none`}
          >
            <li className="mx-4 text-[1.5rem]">
              <a
                href="#"
                className="no-underline transition-all duration-300 hover:text-tp"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section
        id="hero"
        className="relative h-[90vh] min-h-[700px] pt-4 lg:pt-20"
      >
        {/* We will divide into sections */}
        <article id="intro" className="text-left">
          <p className={`text-3xl text-ts ${jetbrains.className}`}>I am</p>
          <div className="relative mb-12 lg:mb-24">
            <span
              id="name"
              className={`my-2 inline-block text-[4rem] font-semibold text-skyblue lg:text-[5rem] ${jetbrains.className}`}
            >
              Krishna Modepalli
            </span>
            <p
              id="tagline"
              className="text-right text-sm leading-8 tracking-wider text-tp lg:text-lg"
            >
              I populate the web with dust and sometime colors.
            </p>
          </div>
          <p className="mb-6 leading-8 tracking-wider text-ts md:text-lg lg:text-2xl">
            Full Stack Developer, from INDIA. I develop quality, reliable Web
            Applications for the internet. I support and encourage{" "}
            <span className="text-nowrap text-tp">Open-Source</span> Software
            and I&apos;m open for any suggestions.
          </p>
          <p className="mb-6 leading-8 tracking-wider text-ts md:text-lg lg:text-2xl">
            I mostly play <span className="text-tp">Cricket</span> in my free
            time. I play video games, hang out with my friends or family in the
            weekends.
          </p>
          <h2
            className={`${jetbrains.className} absolute bottom-4 w-full text-center text-lg text-ts lg:bottom-20 lg:text-2xl`}
          >
            <span title="By The Way">BTW</span>, I&apos;m a{" "}
            <code className={`${jetbrains.className} bg-dim rounded-md px-1`}>
              backend
            </code>{" "}
            Guy!!
          </h2>
        </article>
      </section>
      <section id="projects" className="min-h-[90vh] pb-8 pt-4">
        <h1 className="mb-20 text-3xl font-bold leading-3 tracking-wider text-tp">
          My Recent Projects
        </h1>
        <div className="relative my-8 flex flex-row flex-wrap justify-between px-4">
          {projs &&
            projs.map((proj) => (
              <Link key={proj.id} className="contents" href={proj.URI}>
                <ProjectCard
                  banner={proj.banner}
                  title={proj.title}
                  content={proj.content}
                />
              </Link>
            ))}
        </div>
      </section>
      <section id="work" className="min-h-[90vh] pb-8 pt-4">
        <h1
          className={`mb-12 text-center text-2xl font-black leading-normal text-skyblue md:text-4xl lg:mb-20 lg:text-[3rem] lg:leading-relaxed ${montserrat.className}`}
        >
          I am open for <span className="text-nowrap">Free-Lancing</span> and{" "}
          <span className="text-nowrap">Open-Source</span> Contributions
        </h1>
        <p className="mb-6 text-justify leading-8 tracking-wider text-ts md:text-lg lg:text-2xl">
          I believe that only <span className="text-nowrap">Open-Source</span>{" "}
          can bring the <span className="text-tp">True Revolution</span> in the
          Software Industry. I love to contribute, even if it&apos;s the least.
        </p>
        <p className="mb-6 text-justify leading-8 tracking-wider text-ts md:text-lg lg:text-2xl">
          Please contact me via.{" "}
          <Link
            href="https://github.com/krishnamodepalli"
            className="mx-1 border-b border-dashed text-tp"
          >
            GitHub
          </Link>{" "}
          or{" "}
          <Link
            href="mailto:mailaboutlogin@gmail.com"
            className="mx-1 border-b border-dashed text-tp"
          >
            Email
          </Link>
          .
        </p>
        <div className="mt-20">
          <h3 className="mb-4 text-4xl tracking-wider">Interested Domains:</h3>
          <ul className="ml-4 list-disc">
            <li className="my-1 tracking-wider text-ts md:text-lg lg:text-2xl">
              Full-Stack Web Applications
            </li>
            <li className="my-1 tracking-wider text-ts md:text-lg lg:text-2xl">
              ReactJS, NextJS, RESTFul API&apos;s with ExpressJS
            </li>
            <li className="my-1 tracking-wider text-ts md:text-lg lg:text-2xl">
              Bash Automation Projects
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <div
          className={`flex flex-col align-middle lg:mx-0 lg:flex-row lg:justify-between ${jetbrains.className}`}
        >
          <div className="left flex gap-2 text-[0.7rem] text-ts">
            <span className="footer-link pointer-events-none my-2 cursor-pointer px-2 font-bold uppercase">
              krishnamodepalli
            </span>
            <FooterLink href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                viewBox="0 0 640 512"
              >
                <path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l131.2 0C178 151 242.6 96 320 96s142 55 156.8 128L608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-131.2 0z" />
              </svg>
              v1.2.0
            </FooterLink>
          </div>

          <div className="right flex gap-2 text-[0.7rem] text-ts">
            <FooterLink href="https://twitter.com/krishnamodepal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
              Twitter
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/krishnamodepalli">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              LinkedIn
            </FooterLink>
            <FooterLink href="https://github.com/krishnamodepalli">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              GitHub
            </FooterLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
