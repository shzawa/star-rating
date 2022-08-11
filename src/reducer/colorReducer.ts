import { v4 } from "uuid"
import { ColorType } from "../types/color"

type ColorState = { colors: ColorType[] }

export type ColorActionProp = {
  type: 'add'
  payload: Pick<ColorType, 'title' | 'color'>
} | {
  type: 'remove'
  payload: Pick<ColorType, 'id'>
} | {
  type: 'rate'
  payload: Pick<ColorType, 'id' | 'rating'>
}

export const colorReducer = (state: ColorState , action: ColorActionProp): ColorState => {
  const { colors } = state
  const { type, payload } = action

  switch(type) {
    case 'add': {
      return { colors: [...colors, { id: v4(), rating: 0, title: payload.title, color: payload.color }] }
    }
    case 'remove': {
      return { colors: colors.filter(color => color.id !== payload.id) }
    }
    case 'rate': {
      return { colors: colors.map(color => color.id === payload.id ? { ...color, rating: payload.rating } : color) }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}
