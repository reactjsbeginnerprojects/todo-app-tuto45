import { useState } from "react"

import { TodoContainer } from "./components/TodoContainer"
import { List, ListProp } from "./components/List"
import { TextField } from "./components/TextField"
import "./App.css"

function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<ListProp[]>([])

  const handleSave = () => {
    const newList = [...list, { content: input, id: Math.random() }]

    setList(newList)

    setInput("")
  }

  return (
    <div className="card">
      <TodoContainer>
        <List list={list} setList={setList} />
        <TextField state={input} setState={setInput} />

        <button onClick={handleSave}>Save</button>
      </TodoContainer>
    </div>
  )
}

export default App
