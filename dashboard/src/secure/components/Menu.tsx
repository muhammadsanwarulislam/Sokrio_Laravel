import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="mt-6">
                <NavLink className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white" to={'/dashboard'}>
                    Dashboard
                </NavLink>
                {/* Add more menu items here */}
            </nav>
        </>
    )
}

export default Menu