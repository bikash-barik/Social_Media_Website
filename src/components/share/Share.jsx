import "./share.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Label, Room, Cancel } from "@material-ui/icons";
import { useContext, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Share() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const postCreate = useSelector((state) => state.postCreate);
  const { loading: loading, error: error, success: success, post } = postCreate;

  useEffect(() => {
    if (success) {
      history.push("/");
    }
  }, [dispatch, history, success]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    console.log("pppp");
    e.preventDefault();

    dispatch(createPost({ title, description, image }));
  };

  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const PF = "http://50.16.13.109:8800/images/";
  // const desc = useRef();
  // const [file, setFile] = useState(null);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const newPost = {
  //     userId: _id,
  //     desc: desc.current.value,
  //   };
  //   if (file) {
  //     const data = new FormData();
  //     const fileName = Date.now() + file.name;
  //     data.append("name", fileName);
  //     data.append("file", file);
  //     newPost.img = fileName;
  //     console.log(newPost);
  //     try {
  //       await axios.post("/upload", data);
  //     } catch (err) {}
  //   }
  //   try {
  //     await axios.post("/posts", newPost);
  //     window.location.reload();
  //   } catch (err) {}
  // };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <AddAPhotoIcon
                style={{ color: "#c3357f" }}
                className="shareIcon"
              />
              <span
                className="shareOptionText mobile_none"
                style={{ color: "#c3357f" }}
              >
                Photo or Video
              </span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                // onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <BorderColorIcon
                style={{ color: "#c3357f" }}
                className="shareIcon"
              />
              <span
                style={{ color: "#c3357f" }}
                className="shareOptionText mobile_none"
              >
                Write An Article
              </span>
            </div>
            <div className="shareOption">
              <AssignmentIcon
                style={{ color: "#c3357f" }}
                className="shareIcon"
              />
              <span
                style={{ color: "#c3357f" }}
                className="shareOptionText mobile_none"
              >
                Document
              </span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
