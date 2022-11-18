import React from "react";
import projectData from "./data";

const Projects = () => {
    console.log(projectData);
    return (
        <div
            name="projects"
            className=" h-max w-full bg-gradient-to-b from-gray-800 to-black text-white "
        >
            <div className=" max-w-screen-lg  md:mx-auto flex flex-col  justify-center px-8 md:px-4 w-full ">
                <h1 className=" text-2xl md:text-6xl z-10 left">
                    &lt; Projects /&gt;
                </h1>
                <div className=" grid h-min grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-12 my-10 z-10 text-center ">
                    {projectData.map(({ id, title, git, image, desc }) => {
                        return (
                            <div
                                key={id}
                                className=" shadow-md shadow-gray-800 rounded-lg backdrop-blur-sm hover:scale-105 duration-200 "
                            >
                                <a href={git}>
                                    <img
                                        className=" h-1/2 w-full rounded-md  duration-200"
                                        src={image}
                                    ></img>
                                    <div className=" px-4 py-2">
                                        <h3
                                            className={` pt-3 text-lg ${
                                                title.length > 16
                                                    ? "md:text-md"
                                                    : "md:text-xl"
                                            } underline underline-offset-4 py-2`}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className={` py-1 text-[0px] text-gray-400 md:text-xs ${
                                                id > 4 && "mb-4"
                                            } `}
                                        >
                                            {desc}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
