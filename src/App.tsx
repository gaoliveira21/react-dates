import React, { ReactElement } from 'react'

import { DatePicker } from './components/DatePicker'
// import { Calendar } from './components/Calendar'

import css from './App.sass'

export const App: React.FC = (): ReactElement => {
  return (
    <div className={css.App}>
      <div className={css.A__Wrapper}>
        <h2>Datepicker</h2>
        <DatePicker />
      </div>
      {/* <div className={css.A__Wrapper}>
        <h2>Calendar</h2>
        <Calendar />
      </div> */}
    </div>
  )
}
