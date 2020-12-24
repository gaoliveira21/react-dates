import React, { ReactElement } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { useCalendarProviderContext } from '@/context/calendar/context'

import css from './Header.sass'

export const Header: React.FC = (): ReactElement => {
  const { prevMonth, nextMonth } = useCalendarProviderContext()

  return (
    <header className={css.Header}>
      <button type="button" className={css.H__Buttons} onClick={prevMonth}>
        <MdChevronLeft />
      </button>
      <h1>Dec 23, 2020</h1>
      <button type="button" className={css.H__Buttons} onClick={nextMonth}>
        <MdChevronRight />
      </button>
    </header>
  )
}
