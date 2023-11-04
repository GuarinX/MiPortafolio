import { FaPhone, FaRegEnvelope, FaLinkedin } from "react-icons/fa6";

export const Contact = () => {
    return (
        <div id="Contact" className="bg-[#d3cfc7] mx-auto">
            <div className="py-20">
                <div className="text-center">
                    <h1 className="pt-5 font-bold text-lg text-[#6a1b9a]">Conact</h1>
                    <hr className="hr-about w-20 mx-auto text-center border border-[#6a1b9a]" />
                    <p className="p-10 px-10 mx-48 font-semibold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias obcaecati quas, rem velit quis quaerat, deleniti quo earum debitis est harum saepe modi placeat asperiores vel quia reprehenderit repellat ratione.
                    </p>
                </div>
                {/* ficha */}
                <div className="bg-[#fff] mx-auto container w-1/3 rounded-3xl text-center text-lg items-center font-bold">
                    <p className="pt-10 pb-5 flex justify-center items-center">
                    <FaPhone className=" inline mr-2"/>+57 3154407138
                    </p>
                    <p className=" flex justify-center items-center">
                    <FaRegEnvelope className=" inline mr-2"/>guarinmelo797@gmail.com
                    </p>
                    <p className="pb-10 pt-5 flex justify-center items-center">
                    <FaLinkedin className=" inline mr-2"/>Alejandro Guarin Melo
                    </p>
                </div>
            </div>
        </div>
    )
}