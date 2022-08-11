import { ColorType } from '../types/color'
import Color, { ColorProps } from './Color'

export type ColorListProps = {
  colors?: ColorType[]
  onRemoveColor: ColorProps['onRemove']
  onRateColor: ColorProps['onRate']
}

const ColorList: React.FC<ColorListProps> = ({ colors = [], onRemoveColor = () => void 0, onRateColor = () => void 0 }) => {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>

  return (
    <div>
      {colors.map((color) => <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />)}
    </div>
  )
}

export default ColorList
