import { Trash } from "./Trash"

export type ListProp = {
  content: string
  id: number
}

export const List = ({
  list,
  setList,
}: {
  list: ListProp[]
  setList: (arg: ListProp[]) => void
}) => {
  return (
    <div>
      {list.map((el) => (
        <div key={el.id}>
          {el.content}
          <Trash setList={setList} list={list} index={el.id} />
        </div>
      ))}
    </div>
  )
}
