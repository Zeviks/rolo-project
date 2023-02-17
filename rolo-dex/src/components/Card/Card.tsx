import "./Card.css"
import Monster from "../models/monster"

const Card = ({name, email, id}: Monster) => {

  return (
    <div className="card flex flex-col bg-[#95dada] border border-slate-200 rounded-[5px] p-[25px] cursor-pointer hover:scale-[1.05]" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
    </div>
  )
}

export default Card
