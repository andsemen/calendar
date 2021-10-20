import { startOfWeek, addDays } from 'date-fns';
import cx from 'classnames'
import Day from './Day';
import styles from './week.module.scss'

const Week = ({ startingDay, setCurentDate, curentDate }) => {
  const start = startOfWeek(startingDay)
 

  return (
    <div className={styles.weekWrapper}>
      {new Array(7).fill(null).map((_, index) => {
        return <Day  curentDate={curentDate} day={addDays(start, index)} setCurentDate={setCurentDate} />
      })}
    </div>
  );
}

export default Week;
