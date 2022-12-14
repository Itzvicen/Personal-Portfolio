import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
    return (
        <footer id="footer" className="text-gray-600 body-font">
            <div className="container lg:w-4/5 pt-7 pb-7 mx-auto md:w-11/12 flex items-center sm:flex-row flex-col">
                <a href="https://vicenweb.es" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <h2 className=" sm:pt-0 pt-2 text-lg font-bold dark:text-white text-black">vicen.<span className="color-btn p-0.5 rounded-md text-white">DEV</span></h2>
                </a>
                <p className="text-sm font-bold text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Copyright —
                <a href="https://github.com/itzvicen" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@itzvicen</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 text-2xl justify-center sm:justify-start">
                <a href="https://github.com/itzvicen" target="_blank" className="text-gray-500 mr-2">
                    <FontAwesomeIcon className="text-gray-500 w-6 p-2 hover:bg-slate-900 hover:rounded-full hover:text-white" icon={faGithub} />
                </a>
                <a href="https://twitter.com/vicendev" target="_blank" className="ml-3 text-gray-500 mr-2 ">
                    <FontAwesomeIcon className="text-gray-500 p-2 w-6 hover:bg-blue-500 hover:rounded-full hover:text-white" icon={faTwitter} />
                </a>
                <a href="https://instagram.com/itzvicen" target="_blank" className="ml-3 text-gray-500 mr-2 ">
                    <FontAwesomeIcon className="text-gray-500 p-2 w-6 hover:bg-gradient-to-br from-purple-500 via-pink-700 to-orange-500 hover:rounded-full hover:text-white" icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/in/vicente-santiago-perea-185363213/" target="_blank" className="ml-3 text-gray-500">
                    <FontAwesomeIcon className="text-gray-500 p-2 w-6 hover:bg-blue-900 hover:rounded-full hover:text-white" icon={faLinkedin} />
                </a>
                </span>
            </div>
        </footer>
    )
}