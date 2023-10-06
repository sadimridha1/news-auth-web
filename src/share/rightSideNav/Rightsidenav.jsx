import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone1 from '../../../src/assets/qZone1.png';
import Qzone2 from '../../../src/assets/qZone2.png';
import Qzone3 from '../../../src/assets/qZone3.png';
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

            {/* img part start */}
            <div className='grid grid-cols-1 ml-14 md:ml-0'>
                <div><img src={Qzone1} alt="" /></div>
                <div><img src={Qzone2} alt="" /></div>
                <div><img src={Qzone3} alt="" /></div>
            </div>
        </div>
    );
};

export default Rightsidenav;