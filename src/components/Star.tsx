import { FaStar } from "react-icons/fa";

type StarProps = {
  selected?: boolean
  onSelect?: () => void
}

const Star: React.FC<StarProps> = (props) => {
  const { selected = false, onSelect = () => void 0 } = props

  return (
    <FaStar color={ selected ? 'red' : 'grey' } onClick={onSelect} />
  )
}

export default Star
