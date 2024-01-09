import { useState } from "react"

import { TodoContainer } from "./components/TodoContainer"
import { List } from "./components/List"
import { TextField } from "./components/TextField"
import "./App.css"

function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<string[]>([""])

  const handleSave = () => {
    const newList = [...list, input]

    setList(newList)

    setInput("")
  }

  return (
    <>
      <div className="card">
        <TodoContainer>
          <List list={list} />
          <TextField state={input} setState={setInput} />

          <button onClick={handleSave}>Save</button>
        </TodoContainer>
      </div>
    </>
  )
}

export default App
