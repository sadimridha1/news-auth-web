import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="">
            <h1 className="text-3xl">All Categories</h1>
            <div className="mt-6">
                {
                    categories.map(category => <Link to={`category/${category.id}`} className="block text-xl py-3 pl-3 w-full hover:bg-slate-800" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default Leftsidenav;