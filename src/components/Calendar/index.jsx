import { useState } from "react";

import SelectedDate from "components/Calendar/SelectedDate";
import CalendarBody from "./CalendarBody";
import styles from './calendar.module.scss'


const Calendar = () => {
  const [curentDate, setCurentDate] = useState(new Date());






  return (
    <article className={styles.calendarWrapper}>
      <SelectedDate curentDate={curentDate} />
      <CalendarBody curentDate={curentDate} setCurentDate={setCurentDate} />
    </article>
  );
};

export default Calendar;
