import React from "react";

const About = () => {
    return (
        <>
            <h1 className=" text-3xl md:text-6xl">&lt; About Me /&gt;</h1>
            <h2 className=" py-10 text-xl">
                Hey there, I'm <span className="  italic">Faihaan</span>. I'm a
                student currently studying at{" "}
                <span className=" text-orange-600 duration-150">
                    Oregon State University
                </span>
                , pursing a BSc in Computer Science. I'm an aspiring software
                engineer with interest in backend technologies, database design,
                and software optimization.
            </h2>
        </>
    );
};

export default About;
