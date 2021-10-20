
import WeekNames from './WeekNames';
import { format } from 'date-fns';
import Month from './Month';
import styles from './calendarBody.module.scss'

const CalendarBody = ({curentDate , setCurentDate}) => {
  return (
    <div className={styles.calendarBodyWrapper}>
      <h2 className={styles.calendarBodyHeading } >{format(curentDate, 'LLLL yyyy')}</h2>
      <WeekNames curentDate={curentDate} />
      <Month  curentDate={curentDate} setCurentDate={setCurentDate} />
    </div>
  );
}

export default CalendarBody;
