import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto py-7' src={logo} alt="" />
            <p className='text-3xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl py-3'>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;