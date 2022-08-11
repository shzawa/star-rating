import { useState } from 'react'
import Color, { ColorProps } from './Color'

type ColorType = {
  id: string
  title: string
  color: string
  rating: number
}

export const useColors = (colorData: ColorType[]) => {
  const [colors, setColors] = useState(colorData)
  const removeColor: ColorProps['onRemove'] = (id) => {
    setColors(colors => colors.filter(color => color.id !== id))
  }
  const rateColor: ColorProps['onRate'] = (id, ratio) => {
    setColors(colors => colors.map(color => color.id === id ? { ...color, ratio } : color))
  }

  return [colors, { removeColor, rateColor }] as const
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
