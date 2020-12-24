import React, { ReactElement } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import css from './Calendar.sass'

export const Calendar: React.FC = (): ReactElement => {
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
        <ul className={css.C__WeekDays}>
          <li>Su</li>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
        </ul>
      </main>
    </div>
  )
}
