import Color, { ColorProps } from './Color'

// TODO: typeディレクトリに移管
type ColorType = {
  id: string
  title: string
  color: string
  rating: number
}

export type ColorListProps = {
  colors?: ColorType[]
  onRemoveColor: ColorProps['onRemove']
  onRateColor: ColorProps['onRate']
}

const ColorList: React.FC<ColorListProps> = ({ colors = [], onRemoveColor = (id) => void 0, onRateColor = (id, ratio) => void 0 }) => {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>

  return (
    <div>
      {colors.map((color) => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)}
    </div>
  )
}

export default ColorList
