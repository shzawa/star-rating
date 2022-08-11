import { createContext, useContext, useReducer } from 'react'
import { ColorActionProp, colorReducer } from '../reducer/colorReducer'
import { ColorType } from '../types/color'
import colors from '../data/color.json'

// 色情報のコンテキスト
const ColorsStateContext = createContext<{ colors: ColorType[] }>({ colors: [] })
export const useColorsState = () => useContext(ColorsStateContext)

// 色情報操作のコンテキスト
const ColorsDispatcherContext = createContext<React.Dispatch<ColorActionProp>>(() => void 0)
export const useColorsDispatcher = () => useContext(ColorsDispatcherContext)

export const ColorsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, { colors })

  return (
    <ColorsStateContext.Provider value={state}>
      カラー層
      <ColorsDispatcherContext.Provider value={dispatch}>
        カラーイベント層
        {children}
      </ColorsDispatcherContext.Provider>
    </ColorsStateContext.Provider>
  )
}
