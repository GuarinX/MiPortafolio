import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
    return (
        <div className="Container mx-auto my-10">
            <div className="px-16 py-4">
                <div className="flex justify-between items-center">
                    <div className=" flex flex-col gap-2 ml-36">
                        <p className=" text-5xl font-medium mb-5 text-[#3f51b5] text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-700">
                            Front-end web <br /> developer
                        </p>
                        <p className=" font-medium text-lg pb-3">
                            Hi, i'm <span className="text-[#3f51b5]">Alejandro Guarin Melo</span> <br />
                            A passionate front-end developer <br />
                            from Colombia.
                        </p>

                        {/* iconos */}
                        <div className="flex gap-5">
                            <Link href="https://github.com/GuarinX" target="_blank"><FaGithub className="text-2xl" /></Link>
                            <Link href="/" target="_blank"><FaLinkedin className="text-2xl" /></Link>
                        </div>
                    </div>
                    <img className=" foto-perfil mr-36 w-80" src="fotoperfil.jpg" alt="hero-img" />
                </div>
            </div>
            <div className=" text-center mt-2">
                <h1 className="font-bold mb-2">My Skills</h1>
                <div className="skills flex justify-center pt-5 pb-5 container mx-auto w-96 bg-[#fff] gap-10 rounded-3xl">
                    <img className="w-10" src="skill_js.png" alt="JavaScript" />
                    <img className="w-10" src="skill_git.png" alt="Git" />
                    <img className="w-10" src="skill_react.png" alt="React" />
                    <img className="w-10" src="skill_next.png" alt="NextJS" />
                </div>
            </div>
        </div>
    )
}