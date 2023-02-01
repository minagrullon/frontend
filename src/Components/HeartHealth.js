import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <>
      <p>
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
