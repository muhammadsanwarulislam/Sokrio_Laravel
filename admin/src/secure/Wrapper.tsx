import { Component } from 'react'
import Nav from './components/Nav'
import Menu from './components/Menu'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

class Wrapper extends Component<any, any> {
    state = {
        redirect: false,
        current_user: ''
    }
    componentDidMount = async () => {
        try {
            const response = await axios.get('/info');
            this.setState({
                current_user: response.data
            })
        } catch (error) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Navigate to='/login' />
        }
        return (
            <>
                <div className="flex">
                    <div className="w-64 bg-gray-800 h-screen">
                        <div className="flex items-center justify-center h-20 text-white text-xl font-bold">
                            Logo
                        </div>
                        <Menu />
                    </div>
                    <div className="flex-1 bg-gray-100">
                        <Nav />
                        <main className="p-4">{this.props.children}</main>
                    </div>
                </div>
            </>
        )
    }
}

export default Wrapper;