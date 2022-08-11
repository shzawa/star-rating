import React from "react"
import { ComponentPropsWithoutRef } from "react"
import { useInput } from "../hooks/useInput"

type AddColorFormProps = {
  onNewColor?: (title: string, color: string) => void
}

const AddColorForm: React.FC<AddColorFormProps> = ({ onNewColor = () => void 0 }) => {
  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')

  const handleSubmit: ComponentPropsWithoutRef<'form'>['onSubmit'] = (e) => {
    e.preventDefault()
    onNewColor(titleProps.value, colorProps.value)
    resetTitle()
    resetColor()
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...titleProps} placeholder="color title..." required />
      <input type="color" {...colorProps} required />
      <button>Add</button>
    </form>
  )
}

export default React.memo(AddColorForm)
