import Star from "./Star"

export type StarRatingProps = {
  totalStars?: number
  selectedStars?: number
  onRate?: (rating: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, selectedStars = 0, onRate = () => void 0 }) => {
  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default StarRating
