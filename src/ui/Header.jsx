import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"



const Header = () => {
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-b-stone-400 sm:px-6 flex justify-between items-center ">
        <Link to='/' className="tracking-[0.125rem]">Fast React Pizza Co.</Link>
        <SearchOrder />
        <Username />
    </header>
  )
}

export default Header