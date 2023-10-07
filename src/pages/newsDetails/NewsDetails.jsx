
import Navbar from "../../share/Navbar/Navbar";
import Header from "../../share/header/Header";
import Rightsidenav from "../../share/rightSideNav/Rightsidenav";

const NewsDetails = () => {

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 border">
                    <h1>News details</h1>

                </div>
                <div className="border">
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
