export const TextField = ({
  state,
  setState,
}: {
  state: string
  setState: (state: string) => void
}) => {
  return (
    <input
      value={state}
      onChange={(e) => setState(e.target.value)}
      className="TextField"
      placeholder="What do you need to do..."
    />
  )
}
