import { useSelector } from "react-redux";
import { useEffect } from "react";
import Topbar from "../../components/topbar/Header";
import ProfileEdit from "../../components/ProfilePart/ProfileEdit";

export default function Profile({history}) {
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
      <ProfileEdit />
    </>
  );
}
