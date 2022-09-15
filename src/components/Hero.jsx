import { faArrowAltCircleDown, faRss, faCode, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';
import 'animate.css';
import Textra from 'react-textra'

export const Hero = () => {
    const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

    return (
            <section id="inicio" className="text-black">
                <div className="animate__animated animate__fadeInUp sm:w-full w-full px-4 pb-36 pt-36 sm:pb-60 sm:pt-48 mx-auto lg:flex items-center">
                    <div initial={{ scale: 0 }} transition={{ duration: 1.2, ease: 'easeInOut', type: 'spring' }} animate={{ scale: 1}} class=" w-full sm:text-center text-center ">
                    <h1 class="text-5xl font-extrabold lg:text-7xl md:text-6xl dark:text-white text-black">
                        Vicente Santiago Perea<br></br>
                        <span>
                        <Textra className="sm:block lg:pt-0 pt-1 sm:text-6xl lg:text-6xl md:text-5xl color-text" 
                        effect='downTop' 
                        stopDuartion={4000} 
                        data={['Desarrollador web', 'Diseñador web', 'Administrador de sistemas', 'Administrador de red']} />
                        </span>
                    </h1>
                    <p className="max-w-xl mt-4 font-semibold sm:text-xl mx-auto dark:text-white">
                        Técnico en sistemas microinformáticos y redes. Estudiante de desarrollo web <FontAwesomeIcon className=" text-cyan-400" icon={faCode} />. Apasionado por el <span className="font-bold color-text">Front-End</span> y las nuevas tecnologías
                    </p>

                    <div className="flex flex-wrap sm:justify-center justify-center gap-4 mt-8 ">
                        <a href="" className="w-4/5 full sm:w-auto"><button className="glow-on-hover block w-full px-12 py-3 text-sm font-extrabold dark:text-slate-900 text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="/pdf/Vicen-CV.pdf">
                        Descargar CV<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                        </button></a>

                        <a href="https://social.vicenweb.es" className="w-4/5 sm:w-auto"><button className="glow-on-hover block w-full px-12 py-3 text-sm font-extrabold dark:text-white text-black border-2 dark:border-white border-black rounded sm:w-auto hover:color-btn active:bg-blue-500 hover:text-white hover:border-0 focus:outline-none hover:scale-105 transition hover:bg-white" href="#footer">
                        Redes sociales<FontAwesomeIcon className=" w-5 pl-1" icon={faRss} />
                        </button></a>
                    </div>
                    </div>
                    
                </div>
            </section>
    )
}