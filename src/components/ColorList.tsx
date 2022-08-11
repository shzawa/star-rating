import { useContext } from 'react'
import { colorContext } from '../context/ColorContext'
import Color from './Color'

const ColorList: React.FC = () => {
  const { colors } = useContext(colorContext)

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>

  return (
    <div>
      {colors.map((color) => <Color key={color.id} {...color} />)}
    </div>
  )
}

export default ColorList
