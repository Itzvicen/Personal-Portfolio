import Reactlogo from "../assets/img/react.svg";
import csslogo from "../assets/img/css.png";
import jslogo from "../assets/img/javascript.svg";
import tilelogo from "../assets/img/tailwindcss-icon.svg";
import htmllogo from "../assets/img/html.png";
import nodelogo from "../assets/img/nodejs-icon.svg";
import bashlogo from "../assets/img/bash-icon.svg";
import vitelogo from "../assets/img/vitejs.svg";
import pills from "../assets/img/ssspill.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

export const Tech = () => {
    return (
        <div className="">
        <div id="tech" className="sm:pt-28 pt-40 pb-28">
            <AnimationOnScroll animateIn="animate__zoomIn">
            <h2 className=" text-center font-black text-5xl text-white lg:px-0 px-3">Herramientas utilizadas</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__zoomIn" id="habilidades" className=" w-11/12 lg:w-10/12 xl:w-7/12 m-auto flex flex-wrap p-6 lg:p-8 mt-10 sm:mt-10 gap-y-5 justify-between border-2 gap-x-2 border-black rounded-xl dark:bg-slate-900 bg-white dark:border-slate-500">
                <h2 className="inline-block w-full text-black font-bold text-2xl dark:text-white  ">Tecnologías conocidas</h2>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={Reactlogo} alt="" className=" w-8 sm:w-12"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">React</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={jslogo} alt="" className=" w-8 sm:w-12"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">JScript</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={nodelogo} alt="" className=" w-8 sm:w-12"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">Node</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={vitelogo} alt="" className=" w-8 sm:w-12 "/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">Vite</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={csslogo} alt="" className=" w-12 sm:w-16"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">CSS</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={tilelogo} alt="" className=" w-8 sm:w-12"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">Tilewind</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={bashlogo} alt="" className=" w-8 sm:w-12"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">Bash</h2>
                </div>
                <div className="flex border-2 w-36 sm:w-44 sm:h-20 h-16 items-center p-4 justify-between rounded-2xl dark:border-slate-500">
                    <img src={htmllogo} alt="" className=" w-12 sm:w-16"/>
                    <h2 className=" text-black font-semibold w-28 sm:w-32 text-center dark:text-white">HTML</h2>
                </div>
            </AnimationOnScroll>
        </div>
        </div>
    )
}