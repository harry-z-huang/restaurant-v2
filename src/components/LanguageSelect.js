import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
    const [language, setLanguage] = useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);

        // When you pick english
        if (event.target.value === "English") {
            const englishElements = document.querySelectorAll(".English");
            englishElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });
        } 
        // When you pick korean
        else if(event.target.value === "Korean"){
            const englishElements = document.querySelectorAll(".English");
            englishElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });
        }
        // When you pick chinese
        else if(event.target.value === "Chinese"){
            const englishElements = document.querySelectorAll(".English");
            englishElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const koreanElements = document.querySelectorAll(".Korean");
            koreanElements.forEach((element) => {
                element.classList.remove("show");
                element.classList.add("hide");
            });

            const chineseElements = document.querySelectorAll(".Chinese");
            koreanElements.forEach((element) => {
                element.classList.remove("hide");
                element.classList.add("show");
            });
        }
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Korean'}>Korean</MenuItem>
                <MenuItem value={'Chinese'}>Chinese</MenuItem>
            </Select>
            {/* <FormHelperText>language</FormHelperText> */}
        </FormControl>
    )
}