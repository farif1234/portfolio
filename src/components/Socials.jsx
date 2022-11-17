import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Socials = () => {
    const link =
        " hover:text-gray-400 hover:-translate-y-1 duration-200 cursor-pointer";

    return (
        <div className="flex flex-row justify-around text-gray-500 px-5 py-5 -trans">
            <a href="https://github.com/farif1234">
                <FiGithub className={link} size={40} />
            </a>
            <a href="https://www.linkedin.com/in/faihaan-arif-3020b117a/">
                <FiLinkedin className={link} size={40} />
            </a>
            <a href="mailto:farif1234@gmail.com">
                <FiMail className={link} size={40} />
            </a>
        </div>
    );
};

export default Socials;
