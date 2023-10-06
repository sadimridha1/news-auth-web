import Marquee from "react-fast-marquee";

const BrekingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-danger">Breaking News</button>
            <Marquee>
                .Tom Latham is leading the Black Caps as stand-in captain as the side rested regular captain Kane Williamson (knee) and fast bowler.
            </Marquee>
        </div>

    );
};

export default BrekingNews;