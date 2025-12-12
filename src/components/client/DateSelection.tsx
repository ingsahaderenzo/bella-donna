import { useState } from "react";
import style from "../../styles/client/DateSelection.module.css";

type DateSelectionProps = {
    onDateSelect: (date: Date) => void;
    selectedDate?: Date;
};

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

export function DateSelection({
    onDateSelect,
    selectedDate,
}: DateSelectionProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const isCurrentMonth = () => {
        const today = new Date();
        return year === today.getFullYear() && month === today.getMonth();
    };

    const goToNextMonth = () => {
        const newDate = new Date(year, month + 1, 1);
        const today = new Date();
        const maxMonths = 3; // Permitir reservar hasta 6 meses adelante

        const monthDiff =
            (newDate.getFullYear() - today.getFullYear()) * 12 +
            (newDate.getMonth() - today.getMonth());

        if (monthDiff >= maxMonths) {
            return; // No permitir avanzar más
        }
        setCurrentDate(newDate);
    };

    const isPastDate = (day: number) => {
        const date = new Date(year, month, day);
        return date < today;
    };

    const isSelectedDate = (day: number) => {
        if (!selectedDate) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year
        );
    };

    const handleDateClick = (day: number) => {
        if (!isPastDate(day)) {
            onDateSelect(new Date(year, month, day));
        }
    };

    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<div key={`empty-${i}`} />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    return (
        <section className={style.container}>
            <article className={style.titleBox}>
                <h2 className={style.title}>Selecciona la fecha</h2>
                <p className={style.subtitle}>Elige el día de tu cita</p>
            </article>

            <article className={style.calendarBox}>
                {/* Month navigation */}
                <div className={style.monthBox}>
                    <button
                        onClick={goToPreviousMonth}
                        className={style.monthButton}
                        disabled={isCurrentMonth()}
                    >
                        {"<"}
                    </button>
                    <h3 className={style.monthText}>
                        {monthNames[month]} {year}
                    </h3>
                    <button
                        onClick={goToNextMonth}
                        className={style.monthButton}
                    >
                        {">"}
                    </button>
                </div>

                {/* Calendar grid */}
                <div className={style.calendarGrid}>
                    {/* Day headers */}
                    <div className={style.dayList}>
                        {daysOfWeek.map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>

                    {/* Calendar days */}
                    <div className={style.dateGrid}>
                        {calendarDays.map((day, index) =>
                            typeof day === "number" ? (
                                <button
                                    key={index}
                                    onClick={() => handleDateClick(day)}
                                    disabled={isPastDate(day)}
                                    className={
                                        isSelectedDate(day)
                                            ? style.selected
                                            : ""
                                    }
                                >
                                    {day}
                                </button>
                            ) : (
                                <div key={index} />
                            )
                        )}
                    </div>
                </div>
            </article>
        </section>
    );
}
