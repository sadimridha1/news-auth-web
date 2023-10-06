import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Rightsidenav = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h1 className="text-2xl">Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <div className='p-4 '>
                <h1 className="text-2xl mb-3">Follow Us</h1>
               <a className='flex items-center gap-2 text-xl border rounded-t-lg p-2' href="">
                 <FaFacebook></FaFacebook>
                 Facebook
               </a>
               <a className='flex items-center gap-2 text-xl border-x  p-2' href="">
                 <FaTwitter></FaTwitter>
                 Twitter
               </a>
               <a className='flex items-center gap-2 text-xl border rounded-b-lg p-2' href="">
                 <FaInstagram></FaInstagram>
                 Instagram
               </a>
            </div>
        </div>
    );
};

export default Rightsidenav;