import Link from "next/link";
import { projects } from "../pages/api/profile";

export const Projects = () => {
    return (
        <div id="Projects" className="py-20">
            <h1 className="text-center pt-5 font-bold text-lg text-[#6a1b9a]">Projects</h1>
            <hr className="hr-about w-20 mx-auto text-center border border-[#6a1b9a]" />
            <div className="my-10 max-w-md mx-auto md:max-w-2xl">
                {projects.map(({ title, description, image, icon1, icon2, hrefGit, hrefWeb }, i) => (
                    <div className="md:flex mb-5  bg-white rounded-xl shadow-md overflow-hidden" key={i}>
                        <div className="overflow md:shrink-0">
                            <img className="card-img-top h-60 w-full object-cover" src={`/${image}`} alt="" />
                        </div>
                        <div className="p-8">
                            <h1 className="block mt-1 text-lg leading-tight font-medium text-black text-center">{title}</h1>
                            <p className="mt-2 text-slate-500 text-center">{description}</p>
                            <div className="md:flex mt-2 gap-3 text-2xl justify-center">
                                <Link className=" text-[#6a1b9a]" href={hrefGit} passHref target="_blak">
                                    {icon2}
                                </Link>
                                <Link className=" text-[#6a1b9a]" href={hrefWeb} passHref target="_blak">
                                    {icon1}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
