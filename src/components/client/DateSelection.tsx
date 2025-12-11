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

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
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
        <section>
            <article>
                <h2>Selecciona la fecha</h2>
                <p>Elige el día de tu cita</p>
            </article>

            <article>
                {/* Month navigation */}
                <div>
                    <button onClick={goToPreviousMonth}>ir a izquierda</button>
                    <h3>
                        {monthNames[month]} {year}
                    </h3>
                    <button onClick={goToNextMonth}>ir a derecha</button>
                </div>

                {/* Calendar grid */}
                <div>
                    {/* Day headers */}
                    <div>
                        {daysOfWeek.map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>

                    {/* Calendar days */}
                    <div>
                        {calendarDays.map((day, index) =>
                            typeof day === "number" ? (
                                <button
                                    key={index}
                                    onClick={() => handleDateClick(day)}
                                    disabled={isPastDate(day)}
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
