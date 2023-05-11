import React, { useState, useEffect } from 'react';

export default function GenreFilter({ onGenreChange }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/manga');
            const data = await response.json();

            const uniqueGenres = new Set();
            data.mangas.forEach(manga => {
                manga.genres.forEach(genre => uniqueGenres.add(genre));
            });
            setGenres([...uniqueGenres]);
        }
        fetchData();
    }, []);

    return (
        <div>
            <label>Choose a genre: </label>
            <select onChange={onGenreChange}>
                <option value="">All</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
}
