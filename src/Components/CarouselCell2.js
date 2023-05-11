import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MangaList = () => {
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        fetchRandomManga();
    }, []);

    const fetchRandomManga = async () => {
        try {
            const response = await axios.get('https://api.mangadex.org/manga', {
                params: {
                    limit: 10,
                    order: {
                        'createdAt': 'desc',
                    },
                },
            });

            const mangas = response.data.results.map((mangaData) => {
                const manga = mangaData.data;
                const attributes = manga.attributes;
                const coverId = attributes.cover_art_id;
                const coverImage = `https://uploads.mangadex.org/covers/${manga.id}/${coverId}.256.jpg`;
                return {
                    id: manga.id,
                    title: attributes.title.en,
                    coverImage,
                };
            });

            setMangaList(mangas);
        } catch (error) {
            console.error('Failed to fetch manga data:', error);
        }
    };

    return (
        <div>
            <h1>Random Manga List</h1>
            <ul>
                {mangaList.map((manga) => (
                    <li key={manga.id} style={{ marginBottom: '1rem' }}>
                        <h3>{manga.title}</h3>
                        <img src={manga.coverImage} alt={`${manga.title} cover`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MangaList;
