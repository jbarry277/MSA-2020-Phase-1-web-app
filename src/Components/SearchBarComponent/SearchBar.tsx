import React, {useState} from 'react';

import './SearchBar.css';
import { Button, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { IUserInput } from '../../../src/Common/interfaces';
import DateFnsUtils from '@date-io/date-fns';


interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}
function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string |null> ("");
    const handleSearchQueryChange = (s: string |null) =>{
        setSearchQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);
    const [StartDate, setStartDate] = useState<Date | null>(
        new Date('2014-08-18'),
    );
    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const [EndDate, setEndDate] = useState<Date | null>(
        new Date('2020-05-18'),
    );

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };
    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
                StartDate: StartDate,
                EndDate: EndDate
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    return <div className="SearchBarContainer">
        <Grid container spacing = {3}>
            <Grid item xs={6} sm={3}>
                <TextField

                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() =>setHasFocus (true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />

               <Button variant="contained" color="primary" onClick={handleSubmit}>
                   Submit
               </Button>
           </Grid>
        </Grid>
    </div>
}

export default SearchBar
