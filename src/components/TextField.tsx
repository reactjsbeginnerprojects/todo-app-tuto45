export const TextField = ({
  state,
  setState,
}: {
  state: string
  setState: (state: string) => void
}) => {
  return <input value={state} onChange={(e) => setState(e.target.value)} />
}
