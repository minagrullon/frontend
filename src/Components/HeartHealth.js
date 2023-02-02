import heartSolid from "../assets/healthyfullheart.png";
import heartOutline from "../assets/emptyred.png";
import "../Pages/indexpg.css";

function HeartHealth({ snackHealth }) {
  return (
    <>
      <p className="heart">
        {snackHealth ? (
          <img src={heartSolid} alt={heartSolid} />
        ) : (
          <img src={heartOutline} alt={heartOutline} />
        )}
      </p>
    </>
  );
}

export default HeartHealth;
