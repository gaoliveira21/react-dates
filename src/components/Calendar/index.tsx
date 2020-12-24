import React, { ReactElement } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { eachDayOfInterval, lastDayOfMonth, setDate } from 'date-fns'

import css from './Calendar.sass'

export const Calendar: React.FC = (): ReactElement => {
  const currentDate = new Date(2020, 10, 1)
  const daysInMonth = eachDayOfInterval({
    start: setDate(currentDate, 1),
    end: lastDayOfMonth(currentDate)
  })

  const prevDaysCount: Array<null> = Array(daysInMonth[0].getDay()).fill(null)

  const calendarDays: Array<Date | null> = [...prevDaysCount, ...daysInMonth]

  return (
    <div className={css.Calendar}>
      <header className={css.C__Header}>
        <button type="button" className={css.H__Buttons}>
          <MdChevronLeft />
        </button>
        <h1>Dec 23, 2020</h1>
        <button type="button" className={css.H__Buttons}>
          <MdChevronRight />
        </button>
      </header>
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
          {calendarDays.map(day => (
            day ? <li key={day.getDate()} className={css.MD__Day}>{day.getDate()}</li> : <li></li>
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
  )
}
