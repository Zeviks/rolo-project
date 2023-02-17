import { useState, useEffect } from "react"
import CardList from "./components/CardList"
import SearchBox from "./components/SearchBox";
import Monster from "./components/models/monster";


const App = ():JSX.Element => {

    const API_URL = "https://jsonplaceholder.typicode.com/users";
    let [monsters, setMonsters] = useState<Monster[]>([]) 
    let [searchString, setSearchString] = useState("");
    
    //Filtering Monsters
    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchString));
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const searchString = e.target.value.toLocaleLowerCase();
        setSearchString(searchString);
    }

  //Fetching Monsters
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((users) => setMonsters(users))
    }, []) // Add empty dependency array here, this tells react to only run this once.
  
    return (
        <div className="">
          <div className="m-4">
            <SearchBox onSearchChange={onSearchChange} placeholder='Search Monsters'/>
          </div>
            <CardList filteredMonsters={filteredMonsters}/>
        </div>
    ) 
}

export default App
