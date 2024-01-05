import Header from "../Shared/Header/Header";
import LestSide from "../Shared/LeftSide/LestSide";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import News from "./News/News";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-14 pb-5">
    <div>
        <LestSide></LestSide>
    </div>
    <div className="col-span-2">
        <News></News>
    </div>
    <div>
        <RightSide></RightSide>
    </div>
   </div>
    </div>
  );
};
export default Home;
