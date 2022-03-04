import Topbar from "../../components/topbar/Header";
import ChartPart from "../../components/Chart/chartPart";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function Messenger({history}) {

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
      <ChartPart />
    </>
  );
}
