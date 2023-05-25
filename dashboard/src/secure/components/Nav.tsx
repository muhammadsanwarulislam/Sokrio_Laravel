import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <header className="bg-white shadow">
                <div className="flex items-center justify-end h-20 px-4">
                    <div className="mr-4">User Avatar</div>
                    <div>
                        <button className="px-4 py-2 rounded-sm bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none" onClick={handleClick}>
                            Sign out
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Nav
