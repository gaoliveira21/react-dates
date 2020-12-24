import React, { ReactElement } from 'react'
import { eachDayOfInterval, lastDayOfMonth, setDate } from 'date-fns'

import { CalendarProvider } from '@/context/calendar'
import { useCalendarProviderContext } from '@/context/calendar/context'

import { Day } from '../Day'
import { Header } from './Header'

import css from './Calendar.sass'

export const Calendar: React.FC = (): ReactElement => {
  const { currentMonth } = useCalendarProviderContext()
  const daysInMonth = eachDayOfInterval({
    start: setDate(currentMonth, 1),
    end: lastDayOfMonth(currentMonth)
  })

  const prevDays: Array<null> = Array(daysInMonth[0].getDay()).fill(null)

  const calendarDays: Array<Date | null> = [...prevDays, ...daysInMonth]

  return (
    <CalendarProvider>
      <div className={css.Calendar}>
        <Header />
        <main>
          <header>
            <ul className={css.C__WeekDays}>
              <li>Su</li>
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
            </ul>
          </header>
          <ul className={css.C__MonthDays}>
            {calendarDays.map(date => (
              <Day key={Math.random() * 10} date={date} />
            ))}
          </ul>
        </main>
        <footer className={css.C__Footer}>
          <div className={css.F__Actions}>
            <button type="button" className={`${css.F__Button} ${css.A__Action}`}>Today</button>
            <button type="button" className={`${css.F__Button} ${css.A__Action}`}>Yesterday</button>
          </div>
          <button type="button" className={`${css.F__Button} ${css.F__Confirm}`}>OK</button>
        </footer>
      </div>
    </CalendarProvider>
  )
}
