import react from "react";

const Card = ({ key, image, title, year }) => {
  let img_path = "https://m.media-amazon.com/images/M/"; /*get it from server*/
  // if (!movie) {
  //   return;
  // }
  return (
    <div className="movie">
      <img src={image} className="poster"></img>
      <div className="movie-details">
        <div className="box">
          <h4 className="title">{title}</h4>
          <p className="release">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
