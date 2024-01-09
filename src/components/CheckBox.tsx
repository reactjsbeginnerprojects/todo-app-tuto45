export const CheckBox = ({
  isComplete,
  onChange,
}: {
  isComplete: boolean
  onChange: (arg: boolean) => void
}) => {
  return (
    <input
      type="checkbox"
      checked={isComplete}
      onChange={(e) => onChange(e.target.checked)}
    />
  )
}
