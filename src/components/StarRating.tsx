import Star from "./Star"

export type StarRatingProps = {
  totalStars?: number
  selectedStars?: number
  onRate: (rating: number) => void
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, selectedStars = 0, onRate = (rating) => void 0 }) => {
  const handleSelect = (starIndex: number) => { onRate(starIndex + 1) }

  return (
    <>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => { handleSelect(i) }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default StarRating
