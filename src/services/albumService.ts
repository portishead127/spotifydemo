import apiClient from "./apiClient";
export const fetchAlbums = async () => {
// getAuthToken();
try{
const response = await
apiClient.get('https://api.spotify.com/v1/albums?ids=6Pz06FAaeym0JSqVqIkN56');
const albums = response.data.albums.map((album:any) => ({
name: album.name,
artists: album.artists.map((artist:any ) => ({name : artist.name

})),

popularity: album.popularity,
}))
return albums;
} catch (error) {
throw error;
}
}
export {}