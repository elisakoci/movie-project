import React, { useEffect, useState } from "react";
/*import { useEffect } from "react/js/react.development";*/
import MovieList from "./MovieList";
import MovieFilter from "./MovieFilter";

let API_key = "k_20iymfye";
let base_url = "https://imdb-api.com/API";
let url = base_url + "/ComingSoon/" + API_key;

let array = ["Comming Soon", "Top 250 Movies", "Most Popular", "In Theaters"];

const Main = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  /*useState Hook allow to track properties or data*/
  const [movieData, setMovieData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.items);/*items from console*/
        setMovieData(data.items);
        filetrMovies(filteredYear);
      });
  }, [url_set]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    filetrMovies(selectedYear);
  };

  const filetrMovies = (year) => {
    const filtered_Movies = movieData.filter((movie) => {
      return movie.year === year;
    });
    setFilteredMovies(filtered_Movies);
  };

  const getData = (movieType) => {
    if (movieType === "Comming Soon") {
      url = base_url + "/ComingSoon/" + API_key;
    }
    if (movieType === "Top 250 Movies") {
      url = base_url + "/Top250Movies/" + API_key;
    }
    if (movieType === "Most Popular") {
      url = base_url + "/MostPopularMovies/" + API_key;
    }
    if (movieType === "In Theaters") {
      url = base_url + "/InTheaters/" + API_key;
    }

    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      url = base_url + "/SearchMovie/k_20iymfye/inception 2010";
      setUrl(url);
      setSearch(url);
      console.log(url);
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {array.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Search Movie Name"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <MovieFilter selected={filteredYear} onChange={filterChangeHandler} />

      <div className="container">
        <MovieList items={filteredMovies} />
      </div>
    </>
  );
};

export default Main;
