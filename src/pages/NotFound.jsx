import { Link } from 'wouter'

export const NotFound = () => {
    return (
        <section className="flex items-center px-16 h-screen bg-white dark:bg-transparent text-gray-600">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto mt-5">
                <div className="max-w-md text-center mb-9">
                    <h2 className="mb-8 text-transparent bg-clip-text font-extrabold text-9xl color-text">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">La página que buscas no existe</p>
                    <p className="mt-4 mb-8 font-medium text-base text-gray-400">No te preocupes 🤙🏼, puedes volver al inicio o navegar entre las páginas de la web</p>
                    <Link href="/">
                        <a href='/' className="glow-on-hover px-8 py-3 font-semibold rounded bg-white border-2 text-gray-900">Volver al inicio</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}