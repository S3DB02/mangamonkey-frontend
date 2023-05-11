import React, { useState } from 'react';
import GenreFilter from './GenreFilter';
import CarouselCell from './CarouselCell';

export default function Homepage() {
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    return (
        <div>
            <GenreFilter onGenreChange={handleGenreChange} />
            <CarouselCell selectedGenre={selectedGenre} />
        </div>
    );
}