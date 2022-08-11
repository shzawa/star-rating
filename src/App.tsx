import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import colorData from './data/color.json'
import { useColors } from './hooks/useColors';

const App = () => {
  const [{onNewColor, ...colorsProps}] = useColors(colorData)

  return (
    <>
      <AddColorForm
        onNewColor={onNewColor}
      />
      <ColorList
        {...colorsProps}
      />
    </>
  )
}

export default App;
