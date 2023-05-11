import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Chapter() {
    const { id, mangaId } = useParams();
    const [chapterData, setChapterData] = useState(null);

    useEffect(() => {
        fetch(`https://api.mangadex.org/at-home/server/${id}`)
            .then((response) => response.json())
            .then((data) => setChapterData(data))
            .catch((error) => console.error(error));
    }, [id]);

    console.log(chapterData);
    console.log(mangaId);

    if (!chapterData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {chapterData.chapter.data.map((image) => (
                <img key={`https://uploads.mangadex.org/data/${chapterData.hash}/${image}`} src={`https://uploads.mangadex.org/data/${chapterData.chapter.hash}/${image}`}></img>
            ))}
        </div>

    );
}