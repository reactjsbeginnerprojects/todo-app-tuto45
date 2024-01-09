import { CheckBox } from "./CheckBox"
import { Trash } from "./Trash"

export type ListProp = {
  content: string
  id: number
  isComplete: boolean
}

export const List = ({
  list,
  setList,
}: {
  list: ListProp[]
  setList: (arg: ListProp[]) => void
}) => {
  function handleChange(currentItem: ListProp) {
    const newList = {
      id: currentItem.id,
      content: currentItem.content,
      isComplete: !currentItem.isComplete,
    }

    const alteredList = list.map((el) => {
      if (el.id === currentItem.id) {
        return newList
      }

      return el
    })

    setList(alteredList)
  }

  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>
          {el.content}
          <CheckBox
            isComplete={el.isComplete}
            onChange={() => handleChange(el)}
          />
          <Trash setList={setList} list={list} index={el.id} />
        </div>
      ))}
    </div>
  )
}
