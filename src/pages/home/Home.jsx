import BrekingNews from "../../share/BrekingNews";
import Navbar from "../../share/Navbar/Navbar";
import Header from "../../share/header/Header";
import Leftsidenav from "../../share/leftSideNav/Leftsidenav";
import Rightsidenav from "../../share/rightSideNav/Rightsidenav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className="col-span-2">News comming here...</div>
                <div>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default Home;