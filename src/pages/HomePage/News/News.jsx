import { useEffect } from "react";
import { useState } from "react";
import SingleNews from "./SingleNews";


const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch("news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    } , [])
    return (
      <div>
        <h2 className="font-bold text-xl mb-3 text-slate-700">
          Dragon News Home
        </h2>
        <div>
            {
                news.map(data => <SingleNews key={data._id} data={data}></SingleNews>)
            }
        </div>
      </div>
    );
};

export default News;