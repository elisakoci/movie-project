import React from "react";

import Card from "./Card";
const MovieList = (props) => {
  console.log(props);
  if (props.items.length === 0) {
    return <h2>No Movies Found on this Year</h2>;
  }

  return (
    <ul>
      {props.items.map((movie) => (
        <Card
          key={movie.id}
          image={movie.image}
          title={movie.title}
          year={movie.year}
        />
      ))}
    </ul>
  );
};
export default MovieList;
