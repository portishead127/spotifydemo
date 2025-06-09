import { useEffect, useState } from "react";
import { Album } from "../types/TAlbums";
import { fetchAlbums } from "../services/albumService";

export default function AlbumList() {
const [albums, setAlbums] = useState<Album[]>([]);
const [error, setError] = useState<string | null>(null);
useEffect(() => {
const getAlbums = async () => {
try {
const data = await fetchAlbums();
setAlbums(data);
} catch (err) {
setError('Error fetching albums');
}
};

getAlbums();
}, []);
return (
<div>
<h1>Albums</h1>
{error && <p>{error}</p>}
<ul>
{albums.map((album) => (
<li key={album.name}>
<h2>{album.name}</h2>
<p>Artist: {album.artists.map(artist => artist.name).join(',')}</p>

<p>Popularity: {album.popularity}</p>
</li>
))}
</ul>
</div>
);
}