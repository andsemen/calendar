import { addDays, format ,startOfWeek} from 'date-fns';
import styles from './weekNames.module.scss'

const WeekNames = ({ curentDate }) => {


  return (
    <div className ={styles.weekNamesContainer }>
      {new Array(7).fill(null).map((_, i) => addDays(startOfWeek(curentDate), i)).map((day) => { return <div className ={styles.weekNames} >{format(day, 'EEEEE')}</div> })}
    </div>
  );
}

export default WeekNames;
