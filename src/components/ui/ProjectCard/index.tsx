import { FC, ReactNode } from "react";
import { jetbrains } from "@/app/_fonts";

type projectCardType = {
  banner: string;
  title: string;
  description: string;
};

const ProjectCard: FC<projectCardType> = ({
  banner,
  title,
  description: content,
}: projectCardType): ReactNode => {
  return (
    <div className="group my-4 flex max-w-[45%] cursor-pointer flex-col overflow-hidden rounded-xl bg-slate-200 transition-all dark:bg-neutral-800">
      <div className="relative overflow-hidden">
        <img
          src={banner}
          alt="Project card image"
          className="h-[200px] w-full object-fill object-center transition-all group-hover:scale-110"
        />
        <h3
          className={`${jetbrains.className} absolute bottom-0 left-0 z-10 w-full px-4 py-2 text-xl capitalize text-black opacity-70`}
        >
          {title}
        </h3>
      </div>
      <p className="m-3 mt-5 leading-6 tracking-wider text-ts">{content}</p>
    </div>
  );
};

export default ProjectCard;
