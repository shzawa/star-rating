import { FaStar } from "react-icons/fa";

type StarProps = {
  selected?: boolean
  onSelect?: () => void
}

const Star: React.FC<StarProps> = ({ selected = false, onSelect = () => void 0 }) => (
  <FaStar color={ selected ? 'red' : 'grey' } onClick={onSelect} />
)

export default Star
