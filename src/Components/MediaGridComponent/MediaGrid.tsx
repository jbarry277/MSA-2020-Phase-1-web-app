import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard';
import { Grid } from '@material-ui/core';
import './MediaGrid.css';

interface IState {
    links: any[];
    data: any[];

}
interface IMediaGridProps {
    SearchQuery: (string | null);
    StartDate: (Date | null);
    EndDate: (Date | null);

}

function MediaGrid(props: IMediaGridProps) {

    const [PosterLink, setPosterLink] = useState();
    const [Title, setTitle] = useState();
    useEffect(() => {
        var apiURL = 'http://www.omdbapi.com/?apikey=a0163dd3&t=' + props.SearchQuery

         fetch(apiURL)
             .then(response => response.json())
             .then(response => {
                 setPosterLink(response['Poster'])
                 setTitle(response['Title'])
             })
             .catch(() => console.log("it didn't work")
             );

    }, [props.SearchQuery, props.EndDate, props.StartDate]);
    var Cards: JSX.Element[] = [];
    Cards.push(
        <div>
        <img src = {PosterLink}/>
        <h4>{Title}</h4>
        </div>
    )
    return (
        <div>
                   {Cards}
        </div>
    )
}

export default MediaGrid
