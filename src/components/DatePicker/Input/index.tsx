import React, { ReactElement } from 'react'
import { format } from 'date-fns'

import { useCalendarProviderContext } from '@/context/calendar/context'

import css from './Input.sass'

export const Input: React.FC = (): ReactElement => {
  const { selectedDate } = useCalendarProviderContext()

  return (
    <input
      type="text"
      readOnly
      value={selectedDate ? format(selectedDate, "dd'-'MM'-'yyyy") : ''}
      className={css.Input}
    />
  )
}
