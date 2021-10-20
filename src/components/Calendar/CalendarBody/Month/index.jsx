import { startOfMonth, getWeeksInMonth, addDays } from 'date-fns';
import Week from './Week';
import styles from './month.module.scss'

const Month = ({ curentDate, setCurentDate }) => {

  const weekAmount = getWeeksInMonth(curentDate)

  const startMonth = startOfMonth(curentDate)


  return (
    <div className={styles.monthWrapper}>

      {new Array(6).fill(null).map((_, i) => {
        return <Week curentDate={curentDate} setCurentDate={setCurentDate} startingDay={addDays(startMonth, 7 * i)} />
      })}
    </div>
  );
}

export default Month;
