import React,  { useState, useEffect } from 'react';
import { Select, FormControl } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
          <InputLabel shrink htmlFor="country-label-placeholder">
            Country
          </InputLabel>
          <Select
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
            input={<Input name="country" id="country-label-placeholder" />}
            displayEmpty
            name="country"
            className={styles.selectEmpty} >
            <MenuItem value="">Global</MenuItem>
            {fetchedCountries.map((country,  i) => <option key={i} value={country}>{country}</option>)}
          </Select>
          <FormHelperText>Select the desired country!</FormHelperText>
        </FormControl>
    )
}

export default CountryPicker;