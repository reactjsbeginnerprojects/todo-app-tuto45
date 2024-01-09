import { ListProp } from "./List"

export const Trash = ({
  list,
  setList,
  index,
}: {
  list: ListProp[]
  setList: (arg: ListProp[]) => void
  index: number
}) => {
  function handleDelete() {
    const newList = list.filter((element) => element.id !== index)

    setList(newList)
  }

  return (
    <button onClick={handleDelete}>
      <svg aria-hidden="true" fill="none" width={20} height={20} color="red">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
        />
      </svg>
    </button>
  )
}
