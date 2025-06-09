import logo from "./assets/logo.png";
import Header from "./components/Header";
import AlbumList from "./components/AlbumList";
export default function App() {
return (
<main>
<Header image={{ src: logo, alt: "Spotify Image" }}>
<h1>BT Work Experience</h1>
</Header>
<AlbumList />
</main>
);
}