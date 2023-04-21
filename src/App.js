import './App.css';
import CharacterContainer from './containers/CharacterContainer';

function App() {

  const pages = [
    {name: "Page 1", url: "https://rickandmortyapi.com/api/character"},
    {name: "Page 2", url: "https://rickandmortyapi.com/api/character?page=2"},
    {name: "Page 3", url: "https://rickandmortyapi.com/api/character?page=3"},
    {name: "Page 4", url: "https://rickandmortyapi.com/api/character?page=4"},
    {name: "Page 5", url: "https://rickandmortyapi.com/api/character?page=5"},
    {name: "Page 6", url: "https://rickandmortyapi.com/api/character?page=6"},
    {name: "Page 7", url: "https://rickandmortyapi.com/api/character?page=7"},
    {name: "Page 8", url: "https://rickandmortyapi.com/api/character?page=8"},
    {name: "Page 9", url: "https://rickandmortyapi.com/api/character?page=9"},
    {name: "Page 10", url: "https://rickandmortyapi.com/api/character?page=10"},
    {name: "Page 11", url: "https://rickandmortyapi.com/api/character?page=11"},
    {name: "Page 12", url: "https://rickandmortyapi.com/api/character?page=12"},
    {name: "Page 13", url: "https://rickandmortyapi.com/api/character?page=13"},
    {name: "Page 14", url: "https://rickandmortyapi.com/api/character?page=14"},
    {name: "Page 15", url: "https://rickandmortyapi.com/api/character?page=15"},
    {name: "Page 16", url: "https://rickandmortyapi.com/api/character?page=16"},
    {name: "Page 17", url: "https://rickandmortyapi.com/api/character?page=17"},
    {name: "Page 18", url: "https://rickandmortyapi.com/api/character?page=18"},
    {name: "Page 19", url: "https://rickandmortyapi.com/api/character?page=19"},
    {name: "Page 20", url: "https://rickandmortyapi.com/api/character?page=20"},
    {name: "Page 21", url: "https://rickandmortyapi.com/api/character?page=21"},
    {name: "Page 22", url: "https://rickandmortyapi.com/api/character?page=22"},
    {name: "Page 23", url: "https://rickandmortyapi.com/api/character?page=23"},
    {name: "Page 24", url: "https://rickandmortyapi.com/api/character?page=24"},
    {name: "Page 25", url: "https://rickandmortyapi.com/api/character?page=25"},
    {name: "Page 26", url: "https://rickandmortyapi.com/api/character?page=26"},
    {name: "Page 27", url: "https://rickandmortyapi.com/api/character?page=27"},
    {name: "Page 28", url: "https://rickandmortyapi.com/api/character?page=28"},
    {name: "Page 29", url: "https://rickandmortyapi.com/api/character?page=29"},
    {name: "Page 30", url: "https://rickandmortyapi.com/api/character?page=30"},
    {name: "Page 31", url: "https://rickandmortyapi.com/api/character?page=31"},
    {name: "Page 32", url: "https://rickandmortyapi.com/api/character?page=32"},
    {name: "Page 33", url: "https://rickandmortyapi.com/api/character?page=33"},
    {name: "Page 34", url: "https://rickandmortyapi.com/api/character?page=34"},
    {name: "Page 35", url: "https://rickandmortyapi.com/api/character?page=35"},
    {name: "Page 36", url: "https://rickandmortyapi.com/api/character?page=36"},
    {name: "Page 37", url: "https://rickandmortyapi.com/api/character?page=37"},
    {name: "Page 38", url: "https://rickandmortyapi.com/api/character?page=38"},
    {name: "Page 39", url: "https://rickandmortyapi.com/api/character?page=39"},
    {name: "Page 40", url: "https://rickandmortyapi.com/api/character?page=40"},
    {name: "Page 41", url: "https://rickandmortyapi.com/api/character?page=41"},
    {name: "Page 42", url: "https://rickandmortyapi.com/api/character?page=42"}
  ]


  return (
    <div className="App">
      <header className="header">Rick and Morty Characters</header>
      <p className="separator"></p>
      <CharacterContainer pages={pages}/>
      <footer>This app was created using data from https://rickandmortyapi.com/api</footer>
    </div>
  );
}

export default App;
