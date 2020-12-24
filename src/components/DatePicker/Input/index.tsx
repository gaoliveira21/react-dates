import React, { ReactElement } from 'react'
import { format } from 'date-fns'

import css from './Input.sass'

type IInput = {
  value: Date
}

export const Input: React.FC<IInput> = ({ value }): ReactElement => {
  return (
    <input
      type="text"
      readOnly
      value={format(value, "dd'-'MM'-'yyyy")}
      className={css.Input}
    />
  )
}
