import React, { ReactElement } from 'react'
import { isToday, isEqual } from 'date-fns'

import { useCalendarProviderContext } from '@/context/calendar/context'

import css from './Day.sass'

export const Day: React.FC<{ date: Date | null }> = ({ date }): ReactElement => {
  const { setSelectedDate, selectedDate } = useCalendarProviderContext()
  const today = isToday(date)

  return (
    date
      ? <li
        onClick={() => setSelectedDate(date)}
        className={`${css.Day} ${today && css['Day--today']} ${isEqual(date, selectedDate) && css['Day--selected']}`}
      >
        {date.getDate()}
      </li>
      : <li></li>
  )
}
