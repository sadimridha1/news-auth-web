import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateDetails = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)
    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={Location.pathname} to='/login'></Navigate>
};

export default PrivateDetails;