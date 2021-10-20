import { format } from 'date-fns';
import styles from './selectedDate.module.scss'

const SelectedDate = ({curentDate}) => {
  return (
    <div className={styles.selectedDateWrapper}>
      <p className={styles.selectedWeekName}>{format(curentDate, 'EEEE')}</p>
      <h1 className={styles.selectedDate}>{format(curentDate, 'd')}</h1>
      
    </div>
  );
}

export default SelectedDate;
