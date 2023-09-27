import { useState } from "react";
import TvShow from "./TvShow";
import axios from 'axios';
import styled from "styled-components";

function TvSearch(){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [displayResults, setDisplayResults] = useState([]);
    const [isSearchError, setIsSearchError] = useState(false);

    const searchHandler = async () => {
        try{
            const res = await axios.get(`https://5c4kzcz673.execute-api.eu-north-1.amazonaws.com/default/?query=${searchTerm}`);
            console.log(res);
            if (res.status === 200){
                setSearchResults(res.data);
                if (res.data.length === 0){
                    setIsSearchError(true);
                    setSearchResults("No results found");
                    return;
                }
                setIsSearchError(false);
                const display = res.data.map((result) => {return(<TvShow data={result}/>)});
                setDisplayResults(display);
            }else{
                setSearchResults(res.data)
                setIsSearchError(true);
            }
        }catch(err){
            setIsSearchError(true);
            setSearchResults(err.response.data);
        }
    }

    return (
        <TvSearchDiv>
            <h1>Search for a TV Show</h1>
            <div>
                <input type="text" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
                <button onClick={() => {searchHandler()}}>Search</button>
            </div>
            <div style={{width:"60vw"}}>
                {isSearchError ? <h1>{searchResults}</h1> : displayResults}
            </div>
        </TvSearchDiv>
    );
}

const TvSearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & input {
        padding: 0.5rem;
        border-radius: 25px;
        border: 2px solid #27374D;
        margin-right: 1rem;
    }

    & button {
        padding: 0.5rem;
        border-radius: 25px;
        border: 2px solid #27374D;
        background-color: #27374D;
        color: #FFFFFF;
        cursor: pointer;
    }

`

export default TvSearch;