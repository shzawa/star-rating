import React from "react"
import { FaTrash } from "react-icons/fa"
import StarRating, { StarRatingProps } from "./StarRating"

export type ColorProps = {
  id: string
  title: string
  color: string
  rating: number
  onRemove: (id: string) => void
  onRate: (id: string, rating: number) => void
}

const Color: React.FC<ColorProps> = ({ id, title, color, rating, onRemove, onRate }) => {
  const handleStarRatingClick: StarRatingProps['onRate'] = (rating) => {
    onRate(id, rating)
  }

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => { onRemove(id) }}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={handleStarRatingClick} />
    </section>
  )
}

export default React.memo(Color)
