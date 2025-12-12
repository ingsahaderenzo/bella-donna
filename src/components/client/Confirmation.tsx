"use client";

import style from "../../styles/client/Confirmation.module.css";
import type { BookingData } from "../../models/BookingData";

type ConfirmationProps = {
    bookingData: BookingData;
    onNewBooking: () => void;
};

export function Confirmation({ bookingData, onNewBooking }: ConfirmationProps) {
    const { service, date, time, contact } = bookingData;

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.content}>
                    {/* Success icon */}
                    <div className={style.iconWrapper}>
                        <svg
                            className={style.checkIcon}
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>

                    <h2 className={style.title}>¡Reserva confirmada!</h2>
                    <p className={style.subtitle}>
                        Tu cita ha sido agendada correctamente
                    </p>

                    {/* Booking details */}
                    <div className={style.detailsCard}>
                        <div className={style.section}>
                            <h3 className={style.sectionTitle}>
                                Detalles de la cita:
                            </h3>
                            <div className={style.detailsList}>
                                {/* Service */}
                                <div className={style.detailItem}>
                                    <div className={style.detailIconWrapper}>
                                        <svg
                                            className={style.detailIcon}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={style.detailText}>
                                            {service?.name}
                                        </p>
                                        <p className={style.detailSubtext}>
                                            ${service?.price} ·{" "}
                                            {service?.duration} minutos
                                        </p>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className={style.detailItem}>
                                    <div className={style.detailIconWrapper}>
                                        <svg
                                            className={style.detailIcon}
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                ry="2"
                                            />
                                            <line
                                                x1="16"
                                                y1="2"
                                                x2="16"
                                                y2="6"
                                            />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line
                                                x1="3"
                                                y1="10"
                                                x2="21"
                                                y2="10"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={style.detailText}>
                                            {date && formatDate(date)}
                                        </p>
                                    </div>
                                </div>

                                {/* Time */}
                                <div className={style.detailItem}>
                                    <div className={style.detailIconWrapper}>
                                        <svg
                                            className={style.detailIcon}
                                            width="14"
                                            height="14"
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
                                    </div>
                                    <div>
                                        <p className={style.detailText}>
                                            {time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className={style.sectionDivider}></div>
                        <div className={style.section}>
                            <h3 className={style.sectionTitle}>
                                Datos de contacto:
                            </h3>
                            <p className={style.contactText}>{contact?.name}</p>
                            <p className={style.contactText}>
                                {contact?.email}
                            </p>
                            <p className={style.contactText}>
                                {contact?.phone}
                            </p>
                        </div>
                    </div>

                    {/* Email reminder */}
                    <div className={style.reminderBox}>
                        <svg
                            className={style.mailIcon}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <p className={style.reminderText}>
                            Recibirás un recordatorio por email un día antes de
                            tu cita
                        </p>
                    </div>

                    {/* New booking button */}
                    <button
                        onClick={onNewBooking}
                        className={style.newBookingButton}
                    >
                        Hacer otra reserva
                    </button>
                </div>
            </div>
        </div>
    );
}
