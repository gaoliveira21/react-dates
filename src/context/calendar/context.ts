import { createContext, useContext } from 'react'

export type ICalendarProviderData = {
  selectedDate: Date | null,
  currentMonth: Date,
  nextMonth: () => void,
  prevMonth: () => void,
  setSelectedDate: (date: Date) => void
}

const mockContext: ICalendarProviderData = {
  selectedDate: null,
  currentMonth: new Date(),
  nextMonth: () => { },
  prevMonth: () => { },
  setSelectedDate: () => { }
}

export const CalendarProviderContext = createContext<ICalendarProviderData>(mockContext)

export const useCalendarProviderContext = () => useContext(CalendarProviderContext)
