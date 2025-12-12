"use client";

import style from "../../styles/client/TimeSelection.module.css";

type TimeSelectionProps = {
    onTimeSelect: (time: string) => void;
    selectedDate: Date;
    selectedTime?: string;
};

const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
];

export function TimeSelection({
    onTimeSelect,
    selectedDate,
    selectedTime,
}: TimeSelectionProps) {
    const formatDate = (date: Date) => {
        return date.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
        });
    };

    // Simulate some booked slots (in a real app, this would come from an API)
    const bookedSlots = ["10:00", "14:30", "16:00"];

    const isBooked = (time: string) => bookedSlots.includes(time);

    return (
        <section className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>Elige el horario</h2>
                <p className={style.subtitle}>{formatDate(selectedDate)}</p>
            </div>

            <div className={style.timeGrid}>
                {timeSlots.map((time) => {
                    const booked = isBooked(time);
                    const selected = selectedTime === time;

                    return (
                        <button
                            key={time}
                            className={`${style.timeSlot} ${
                                selected ? style.selected : ""
                            } ${booked ? style.occupied : ""}`}
                            onClick={() => !booked && onTimeSelect(time)}
                            disabled={booked}
                        >
                            <svg
                                className={style.clockIcon}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className={style.timeText}>{time}</span>
                            {booked && (
                                <span className={style.occupiedText}>
                                    Ocupado
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
