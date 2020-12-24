import React, { ReactElement } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import css from './Calendar.sass'

export const Calendar: React.FC = (): ReactElement => {
  return (
    <div className={css.Calendar}>
      <header className={css.C__Header}>
        <button type="button" className={css.H__Buttons}>
          <MdChevronLeft />
        </button>
        <h1>Dec 23, 2020</h1>
        <button type="button" className={css.H__Buttons}>
          <MdChevronRight />
        </button>
      </header>
      <main>
        <header>
          <ul className={css.C__WeekDays}>
            <li>Su</li>
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
          </ul>
        </header>
        <ul className={css.C__MonthDays}>
          <li></li>
          <li></li>
          <li className={css.MD__Day}>1</li>
          <li className={css.MD__Day}>2</li>
          <li className={css.MD__Day}>3</li>
          <li className={css.MD__Day}>4</li>
          <li className={css.MD__Day}>5</li>
          <li className={css.MD__Day}>6</li>
          <li className={css.MD__Day}>7</li>
          <li className={css.MD__Day}>8</li>
          <li className={css.MD__Day}>9</li>
          <li className={css.MD__Day}>10</li>
          <li className={css.MD__Day}>11</li>
          <li className={css.MD__Day}>12</li>
          <li className={css.MD__Day}>13</li>
          <li className={css.MD__Day}>14</li>
          <li className={css.MD__Day}>15</li>
          <li className={css.MD__Day}>16</li>
          <li className={css.MD__Day}>17</li>
          <li className={css.MD__Day}>18</li>
          <li className={css.MD__Day}>19</li>
          <li className={css.MD__Day}>20</li>
          <li className={css.MD__Day}>21</li>
          <li className={`${css.MD__Day} ${css['MD__Day--selected']}`}>22</li>
          <li className={`${css.MD__Day} ${css['MD__Day--today']}`}>23</li>
          <li className={css.MD__Day}>24</li>
          <li className={css.MD__Day}>25</li>
          <li className={css.MD__Day}>26</li>
          <li className={css.MD__Day}>27</li>
          <li className={css.MD__Day}>28</li>
          <li className={css.MD__Day}>29</li>
          <li className={css.MD__Day}>30</li>
          <li className={css.MD__Day}>31</li>
        </ul>
      </main>
      <footer className={css.C__Footer}>
        <div className={css.F__Actions}>
          <button type="button" className={`${css.F__Button} ${css.A__Action}`}>Today</button>
          <button type="button" className={`${css.F__Button} ${css.A__Action}`}>Yesterday</button>
        </div>
        <button type="button" className={`${css.F__Button} ${css.F__Confirm}`}>OK</button>
      </footer>
    </div>
  )
}
