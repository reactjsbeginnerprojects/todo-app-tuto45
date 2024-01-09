export const List = ({ list }: { list: string[] }) => {
  return list.map((el, index) => <div key={index}>{el}</div>)
}
