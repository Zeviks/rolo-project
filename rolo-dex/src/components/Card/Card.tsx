import "./Card.css"
import Monster from "../models/monster"

const Card = ({name, email, id}: Monster) => {

  return (
    <div className="card flex flex-col bg-emerald-300 hover:bg-slate-900 border border-slate-200 hover:border-emerald-300 rounded-[5px] p-[25px] cursor-pointer hover:scale-[1.05] hover:shadow-2xl hover:shadow-emerald-300 hover:text-emerald-300 transition-all" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2 className="text-3xl font-semibold py-2">{name}</h2>
            <p>{email}</p>
    </div>
  )
}

export default Card
