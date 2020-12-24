import React, { ReactElement } from 'react'

import { Calendar } from './components/Calendar'

import css from './App.sass'

export const App: React.FC = (): ReactElement => {
  return (
    <div className={css.App}>
      <Calendar />
    </div>
  )
}
