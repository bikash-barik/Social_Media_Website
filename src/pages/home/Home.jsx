import Topbar from "../../components/topbar/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import Feed from "../../components/feed/Feed";
import Leftpart from "../../components/LeftSide/HomeLeftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
import "./home.css"

export default function Home({history}) {
  
  
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    }
  }, [history, userInfo])

  


  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftpart />
        {/* <Feed/> */}
        <Rightside />
      </div>
    </>
  );
}
