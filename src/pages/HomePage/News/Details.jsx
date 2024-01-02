import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSide from "../../Shared/RightSide/RightSide";
import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import moment from "moment/moment";

const Details = () => {
  const NewsData = useLoaderData();
  const { _id } = useParams();
  const news = NewsData.find((news) => news._id === _id);
  const { title, image_url, details } = news;

  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-14 pb-5">
        <div className="col-span-3">
          <div>
            <h2 className="font-bold text-xl mb-3 text-slate-700">
              Dragon News
            </h2>
            <img className="w-full" src={image_url} alt="" />
            <h3 className="text-2xl font-bold text-slate-600 pr-0 md:pr-10 my-3">
              {title}
            </h3>
            <p>{details}</p>
            <button className="btn btn-error rounded-none text-white mt-3">
              <FaArrowLeft></FaArrowLeft> All news in this category
            </button>
          </div>
          <h2 className="font-bold text-xl mb-3 text-slate-700 mt-10">
            Editors Insight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            <div>
              <div className="w-full h-40 rounded bg-slate-200"></div>
              <h3 className="text-slate-600 text-lg font-bold my-3">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h3>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <p className="font-medium">
                  {moment().format(" MMMM D, YYYY")}
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-40 rounded bg-slate-200"></div>
              <h3 className="text-slate-600 text-lg font-bold my-3">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h3>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <p className="font-medium">
                  {moment().format(" MMMM D, YYYY")}
                </p>
              </div>
            </div>
            <div>
              <div className="w-full h-40 rounded bg-slate-200"></div>
              <h3 className="text-slate-600 text-lg font-bold my-3">
                21 The Most Stylish Wedding Guest Dresses For Spring
              </h3>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <p className="font-medium">
                  {moment().format(" MMMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Details;
