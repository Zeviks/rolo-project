import { useState, useEffect } from "react"

interface userState {
    name: string,
    id: number,
}

const App = ():JSX.Element => {

    const API_URL = "https://jsonplaceholder.typicode.com/users";

    
    let [monsters, setMonsters] = useState<userState[]>([]) 
    let [searchString, setSearchString] = useState("");
    
    const filteredMonsters = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchString));
     
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchString = e.target.value.toLocaleLowerCase();
        setSearchString(searchString);
    }

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((users) => setMonsters(users))
    }, []) // Add empty dependency array here, this tells react to only run this once.
  
    return (
        <div className="">
          
            <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="search" 
            placeholder="search Monsters" 
            onChange={(e) => onSearchChange(e)}
            />
            {filteredMonsters.map(monster => { return <div key={monster.id}>{monster.name}</div>})}
        </div>
    )
}

export default App
