import React, { ReactElement } from 'react'
import { isToday } from 'date-fns'

import css from './Day.sass'

export const Day: React.FC<{ date: Date | null }> = ({ date }): ReactElement => {
  const today = isToday(date)

  console.log(today)

  return (
    date ? <li className={`${css.Day} ${today && css['Day--today']}`}>{date.getDate()}</li> : <li></li>
  )
}
