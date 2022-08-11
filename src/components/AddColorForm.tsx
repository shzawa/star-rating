import { useContext, ComponentPropsWithoutRef } from "react"
import { handleEventColorContext } from "../context/ColorContext"
import { useInput } from "../hooks/useInput"

const AddColorForm: React.FC = () => {
  const dispatch = useContext(handleEventColorContext)
  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#000000')

  const handleSubmit: ComponentPropsWithoutRef<'form'>['onSubmit'] = (e) => {
    e.preventDefault()
    dispatch({ type: 'add', payload: { title: titleProps.value, color: colorProps.value } })
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

export default AddColorForm
