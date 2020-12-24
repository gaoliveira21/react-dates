import React, { ReactElement, useState } from 'react'
import { addMonths, subMonths } from 'date-fns'

import { CalendarProviderContext } from './context'

export const CalendarProvider: React.FC = ({ children }): ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const currentDate = new Date()

  const nextMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = (): void => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  return (
    <CalendarProviderContext.Provider
      value={{
        selectedDate,
        currentDate,
        currentMonth,
        nextMonth,
        prevMonth,
        setSelectedDate
      }}
    >
      {children}
    </CalendarProviderContext.Provider>
  )
}
