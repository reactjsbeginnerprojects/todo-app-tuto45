import { FormEvent, useState } from "react"

import { TodoContainer } from "./components/TodoContainer"
import { List, ListProp } from "./components/List"
import { TextField } from "./components/TextField"
import "./App.css"

function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<ListProp[]>([])

  const handleSave = (e: FormEvent) => {
    e.preventDefault()
    // If the input is an empty string, do not do anything
    // This avoid having an empty item on the list
    if (!input) return

    const newList = [
      ...list,
      { content: input, id: Math.random(), isComplete: false },
    ]

    console.log("here")

    setList(newList)

    setInput("")
  }

  return (
    <div className="Card">
      <TodoContainer>
        <List list={list} setList={setList} />

        <form onSubmit={handleSave}>
          <div className="Card__Bottom">
            <TextField state={input} setState={setInput} />

            <button type="submit" className="Button">
              Save
            </button>
          </div>
        </form>
      </TodoContainer>
    </div>
  )
}

export default App
