import { memo } from "react"
import { FaTrash } from "react-icons/fa"
import { useColorsDispatcher } from "../context/ColorContext"
import { ColorType } from "../types/color"
import StarRating, { StarRatingProps } from "./StarRating"

type ColorProps = ColorType

const Color: React.FC<ColorProps> = (props) => {
  const { id, title, color, rating } = props
  const dispatch = useColorsDispatcher()

  const handleClickTrashButton: React.DOMAttributes<HTMLButtonElement>['onClick'] = () => {
    dispatch({ type: 'remove', payload: { id } })
  }
  const handleClickStarRating: StarRatingProps['onRate'] = (newRating) => {
    if (newRating === rating) return
    dispatch({ type: 'rate', payload: { id, rating: newRating } })
  }

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={handleClickTrashButton}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={handleClickStarRating} />
    </section>
  )
}

export default memo(Color)
