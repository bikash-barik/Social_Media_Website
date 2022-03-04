import { useSelector } from "react-redux";
import { useEffect } from "react";
import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/NotificationLeft";
import NotificationPart from "../../components/Notification/NotificationPart";

export default function Notification({history}) {
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
       <NotificationPart />
      </div>
    </>
  );
}
