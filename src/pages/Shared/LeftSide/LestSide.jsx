import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import leftOne from "../../../assets/1.png";
import leftTwo from "../../../assets/2.png";
import leftThree from "../../../assets/3.png";
import moment from "moment/moment";

const LestSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="font-bold text-xl mb-3 text-slate-700">All Categories</h3>
      <div className="categories__container mb-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={`block p-3 rounded`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="news__cards">
        <div>
          <img className="w-full" src={leftOne} alt="" />
          <h3 className="font-medium text-slate-500 text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-slate-500 font-medium">Sport</h4>
            <p className="font-medium">{moment().format(" MMMM D, YYYY")}</p>
          </div>
        </div>
        <div className="my-4">
          <img className="w-full" src={leftTwo} alt="" />
          <h3 className="font-medium text-slate-500 text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-slate-500 font-medium">Sport</h4>
            <p className="font-medium">{moment().format(" MMMM D, YYYY")}</p>
          </div>
        </div>
        <div>
          <img className="w-full" src={leftThree} alt="" />
          <h3 className="font-medium text-slate-500 text-xl">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h3>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-slate-500 font-medium">Sport</h4>
            <p className="font-medium">{moment().format(" MMMM D, YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LestSide;
