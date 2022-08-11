import { ComponentProps, useCallback, useState } from "react"

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback<Exclude<ComponentProps<'input'>['onChange'], undefined>>((e) => {
    setValue(e.target.value)
  }, [setValue])

  const resetValue = useCallback(() => setValue(initialValue), [initialValue])

  return [
    { value, onChange },
    resetValue
  ] as const
}
