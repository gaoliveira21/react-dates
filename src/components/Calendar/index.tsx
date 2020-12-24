import React, { ReactElement } from 'react'

import { CalendarProvider } from '@/context/calendar'

import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'

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
        <Footer />
      </div>
    </CalendarProvider>
  )
}
