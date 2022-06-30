import react from "react";

const Card = ({ movie }) => {
  //console.log(movie.info);
  let img_path = "https://m.media-amazon.com/images/M/"; /*get it from server*/

  return (
    <div className="movie">
      <img src={movie.image} className="poster"></img>
      <div className="movie-details">
        <div className="box">
          <h4 className="title">{movie.title}</h4>
          <p className="release">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
