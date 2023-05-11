import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Manga() {
    const { id } = useParams();
    const [mangaData, setMangaData] = useState(null);
    const [chapterData, setChapterData] = useState(null);

    useEffect(() => {
        fetch(`https://api.mangadex.org/manga/${id}`)
            .then((response) => response.json())
            .then((data) => setMangaData(data.data))
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        if (mangaData) {
            fetch(`https://api.mangadex.org/chapter?limit=10&manga=${id}&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&includeFutureUpdates=1&order%5BcreatedAt%5D=asc&order%5BupdatedAt%5D=asc&order%5BpublishAt%5D=asc&order%5BreadableAt%5D=asc&order%5Bvolume%5D=asc&order%5Bchapter%5D=asc`)
                .then((response) => response.json())
                .then((data) => setChapterData(data.data))
                .catch((error) => console.error(error));
        }
    }, [id, mangaData]);

    if (!mangaData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{mangaData.attributes.title.en}</h1>
            <p>{mangaData.attributes.description.en}</p>
            <h2>Tags</h2>
            <ul>
                {mangaData.attributes.tags.map((tag) => (
                    <li key={tag.id}>{tag.attributes.name.en}</li>
                ))}
            </ul>
            <h2>Chapters</h2>
            <ul>
                {chapterData && chapterData.map((chapter) => (
                    <li key={chapter.id}>
                        <a href={`/manga/${id}/${chapter.id}`}>
                            Volume {chapter.attributes.volume}, Chapter {chapter.attributes.chapter}: {chapter.attributes.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
