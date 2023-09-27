import styled from 'styled-components';

function TvShow({data}){
    return(
        <TvShowDiv>
            <img src={data.image ? data.image : "https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg"}
            alt={data.image ? `Picture of ${data.name}` : `${data.name} has no image available, this is the default thumbnail`} />
            <div>
                <h1>{data.name}</h1>
                <h2>{data.summary}</h2>
            </div>
        </TvShowDiv>
    )
}

const TvShowDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #9DB2BF;
    border-radius: 25px;
    padding: 1rem;
    margin: 2rem 0 2rem 0;
    & h1 {
        font-size: 2rem;
        color: #27374D;
    }
    & h2 {
        font-size: 1.5rem;
        color: #27374D;
    }
    & img {
        object-fit: cover;
        width: 200px;
        margin-right: 2rem;
        border-radius: 25px;
    }
`

export default TvShow;