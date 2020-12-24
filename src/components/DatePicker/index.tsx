import React, { ReactElement } from 'react'

import { Calendar } from '@/components/Calendar'
import { Footer } from './Footer'

import css from './DatePicker.sass'

export const DatePicker: React.FC = (): ReactElement => {
  return (
    <div className={css.DatePicker}>
      <Calendar />
      <Footer />
    </div>
  )
}
