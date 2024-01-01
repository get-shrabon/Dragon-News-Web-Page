import Header from "../Shared/Header/Header";
import LestSide from "../Shared/LeftSide/LestSide";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="text-center">
        <LestSide></LestSide>
    </div>
    <div className="col-span-2">
        <h3 className="text-3xl text-center">News Comming Soon...</h3>
    </div>
    <div className="text-center">
        <RightSide></RightSide>
    </div>
   </div>
    </div>
  );
};

export default Home;
