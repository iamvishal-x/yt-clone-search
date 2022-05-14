import noresult from "../../Resources/Images/ytnobg.png";
import "./NoResult.css";
const NoResult = () => {
  return (
    <>
      <div className="noresult">
        <img src={noresult} alt="no-result" className="noresult__img" />
        <h2>No result found</h2>
        <p>Try different keywords</p>
      </div>
    </>
  );
};

export default NoResult;
