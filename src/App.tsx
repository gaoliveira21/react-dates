import React, { ReactElement } from 'react'

import { Calendar } from './components/Calendar'

export const App: React.FC = (): ReactElement => {
  return (
    <div>
      <h1>React Dates</h1>
      <Calendar />
    </div>
  )
}
