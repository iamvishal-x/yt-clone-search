import "./Landing.css";
import yt from "../../Resources/Images/yt.svg";
const Landing = () => {
  return (
    <>
      <div className="landing">
        <img src={yt} alt="yt" className="landing__img" />
        <h4 className="landing__title">Welcome to the YouTube Clone</h4>
        <p>Start searching your favourite videos</p>
      </div>
    </>
  );
};

export default Landing;
