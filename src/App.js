import { useState } from "react";
import Albums from "./Albums/Albums";
import "./App.css";

function App() {
  const [album, setAlbum] = useState([]);
  async function handleClick() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "GET",
        }
      );
      const result = await response.json();
      console.log("result : ", result);

      setAlbum(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function addAlbum() {
    try {
      fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        body: JSON.stringify({
          title: "new title",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("New Addition : ", json));
    } catch (error) {
      console.log(error);
    }
  }

  async function updateAlbum() {
    try {
      fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "new title",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("Updated Album : ", json));
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAlbum() {
    const id = 1;
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    console.log("Album with id : ", id, " deleted.");
  }

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Fetch Albums</button>
      <button onClick={() => addAlbum()}>Trigger Add Album</button>
      <button onClick={() => updateAlbum()}>Trigger Update Album</button>
      <button onClick={() => deleteAlbum()}>Trigger Delete Album</button>
      <div className="album-container">
        {album ? album.map((album) => <Albums props={album} />) : null}
      </div>
    </div>
  );
}

export default App;
