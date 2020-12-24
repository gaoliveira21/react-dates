import React, { ReactElement } from 'react'
import { CalendarProvider } from '@/context/calendar'

import { Header } from './Header'
import { Body } from './Body'

import css from './Calendar.sass'

type ICalendar = {
  initialDate?: Date
  onChangeDate?: (date: Date) => void
}

export const Calendar: React.FC<ICalendar> = ({ initialDate, onChangeDate }): ReactElement => {
  return (
    <CalendarProvider initialDate={initialDate} onChangeDate={onChangeDate}>
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
          <Body />
        </main>
      </div>
    </CalendarProvider>
  )
}
