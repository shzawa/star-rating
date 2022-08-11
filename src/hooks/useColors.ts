import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

type ColorType = {
  id: string
  title: string
  color: string
  rating: number
}

export const useColors = (initialValue: ColorType[]) => {
  const [colors, setColors] = useState(initialValue)

  const onRemoveColor = useCallback((id: ColorType['id']) => {
    setColors(colors => colors.filter(color => color.id !== id))
  }, [setColors])

  const onRateColor = useCallback((id: ColorType['id'], ratio: ColorType['rating']) => {
    setColors(colors => colors.map(color => color.id === id ? { ...color, rating: ratio } : color))
  }, [setColors])

  const onNewColor = useCallback((title: string, color: string) => {
    setColors(colors => [...colors, { id: v4(), rating: 0, title, color }])
  }, [setColors])

  return [{ colors, onRemoveColor, onRateColor, onNewColor }, () => setColors(initialValue)] as const
}
