import react from 'react';


const Card=(movie)=>{
    console.log(movie.info);
    let img_path="https://m.media-amazon.com/images/M/";/*get it from console*/
    <>
        <div className="movie">
            <img src={img_path+movie.info.image} className="poster"></img>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.info.title}</h4>
                    <p className="release">{movie.info.year}</p>

                </div>

            </div>

            <p>asjashhs</p>
        </div>

    </>
}

export default Card;