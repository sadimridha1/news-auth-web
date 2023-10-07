import { Link, useLoaderData } from "react-router-dom";
import BrekingNews from "../../share/BrekingNews";
import Navbar from "../../share/Navbar/Navbar";
import Header from "../../share/header/Header";
import Leftsidenav from "../../share/leftSideNav/Leftsidenav";
import Rightsidenav from "../../share/rightSideNav/Rightsidenav";
import NewsContainer from "../../components/NewsContainer/NewsContainer";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext)
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div>
                            <Leftsidenav></Leftsidenav>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 ">
                            {
                                news.map(aNews => <NewsContainer key={aNews._id} news={aNews}></NewsContainer>)
                            }
                        </div>
                        <div>
                            <Rightsidenav></Rightsidenav>
                        </div>
                    </div>

                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
        </div>
    );
};

export default Home;