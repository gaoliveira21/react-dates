import React, { ReactElement, useState } from 'react'
import { addMonths, subMonths, setDate, startOfDay } from 'date-fns'

import { CalendarProviderContext } from './context'

type ICalendarProvider = {
  currentDate?: Date
  onChangeDate?: (date: Date) => void
}

export const CalendarProvider: React.FC<ICalendarProvider> = ({ children, currentDate, onChangeDate }): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(startOfDay(currentDate) || null)
  const [currentMonth, setCurrentMonth] = useState(setDate(new Date(), 1))

  const nextMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = (): void => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const changeDate = (date: Date) => {
    setSelectedDate(date)
    onChangeDate(date)
  }

  return (
    <CalendarProviderContext.Provider
      value={{
        selectedDate,
        currentMonth,
        nextMonth,
        prevMonth,
        changeDate
      }}
    >
      {children}
    </CalendarProviderContext.Provider>
  )
}
