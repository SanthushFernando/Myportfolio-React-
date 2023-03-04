import axios from 'axios';
import React, { useState,useEffect } from 'react';
import "./index.css";



function NetworkPage(props) {
const[jokes,setJokes]=useState([]);
    function getJokes(){
        axios.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10").then((result) => {
          console.log(result.data.jokes);
          setJokes(result.data.jokes);
    }).catch((error)=> {
        console.log(error)
    })
    
    }

    useEffect(() => {
        getJokes();
    },[])


    return (
        <div>
            <center>
                <h1 className='network-title'>Networking with Axios</h1>

                <ol>
                    {
                        jokes.length != 0 ?
                        jokes.map(item => {
                            return <li>{item.joke}</li>
                        })
                        :null

                        }
                </ol>
            </center>
        </div>
    );
}

export default NetworkPage;