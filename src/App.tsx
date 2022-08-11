import './App.css';
import ColorList, { useColors } from './components/ColorList';
import colorData from './data/color.json'


const App = () => {
  const [colors, { removeColor, rateColor }] = useColors(colorData)

  return (
    <ColorList
      colors={colors}
      onRemoveColor={removeColor}
      onRateColor={rateColor}
    />
  )
}

export default App;
