import React, { useState, useEffect } from 'react';

export default function CarouselCell({ selectedGenre }) {

    const [manga, setManga] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/manga');
            const data = await response.json();
            setManga(data.mangas);
        }
        fetchData();
    }, []);

    const filteredManga = selectedGenre
        ? manga.filter((m) => m.genres.includes(selectedGenre))
        : manga;

    return (
        <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
            {filteredManga.map((element) => (
                <div
                    className="carousel-cell"
                    style={{ backgroundImage: `url(${element.coverLink})`, width: "100px", height: "180px", backgroundSize: "cover", margin: "40px" }}
                    key={element.id}
                >
                    <a href={"/manga/" + element.id}>{element.title}</a>
                </div>
            ))}
        </div>
    )
}
