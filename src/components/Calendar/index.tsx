import React, { ReactElement } from 'react'

import { CalendarProvider } from '@/context/calendar'

import { Header } from './Header'
import { Body } from './Body'

import css from './Calendar.sass'

export const Calendar: React.FC = (): ReactElement => {
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
          <Body />
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
