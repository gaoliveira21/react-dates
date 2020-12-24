import React, { ReactElement, useState } from 'react'

import { Calendar } from '@/components/Calendar'
import { Footer } from './Footer'
import { Input } from './Input'

import css from './DatePicker.sass'

export const DatePicker: React.FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(new Date())

  return (
    <div className={css.DatePicker}>
      <Input value={date} />
      <Calendar
        currentDate={date}
        onChangeDate={(date) => setDate(date)}
      />
      <Footer />
    </div>
  )
}
