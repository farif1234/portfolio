import React from "react";
import {
    SiPython,
    SiReact,
    SiJavascript,
    SiMysql,
    SiGit,
    SiMongodb,
    SiFlask,
    SiNodedotjs,
} from "react-icons/si";

const skillIcons = [
    {
        id: 1,
        icon: SiPython,
        name: "Python",
    },
    {
        id: 2,
        icon: SiJavascript,
        name: "JavaScript",
    },
    {
        id: 3,
        icon: SiReact,
        name: "React",
    },
    {
        id: 4,
        icon: SiMysql,
        name: "MySQL",
    },
    {
        id: 5,
        icon: SiGit,
        name: "Git",
    },
    {
        id: 6,
        icon: SiMongodb,
        name: "MongoDB",
    },
    {
        id: 7,
        icon: SiFlask,
        name: "Flask",
    },
    {
        id: 8,
        icon: SiNodedotjs,
        name: "Node.js",
    },
];

const Skills = () => {
    return (
        <div
            name="skills"
            className=" bg-gradient-to-b from-black to-gray-800 w-full h-screen"
        >
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className=" z-10">
                    <h1 className=" text-2xl md:text-6xl">&lt; Skills /&gt;</h1>
                </div>

                <div className="w-full grid grid-cols-2 md:flex md:flex-row items-center justify-between z-10 my-8 pt-8">
                    {skillIcons.map(({ id, icon, name }) => {
                        const Icon = icon;
                        return (
                            <div
                                key={id}
                                className=" flex flex-col place-items-center py-2 rounded-lg hover:animate-pulse hover:scale-110 duration-200"
                            >
                                <Icon className="" size={30} />

                                <p className=" py-4">{name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
