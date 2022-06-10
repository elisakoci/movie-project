import react, { useEffect, useState } from "react";
import Card from "./Card";
let API_key="k_20iymfye";
let base_url="https://imdb-api.com/API";
let url = base_url + "/ComingSoon/" + API_key;

const Main=()=>{

    /*useState Hook allow to track properties or data*/
    const [movieData, setData]= useState([]);
    const [url_set, setUrl]=useState(url);


    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.items);/*items from console*/
            setData(data.items);
        });

    }, [url_set])

    return(
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li><a href="#">Comming Soon</a></li>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Comedie</a></li>
                    </ul>
                </nav>

                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Search Movie Name" className="inputText"></input>
                        <button><i className="fas fa-search"></i></button>

                    </div>
                </form>
            </div>
            
            <div className="container">
                {
                    (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res, pos)=>{
                        return (
                            <Card info={res} key={pos}/>
                        )
                    })
                }

                <p>testetstet</p>
            </div>

        </>
    )
}

export default Main;