export interface Album {
name: string;
artists: Artist[];
popularity: number;

}
export interface Artist{
name: string;
}
export interface AlbumsResponse {
albums: Album[];
}