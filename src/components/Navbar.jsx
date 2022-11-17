import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "experience",
        },
    ];

    const [nav, setNav] = useState(false);

    return (
        <>
            {/* <div className=" flex justify-between items-center w-full h-20 px-4 hover:backdrop-blur-sm z-20 fixed"></div> */}
            <div className=" flex justify-between items-center w-full h-20 px-4 text-white backdrop-blur-[3px] z-20 duration-200 border-b border-gray-700 fixed">
                <div>
                    <h1 className=" text-4xl font-majormono ml-2">Faihaan</h1>
                </div>

                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className=" px-4 text-lg cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 hover:text-gray-200 duration-200"
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className=" cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className=" px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar;
