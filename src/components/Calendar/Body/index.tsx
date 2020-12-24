import React, { ReactElement } from 'react'
import { eachDayOfInterval, lastDayOfMonth, setDate } from 'date-fns'

import { useCalendarProviderContext } from '@/context/calendar/context'
import { Day } from '@/components/Day'

import css from './Body.sass'

export const Body: React.FC = (): ReactElement => {
  const { currentMonth } = useCalendarProviderContext()
  const daysInMonth = eachDayOfInterval({
    start: setDate(currentMonth, 1),
    end: lastDayOfMonth(currentMonth)
  })

  const prevDays: Array<null> = Array(daysInMonth[0].getDay()).fill(null)

  const calendarDays: Array<Date | null> = [...prevDays, ...daysInMonth]

  return (
    <ul className={css.MonthDays}>
      {calendarDays.map(date => (
        <Day key={Math.random() * 10} date={date} />
      ))}
    </ul>
  )
}
