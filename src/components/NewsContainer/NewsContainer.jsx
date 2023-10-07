import { Link } from "react-router-dom";


const NewsContainer = ({ news }) => {
    const { title, thumbnail_url, rating } = news;

    return (
        <div className=" bg-base-100 shadow-xl ">
            <figure><img className=" w-[500px]  mx-auto" src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="">{title}</h2>
                <p>{rating.number}</p>
                <div className="card-actions justify-end">
                   <Link to='/newsdetails'>
                     <button className="btn btn-primary w-full">Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsContainer;