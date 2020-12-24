import React, { ReactElement } from 'react'

import css from './Footer.sass'

export const Footer: React.FC = (): ReactElement => {
  return (
    <footer className={css.Footer}>
      <div className={css.F__Actions}>
        <button
          type="button"
          className={`${css.F__Button} ${css.A__Action}`}
        >
          Today
        </button>
        <button
          type="button"
          className={`${css.F__Button} ${css.A__Action}`}
        >
          Yesterday
        </button>
      </div>
      <button type="button" className={`${css.F__Button} ${css.F__Confirm}`}>OK</button>
    </footer>
  )
}
