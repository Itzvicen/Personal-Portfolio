import 'animate.css';
import me from "../assets/img/me.png"
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faRss, faCode } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import logoCisco from "../assets/img/logo-cisco.svg"
import ola from "../assets/img/wave.svg"
import Reactlogo from "../assets/img/react.svg";
import google from "../assets/img/google.png";
import cambridge from "../assets/img/pngegg.png";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";

export const Trayectoria = () => {
    return (
        <div className=" h-full">
            <div id='trayectoria' className='lg:pt-36 pt-10'>
                <div className=' lg:w-10/12 w-11/12 m-auto lg:flex-col items-center justify-center pt-3 p-12' >
                    <div className='m-auto lg:w-4/5 w-full'>
                            <h2 id="proyectos" className="text-center lg:text-center animate__slideInLeft animate__animated font-extrabold text-5xl sm:text-7xl color-text pb-8">Educación y experiencia laboral</h2>
                    </div>

                    <div className="flex flex-col lg:w-4/5 w-11/12 lg:mt-5 mt-10 m-auto items-center animate__slideInRight animate__animated bg-white rounded-2xl p-5 border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
                            <img class="object-cover h-48 rounded-t-lg lg:w-48 md:rounded-none md:rounded-l-lg md:h-32 pr-2" src={me} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center dark:text-white">En la actualidad...</h5>
                            <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Estudiando CFGS Desarrollo aplicaciones web en CPIFP Nuevo (PTA, Campanillas)</p>
                            <span className="inline-flex sm:mt-0 mt-4 text-2xl justify-center">
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
                    </div>
                </div>
                <main className='m-auto mt-36 mb-96 lg:p-16 p-10 border-2 rounded-2xl dark:border-gray-600 dark:bg-slate-900 bg-white lg:w-9/12 w-11/12 z-50'>
                    <AnimationOnScroll animateIn="animate__fadeIn"><h2 className='font-extrabold text-5xl text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-green-200 to-blue-500 pb-10'>Sobre mi educación</h2></AnimationOnScroll>         
                        <ol class="relative border-l border-gray-200 dark:border-gray-700">
                            <AnimationOnScroll animateIn="animate__fadeIn" ><li class="mb-10 ml-6 p-4 border-2 border-slate-700 rounded-2xl sombra " >            
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-slate-600">
                                    <svg aria-hidden="true" class="w-3 h-3 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-bold text-black dark:text-white">CFGS Desarrollo aplicaciones web <span class="bg-gray-200 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-black ml-3">Actualidad</span></h3>
                                <p className='pb-2 font-semibold'>CPIFP Nuevo (Málaga TechPark, Campanillas)</p>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Septiembre 2022 - Actualidad </time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Desarrollar, implantar, y mantener aplicaciones web,con independencia del modelo empleado y utilizando tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de accesibilidad, usabilidad y calidad exigidas en los estándares establecidos.</p>
                                <a href="https://www.juntadeandalucia.es/educacion/portals/web/formacion-profesional-andaluza/fp-grado-superior/detalle-titulo?idTitulo=56" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Saber más</a>
                            </li></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn"><li class="mb-10 ml-6  p-4 border-2 rounded-2xl border-slate-700 sombra ">
                            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-slate-600">
                                    <svg aria-hidden="true" class="w-3 h-3 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="mb-1 text-lg font-bold text-black dark:text-white">CFGM Sistemas microinformáticos y redes</h3>
                                <p className='pb-2 font-semibold'>IES Campanillas (Málaga TechPark, Campanillas)</p>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Septiembre 2020 - Junio 2022</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Instalar, configurar y mantener sistemas microinformáticos, aislados o en red, así como redes locales en pequeños entornos, asegurando su funcionalidad y aplicando los protocolos de calidad, seguridad y respeto al medio ambiente establecidos.</p>
                            </li></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn"><li class="ml-6  p-4 border-2 rounded-2xl border-slate-700 sombra ">
                                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-slate-600">
                                    <svg aria-hidden="true" class="w-3 h-3 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="mb-1 text-lg font-bold text-black dark:text-white">Educación secundaria obligatoria (ESO)</h3>
                                <p className='pb-2 font-semibold'>IES Las Flores (Álora, Málaga)</p>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Septiembre 2016 - Junio 2020</time>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">La finalidad de la Educación Secundaria Obligatoria es que el alumnado adquiera los elementos básicos de la cultura, especialmente en lo que se refiere a cuestiones científico-tecnológicas, hábitos de estudio y de trabajo y hábitos de vida saludables.</p>
                            </li></AnimationOnScroll>
                        </ol>
                        <AnimationOnScroll animateIn="animate__fadeIn"><h2 className='font-extrabold text-5xl text-transparent sm:text-6xl bg-clip-text text-right bg-gradient-to-r from-green-200 to-blue-500 pb-10 pt-16'>Sobre mi experiencia laboral</h2></AnimationOnScroll>  
                    
                    <ol class="relative border-r border-gray-200 dark:border-gray-700">                  
                            <AnimationOnScroll animateIn="animate__fadeIn"><li class="mb-10 mr-6 border-slate-700 sombra p-4 border-2 rounded-2xl" >            
                                <span class="flex absolute -right-3 justify-center items-center w-6 h-6 bg-gray-600 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-slate-600">
                                    <svg aria-hidden="true" class="w-3 h-3 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="flex items-center mb-1 text-lg font-bold text-black dark:text-white">Operador de sistemas informáticos <span class="bg-gray-200 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gay-200 dark:text-black ml-3">Último</span></h3>
                                <a href='https://gruposafamotor.com' className='font-semibold hover:underline hover:text-indigo-500'>Grupo Safamotor (Málaga)</a>
                                <time class="block mb-2 pt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Marzo 2022 - Junio 2022</time>
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Mantenimiento, gestión de equipos y servidores. Resolución de incidencias. Windows Server ( Active Directory ). Gestion de redes, usando MikroTik, UniFi. Inventariado de material tecnológico</p>
                                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-900 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"> Saber más</a>
                            </li></AnimationOnScroll>
                        </ol>
                </main>
                <AnimationOnScroll animateIn="animate__zoomIn"><h2 className=' pb-80 mb-96 -mt-80 text-center font-extrabold text-5xl sm:text-6xl color-text'>Certificaciones</h2></AnimationOnScroll>
                <img src={ola} alt="" className=' -mt-80 w-full' />
                <div className=' p-1 lg:p-14 mitad'>
                <AnimationOnScroll animateIn="animate__ZoomInUp">
                    <div className=" bg-white rounded-2xl border-2 dark:border-slate-500 dark:bg-slate-900 w-11/12 lg:w-11/12 xl:w-4/5 gap-x-16 lg:gap-y-8 gap-y-5 m-top flex m-auto justify-center items-center flex-wrap lg:p-4 xl:p-10 p-6 lg:py-14 relative" >
                        <div className='border-2 dark:border-slate-500 border-black p-4 dark:bg-slate-800 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5 xl:w-2/5 md:w-5/12'>
                            <img src={logoCisco} alt="logo-cisco" className='w-20 xl:w-32 xl:p-1 mr-4' />
                            <div className=' flex-col'>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>CCNA: Introductions to networks</h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                        <div className='border-2 border-black dark:border-slate-500 dark:bg-slate-800 p-4 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5 md:w-5/12'>
                            <img src={cambridge} alt="logo-cisco" className='w-20 xl:w-32 p-2 lg:p-2 xl:p-6 mr-4' />
                            <div className=' flex-col '>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>Cambridge B1: Preliminary English </h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                        <div className='border-2 border-black dark:border-slate-500 dark:bg-slate-800 p-4 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5 md:w-5/12'>
                            <img src={Reactlogo} alt="logo-cisco" className='w-20 xl:w-32 p-3 lg:p-2 xl:p-6 mr-4' />
                            <div className=' flex-col'>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>Mimo: Web Development <span className='hidden xl:inline'>(HTML, CSS, JS & REACT)</span> </h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                        <div className='border-2 border-black dark:border-slate-500 dark:bg-slate-800 p-4 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5 md:w-5/12'>
                            <img src={google} alt="logo-cisco" className='w-20 xl:w-32 p-3 lg:p-2 xl:p-6 mr-4' />
                            <div className=' flex-col '>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white  text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>Google: Ciberseguridad <span className='lg:hidden xl:inline md:hidden '>en el teletrabajo</span> </h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                        <div className='border-2 border-black dark:border-slate-500 dark:bg-slate-800 p-4 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5 md:w-5/12'>
                            <img src={python} alt="logo-cisco" className='w-20 xl:w-32 p-3 lg:p-2 xl:p-6 mr-4' />
                            <div className=' flex-col '>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white  text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>Mimo: Python</h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                        <div className='border-2 border-black dark:border-slate-500 dark:bg-slate-800 p-4 flex items-center rounded-2xl sombra lg:h-48 lg:w-2/5  md:w-5/12'>
                            <img src={sql} alt="logo-cisco" className='w-20 xl:w-32 p-3 lg:p-2 xl:p-6 mr-4' />
                            <div className=' flex-col '>
                                <h3 className=' font-bold text-md lg:text-xl dark:text-white  text-black'>Certificado</h3>
                                <h2 className='py-3 text-base lg:text-lg text-gray-500 font-semibold'>Mimo: SQL</h2>
                                <button className="glow-on-hover block w-full px-5 py-2 text-sm font-bold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition focus:outline-none " href="">
                                Ver credencial<FontAwesomeIcon className=" pl-1 w-5" icon={faArrowAltCircleDown} />
                                </button>                            
                            </div>
                        </div>

                    </div>
                    </AnimationOnScroll>
                </div>
            </div>

        </div>
    )
}