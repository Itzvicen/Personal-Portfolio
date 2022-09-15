import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import email from '../assets/img/email.png';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Fragment } from "react";
import { Button, Dialog, DialogHeader,DialogBody, DialogFooter } from "@material-tailwind/react";


export const Contacto = () => {
    let [nombre, setNombre] = useState("")

    function sendEmail(e) {
        e.preventDefault();

            emailjs.sendForm('service_f5lsjvg','template_2vijtol', e.target, '6IBDhTYIImjQFMB3i')
            .then((response) => {
                console.log('Correcto', response.status, response.text);
                document.getElementById('alerta').style.visibility="visible"
                document.getElementById('alerta').innerHTML='Mensaje enviado correctamente. Gracias por tu mensaje '+nombre;
            }, (error) => {
                console.log('Error al enviar',error.text);
        });
    }

    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);

    return (
        <div>
            <section id="contacto" className="w-full bg-white dark:bg-transparent mt-16 mb-7 pb-24">
                <div className="mx-auto max-w-7xl md:w-11/12">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                        <h2 className="w-full mb-12 text-5xl lg:p-0 px-4 font-extrabold text-center md:text-center lg:text-left sm:text-6xl color-text">Cuéntame sobre tu idea</h2>
                    </AnimationOnScroll>
                    <div class="flex flex-col lg:flex-row">
                        <AnimationOnScroll animateIn="animate__zoomInLeft">
                        <div className="w-full p-5 md:w-full xl:w-full sm:text-full items-center m-auto lg:text-left text-center md:text-center">
                            <h3 className=" text-gray-500 text-xl font-semibold pb-4">¿Necesitas ayuda?</h3>
                            <h2 className=" text-black dark:text-white font-bold lg:text-5xl text-4xl">Escríbeme si necesitas ayuda o quieres saber más sobre mi</h2>
                            <h3 className=" text-gray-500 pt-4 font-semibold text-xl">¡Estaré encantado de responderte! 🤗</h3>
                            <div className="flex xl:w-2/5 text-left w-4/6 md:w-1/2 border-2 rounded-xl p-2 mt-10 lg:mt-10 m-auto items-center gap-3 lg:mb-0 mb-12 ">
                                <img className="w-20" src={email} alt="email" />
                                <div className=" flex-col">
                                    <h2 className="text-black dark:text-white ktext-base font-bold inline-block w-full">Email</h2>
                                    <h3 className=" text-gray-500 font-semibold inline-block w-full ">hola@vicenweb.es</h3>
                                </div>
                            </div>
                            <h3 id='alerta' className='text-black text-center font-bold w-full py-3 px-2 rounded-lg bg-green-300 shadow-xl transition ease-in-out lg:mt-18 mt-12 '></h3>
                        </div>
                        </AnimationOnScroll>
                        
                        <div className="w-full "><AnimationOnScroll animateIn="animate__zoomInRight" delay={100}>
                            <div className="flex flex-col items-center justify-start w-full md:w-4/5 md:m-auto p-5 lg:p-0">
                                <form className="relative w-full space-y-8" onSubmit={sendEmail}>
                                    <div className="relative">
                                        <label className="font-bold dark:text-white text-gray-900">Nombre</label>
                                        <input name="nombre" id='name' onChange={(event) => setNombre(event.target.value)} data-error="Por favor, introduce tu nombre" required="required" type="text" className="block w-full px-4 py-4 mt-2 text-base text-gray-800 placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Introduce tu nombre"/>
                                    </div>
                                    <div class="relative">
                                        <label className="font-bold dark:text-white text-gray-900">Email</label>
                                        <input name="email" id='mail' data-error="Por favor, introduce tu email" required="required" type="email" className="block w-full px-4 py-4 mt-2 text-base text-gray-800 placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Introduce tu correo electrónico"/>
                                    </div>
                                    <div class="relative">
                                        <label className="font-bold dark:text-white text-gray-900">Mensaje</label>
                                        <textarea name="mensaje" id='msg' data-error="Por favor, introduce tu mensaje" required="required" type="text" className="block w-full px-4 pt-4 pb-20 mt-2 text-base text-gray-800 placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Mensaje"/>
                                    </div>
                                    <div className="relative">
                                            <button type="submit" className="glow-on-hover inline-block w-full md:w-full lg:w-full px-10 py-4 text-md font-semibold text-white color-btn rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:scale-105 transition ">Enviar mensaje<FontAwesomeIcon className="text-white pl-2" icon={faPaperPlane} /></button>
                                    </div>
                                </form>
                            </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}