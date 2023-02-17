import Monster from "./models/monster"

interface CardMonsters {
    filteredMonsters: Monster[];
}

const CardList = ( { filteredMonsters } : CardMonsters) => {
  return (
    <ul className="text-amber-400 text-4xl ml-2">
        {filteredMonsters.map(monster => { return <li className="text-2xl font-semibold text-emerald-300 p-2" key={monster.id}>{monster.name}</li>})}
    </ul>
  )
}

export default CardList