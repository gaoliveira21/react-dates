import React, { ReactElement } from 'react'

import { Calendar } from '@/components/Calendar'
import { Footer } from './Footer'
import { Input } from './Input'

import css from './DatePicker.sass'

export const DatePicker: React.FC = (): ReactElement => {
  return (
    <div className={css.DatePicker}>
      <Input />
      <Calendar
        initialDate={new Date()}
        onChangeDate={(date) => console.log(date)}
      />
      <Footer />
    </div>
  )
}
