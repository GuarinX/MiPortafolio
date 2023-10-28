export const About = () => {
    return (
        // el Container debe ir siempre en mayuscula para que ocupe todo el ancho
        <div id="About" className="mx-auto bg-[#d3cfc7]">
            <div className="py-24 my-28">
                {/* debe ir la ficha */}
                <div className="bg-[#fff] container mx-auto w-2/4 rounded-3xl">
                    <h1 className="text-center pt-5 font-bold text-lg text-[#6a1b9a]">About Me</h1>
                    <hr className="hr-about w-20 mx-auto text-center border border-[#6a1b9a]"/>
                    <p className="p-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, similique! Cupiditate iusto voluptatem incidunt quasi laboriosam, voluptates facilis dignissimos similique et, repellendus quae culpa consectetur quibusdam perspiciatis amet aperiam ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam, labore laboriosam ipsum repellat iure quae, fuga recusandae, eveniet eius harum molestiae sed quaerat voluptatibus saepe earum! Soluta, perferendis laboriosam!
                    </p>
                </div>
                <img className="img-about absolute w-28 rounded-full" src="About_foto.jpg" alt="img-about" />
            </div>
        </div>
    )
}