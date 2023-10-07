import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        //create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className=" ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-6 ">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 md:w-full shadow-2xl bg-base-100">
                        <form onClick={handleRegister} className="card-body w-[370px] md:w-[440px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="pb-4 pl-8">Allready have an Account? Please <Link className="text-bold text-blue-700" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;