import { useState, useRef } from "react"

const App = ():JSX.Element => {
let [name, setName] = useState("Nathan");

  return (
    <div className="">
        <h1>Hello my name is {name}.</h1>
        <input type="text" className="mt-2" />
        <button className="pl-2" onClick={() => {
            setName("NewName");
        }}>Change Name</button>
    </div>
  )
}

export default App