import { createContext, useContext } from 'react'

export type ICalendarProviderData = {
  selectedDate: Date | null,
  currentDate: Date,
  currentMonth: Date,
  nextMonth: () => void,
  prevMonth: () => void,
  setSelectedDate: (date: Date) => void
}

const mockContext: ICalendarProviderData = {
  selectedDate: null,
  currentDate: new Date(),
  currentMonth: new Date(),
  nextMonth: () => console.log('next'),
  prevMonth: () => { },
  setSelectedDate: () => {}
}

export const CalendarProviderContext = createContext<ICalendarProviderData>(mockContext)

export const useCalendarProviderContext = () => useContext(CalendarProviderContext)
