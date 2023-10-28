export const NavBar = () => {
    return (
        <nav className="container mx-auto pt-4 shadow-lg rounded-full bg-[#fff]">
        <div className="flex justify-between items-center pb-4">
            <p className=" text-xl font-medium text-[#3f51b5] ml-40">Guarin</p>
            <div className="flex mr-40 items-center gap-10 text-black">
                <a className="text-sm font-medium" href="#">HOME</a>
                <a className="text-sm font-medium" href="#About">ABOUT</a>
                <a className="text-sm font-medium" href="#Projects">PROJECTS</a>
                <a className="text-sm font-medium" href="">CONTACT</a>
            </div>
        </div>
    </nav>
    )
}