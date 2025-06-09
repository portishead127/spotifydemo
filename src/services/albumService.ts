import apiClient from "./apiClient";
export const fetchAlbums = async () => {
// getAuthToken();
try{
const response = await
apiClient.get('/v1/albums?ids=07w0rG5TETcyihsEIZR3qG,5Csjy4XeA7KnizkhIvI7y2,2g4aJTa5ejGpp0O0GKzWAQ');
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