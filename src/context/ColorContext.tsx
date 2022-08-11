import { createContext, useReducer } from 'react'
import { ColorActionProp, colorReducer } from '../reducer/colorReducer'
import { ColorType } from '../types/color'
import colors from '../data/color.json'

// 色情報のコンテキスト
type ColorContextProps = { colors: ColorType[] }
export const colorContext = createContext<ColorContextProps>({ colors: [] })

// 色情報操作のコンテキスト
type HandleEventColorContextProps = React.Dispatch<ColorActionProp>
export const handleEventColorContext = createContext<HandleEventColorContextProps>(() => void 0)

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, { colors })

  return (
    <colorContext.Provider value={state}>
      カラー層
      <handleEventColorContext.Provider value={dispatch}>
        カラーイベント層
        {children}
      </handleEventColorContext.Provider>
    </colorContext.Provider>
  )
}
