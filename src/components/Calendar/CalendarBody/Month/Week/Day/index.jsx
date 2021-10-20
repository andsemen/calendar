import { format, isSameMonth,isSameDay } from 'date-fns';
import cx from 'classnames'
import styles from './day.module.scss'

const Day = ({ day, setCurentDate, curentDate }) => {

  const selectDayhandler = () => {
    setCurentDate(day)

  }

  const selectedDay = {
    [styles.selectedDay] : isSameDay(day,curentDate)
  }
  const hideDays = {
    [styles.hideDays]: !isSameMonth(day, new Date())
  }

  return (
    <>
      {<div onClick={selectDayhandler} className={cx(styles.day, hideDays,selectedDay)}>{format(day, 'd')}</div>}
    </>
  );
}

export default Day;
