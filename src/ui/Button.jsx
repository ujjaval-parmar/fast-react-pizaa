import { Link } from "react-router-dom"


const Button = ({ children, disabled, to, type, onClick }) => {

   
    const base = "bg-yellow-400 uppercase text-sm font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 duration-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

    const styles = {

        primary: base + ' ' + 'px-4 py-3 md:px-6 md:py-4',
        small: base + ' ' + 'px-4 py-2 md:px-5 md:py-2 text-xs',
        secondary: 'text-sm uppercase font-semibold border-2 border-stone-300 text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 duration-300 transition-colors focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-5 md:py-3.5',
        round:  base + ' ' + 'px-5 py-1 md:px-3.5 md:py-2 text-sm',

    }


    if (to) return (
        <Link to={to} className={styles[type]}>{children} </Link>
    )

    if(onClick) return (
        <button
            className={styles[type]}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )

    return (
        <button
            className={styles[type]}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button