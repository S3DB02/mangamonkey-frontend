import React, { useState, useEffect } from 'react';
import GenreFilter from './GenreFilter';
import CarouselCell from './CarouselCell';
import { useAuth0 } from "@auth0/auth0-react";
const axios = require('axios')

export default function Homepage() {
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            sendDataToServer(user);
        }
    }, [isAuthenticated, user]);

    // const sendDataToServer = async (userData) => {
    //     try {
    //         const response = await axios.post('http://localhos:5001/create', userData);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const sendDataToServer = async (userData) => {
        try {
            const response = await fetch('http://localhost:5001/user/create', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // this will parse the response body as JSON
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <GenreFilter onGenreChange={handleGenreChange} />
            <CarouselCell selectedGenre={selectedGenre} />
        </div>
    );
}