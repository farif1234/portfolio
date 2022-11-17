import React from "react";

const Projects = () => {
    return (
        <div
            name="projects"
            className=" h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white "
        >
            <div className=" md:mx-auto flex flex-col items-center justify-center   px-8 md:px-4 ">
                <h1 className=" text-3xl md:text-6xl z-10">
                    &lt; Projects /&gt;
                </h1>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 px-12 my-14 z-10 ">
                    <div className=" shadow-md shadow-gray-800 rounded-lg">
                        <img
                            className="rounded-md hover:saturate-150 duration-200"
                            src="https://user-images.githubusercontent.com/88285952/202341203-6cd36adc-4117-44a5-93a8-c56b285e8559.png"
                        ></img>
                        <div className=" px-4 py-2">
                            <h3 className=" pt-3 text-3xl py-2">Title</h3>
                            <p className=" py-1 text-xs">Description</p>
                            <p>Link</p>
                        </div>
                    </div>
                    <div className=" shadow-md shadow-gray-800 rounded-lg">
                        <img
                            className="rounded-md hover:saturate-150 duration-200"
                            src="https://user-images.githubusercontent.com/88285952/202341203-6cd36adc-4117-44a5-93a8-c56b285e8559.png"
                        ></img>
                        <div className=" px-4 py-2">
                            <h3 className=" pt-3 text-3xl py-2">Title</h3>
                            <p className=" py-1 text-xs">Description</p>
                            <p>Link</p>
                        </div>
                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div className=" shadow-md shadow-gray-800 rounded-lg">
                        <img
                            className="rounded-md hover:saturate-150 duration-200"
                            src="https://user-images.githubusercontent.com/88285952/202341203-6cd36adc-4117-44a5-93a8-c56b285e8559.png"
                        ></img>
                        <div className=" px-4 py-2">
                            <h3 className=" pt-3 text-3xl py-2">Title</h3>
                            <p className=" py-1 text-xs">Description</p>
                            <p>Link</p>
                        </div>
                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div className=" shadow-md shadow-gray-800 rounded-lg">
                        <img
                            className="rounded-md hover:saturate-150 duration-200"
                            src="https://user-images.githubusercontent.com/88285952/202341203-6cd36adc-4117-44a5-93a8-c56b285e8559.png"
                        ></img>
                        <div className=" px-4 py-2">
                            <h3 className=" pt-3 text-3xl py-2">Title</h3>
                            <p className=" py-1 text-xs">Description</p>
                            <p>Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
