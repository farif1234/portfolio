import React from "react";
import About from "./About";
import Socials from "./Socials";

const Home = () => {
    return (
        <div
            name="about"
            className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white "
        >
            <div className=" max-w-screen-lg md:mx-auto flex flex-col items-center justify-center h-full px-8 md:px-4 in ">
                <div className=" z-10 bg-blend-difference ">
                    <About />
                    <Socials />
                    <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
                </div>
            </div>
        </div>
    );
};

export default Home;
