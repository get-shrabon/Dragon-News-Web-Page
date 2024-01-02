import  { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const News = () => {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(3);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const handleShowLess = () => {
    setShow(3);
  };

  const handleShowAll = () => {
    setShow(news.length);
  };

  return (
    <div>
      <h2 className="font-bold text-xl mb-3 text-slate-700">
        Dragon News Home
      </h2>
      <div>
        {news.slice(0, show).map((data) => (
          <SingleNews key={data._id} data={data}></SingleNews>
        ))}
      </div>
      {show === news.length ? (
        <button onClick={handleShowLess} className="btn btn-info text-white">
          <FaEyeSlash /> Show Less
        </button>
      ) : (
        <button onClick={handleShowAll} className="btn btn-info text-white">
          <FaEye /> Show All
        </button>
      )}
    </div>
  );
};

export default News;
