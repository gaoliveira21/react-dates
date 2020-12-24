import React, { ReactElement } from 'react'
import { startOfDay, subDays } from 'date-fns'

import { useCalendarProviderContext } from '@/context/calendar/context'

import css from './Footer.sass'

export const Footer: React.FC = (): ReactElement => {
  const { setSelectedDate } = useCalendarProviderContext()

  return (
    <footer className={css.Footer}>
      <div className={css.F__Actions}>
        <button
          type="button"
          className={`${css.F__Button} ${css.A__Action}`}
          onClick={() => setSelectedDate(startOfDay(new Date()))}
        >
          Today
        </button>
        <button
          type="button"
          className={`${css.F__Button} ${css.A__Action}`}
          onClick={() => setSelectedDate(subDays(startOfDay(new Date()), 1))}
        >
          Yesterday
        </button>
      </div>
      <button type="button" className={`${css.F__Button} ${css.F__Confirm}`}>OK</button>
    </footer>
  )
}
