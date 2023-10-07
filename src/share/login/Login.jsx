import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        logIn(email, password)
        .then(result => {
            console.log(result.user)

            //navigate after login
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className=" ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-6 ">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-full shadow-2xl bg-base-100">
                        <form onClick={handleLogin} className="card-body w-[370px] md:w-[440px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="pb-4 pl-8">Don't have an Account <Link className="text-bold text-blue-700" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;