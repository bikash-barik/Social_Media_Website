import Topbar from "../../components/topbar/Header";
import Leftpart from "../../components/LeftSide/ConnectionLeft";
import ConnectionPart from "../../components/Connection/connectionPart";
import "./connection.css";

export default function Connection() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftpart />
        <ConnectionPart />
      </div>
    </>
  );
}
