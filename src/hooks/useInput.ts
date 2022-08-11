import { ComponentPropsWithoutRef, useCallback, useState } from "react"

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback<Exclude<ComponentPropsWithoutRef<'input'>['onChange'], undefined>>((e) => {
    setValue(e.target.value)
  }, [setValue])

  return [
    { value, onChange },
    () => setValue(initialValue)
  ] as const
}
