import React, { useContext } from "react"
import { FaTrash } from "react-icons/fa"
import { handleEventColorContext } from "../context/ColorContext"
import { ColorType } from "../types/color"
import StarRating, { StarRatingProps } from "./StarRating"

const Color: React.FC<ColorType> = ({ id, title, color, rating }) => {
  const dispatch = useContext(handleEventColorContext)

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

export default React.memo(Color)
