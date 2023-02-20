import React from "react";

const experienceList = [
    {
        id: 3,
        title: "Software Test Engineer Intern",
        company: "Intel Corporation",
        dateStart: "January 2023",
        dateEnd: "Present",
        desc: [
            "Developed a utility in Python and C to control a hardware watchdog timer.",
            "Introduced an automated script to test CPU core efficiency.",
        ],
    },
    {
        id: 2,
        title: "Teaching Assistant",
        company: "Oregon State University",
        dateStart: "June 2022",
        dateEnd: "August 2022",
        desc: [
            "Mentored over 70 students in a database design course.",
            "Hosted weekly sessions to review SQL queries and integration in full stack application.",
        ],
    },
    {
        id: 1,
        title: "COVID Case Manager",
        company: "Purdue University",
        dateStart: "September 2020",
        dateEnd: "May 2021",
        desc: [
            "Devised quarantine and isolation plans for over 1000 students and faculty.",
            "Worked with EMR systems to track cases and update patient statuses.",
        ],
    },
];

const Experience = () => {
    return (
        <div
            name="experience"
            className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white "
        >
            <div className=" max-w-screen-lg md:mx-auto flex flex-col items-center justify-center h-full px-8 md:px-4 in ">
                <div className=" z-10 bg-blend-difference ">
                    <h1 className=" text-3xl md:text-6xl">
                        &lt; Experience /&gt;
                    </h1>
                    <h2 className=" py-10 text-xl">
                        {experienceList.map(
                            ({
                                id,
                                title,
                                company,
                                dateStart,
                                dateEnd,
                                desc,
                            }) => {
                                return (
                                    <div key={id}>
                                        <h1 className=" md:flex text-xl md:text-2xl p-1 mt-9 justify-between border-b-2 border-dashed border-slate-600 items-baseline">
                                            <div>{title}</div>
                                            <span className=" flex-1 text-sm md:text-lg text-right ">
                                                {dateStart} - {dateEnd}
                                            </span>
                                        </h1>
                                        <h1 className=" text-sm md:text-xl text-slate-400 pb-1 mt-3">
                                            {company}
                                        </h1>
                                        {desc.map((bp) => (
                                            <p className=" text-sm md:text-lg">
                                                • {bp}
                                            </p>
                                        ))}
                                    </div>
                                );
                            }
                        )}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Experience;
