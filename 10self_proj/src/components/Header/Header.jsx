import {NavLink} from 'react-router-dom';

export const Header = () => {


  return (
    <div className="h-12 w-full bg-white shadow-sm flex justify-around items-center">
        <img src="./src/assets/logo.png" alt="logo" className="w-20 h-20" />
        <div >
            <ul className='flex gap-10 justify-between'>
                <li>
                    <NavLink to="/" className={({isActive}) => `${isActive ? "text-emerald-400" : "text-gray-600"} font-semibold `}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects" className={({isActive}) => `${isActive ? "text-emerald-400" : "text-gray-600"} font-semibold`}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Portfolio" className={({isActive}) => `${isActive ? "text-emerald-400" : "text-gray-600"} font-semibold`}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Github" className={({isActive}) => `${isActive ? "text-emerald-400" : "text-gray-600"} font-semibold`}>
                        Github
                    </NavLink>
                </li>
            </ul>      
        </div>
        <button className='bg-emerald-400 font-bold text-white p-1 pl-5 pr-5 rounded-md hover:bg-emerald-700'>
            Contact <span className="ml-1">📞</span>
        </button>
    </div>
  )
}
