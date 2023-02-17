import Monster from "./models/monster"
import Card from "./Card/Card";

interface CardMonsters {
    filteredMonsters: Monster[];
}

const MonsterIMG = 'https://robohash.org/1?set=set2&size=180x180';

const CardList = ( { filteredMonsters }: CardMonsters) => {
  return (
    <div className="w-[85vw] mx-auto grid grid-cols-4 gap-[20px]"> 
        {filteredMonsters.map( monster => 
          { return <Card key={monster.id} name={monster.name} email={monster.email} id={monster.id}/> }
          )}
    </div>
  )
}

export default CardList
