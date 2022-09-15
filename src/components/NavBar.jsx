import React, { useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import { faCheck, faGraduationCap, faHouse, faSun, faRectangleList, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'animate.css';
import { Link } from "wouter";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
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
        <>
        <div className="animate__animated animate__fadeInDown sticky top-0 z-50 m-auto w-full bg-white dark:bg-slate-800 ">
        <nav className="">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full md:w-full xl:w-4/5 dark:bg-slate-800  bg-white">
            <div className="flex items-center h-16">
                <div className="flex w-full justify-between items-center">
                <a href="#inicio " className="flex-shrink-0 w-1/5 md:text-center">
                    <h2 className=" sm:pt-0 pt-2 text-lg font-bold dark:text-white text-black">vicen.<span className="color-btn p-0.5 rounded-md text-white">DEV</span></h2>
                </a>
                <div className="hidden md:hidden lg:block w-3/5">
                    <div className=" flex items-center space-x-4 justify-center">
                        <Link href="/">
                            <a href="#inicio" className=" hover:scale-105 transition font-semibold hover:bg-gradient-to-r from-blue-400 to-green-300 text-black dark:text-white hover:text-white px-3 py-2 rounded-md text-sm "><FontAwesomeIcon icon={faHouse} /> Inicio</a>
                        </Link>
                            <a href="#tech " className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white px-3 py-2 rounded-md text-sm "><FontAwesomeIcon icon={faCheck} /> Habilidades</a>
                        <Link href="/trayectoria">
                            <a href=""  className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white px-3 py-2 rounded-md text-sm " >   <FontAwesomeIcon icon={faGraduationCap} /> Trayectoria</a>
                        </Link>
                        <Link href="/proyectos">
                            <a href="" className="hover:scale-105 transition font-semibold text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white px-3 py-2 rounded-md text-sm "><FontAwesomeIcon icon={faRectangleList}/> Proyectos</a>
                        </Link>
                    </div>
                </div>
                    <div className="flex items-center w-1/5 gap-3 justify-center">
                        <a href="#contacto"><button className="glow-on-hover block w-full px-4 py-2.5 text-sm font-bold dark:text-white text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none">
                        Hablemos</button>
                        </a>
                        <button type="button" onClick={handleThemeSwitch} className="bg-slate-100 hidden md:block dark:bg-slate-600 py-1.5 px-3 text-xl rounded-lg">
                            {theme === 'dark' 
                            ? 
                            <svg class="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            :     
                            <svg class="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            }
                        </button>
                    </div>
                </div>
                <div className="-mr-2 flex lg:hidden">
                <button type="button" onClick={handleThemeSwitch} className="bg-slate-100 md:hidden ml-8 dark:bg-slate-600 py-1.5 px-3 text-xl rounded-lg">
                            {theme === 'dark' 
                            ? 
                            <svg class="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            :     
                            <svg class="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                }
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-black inline-flex transition ml-2 md:ml-6 sm:ml-0 items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref) => (
                <div className="lg:hidden pb-5" id="mobile-menu">
                <div ref={ref} className="px-4 pt-4 pb-3 mt-2 sm:px-3 backdrop-blur-md border-2 rounded-3xl mx-3">
                    <Link href="/# ">
                        <a
                        className="dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 text-black hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faHouse} /> Inicio
                        </a>
                    </Link>
                        <a href="#tech "
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faCheck} /> Habilidades
                        </a>
                    <Link href="/trayectoria">
                        <a 
                        
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faGraduationCap} /> Trayectoria
                        </a>
                    </Link>
                    <Link href="/proyectos">
                    <a 
                        className="text-black dark:text-white hover:bg-gradient-to-r from-blue-400 to-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
                        >
                        <FontAwesomeIcon icon={faRectangleList} /> Proyectos
                        </a>
                    </Link>
                </div>
                </div>
            )}
            </Transition>
        </nav>
        </div>
        <p className="text-white font-bold text-sm dark:bg-slate-700 color-btn  text-center p-1">Sitio web en construcción... 💻</p>
        </>
    );
}
