import { useState } from "react";
import type { Service } from "../models/Service";
import type { BookingData } from "../models/BookingData";
import { ServiceSelection } from "../components/client/ServiceSelection";
import styles from "../styles/pages/ClientPage.module.css";
import { DateSelection } from "../components/client/DateSelection";
import { TimeSelection } from "../components/client/TimeSelection";

export default function ClientPage() {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState<BookingData>({});

    // Handler for selecting a service
    const handleServiceSelect = (service: Service) => {
        setBookingData({ ...bookingData, service });
        setStep(2);
    };

    // Handler for selecting a date
    const handleDateSelect = (date: Date) => {
        setBookingData({ ...bookingData, date });
        setStep(3);
    };

    // Handler for selecting a time
    const handleTimeSelect = (time: string) => {
        setBookingData({ ...bookingData, time });
        setStep(4);
    };

    // Handler for going back a step
    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>Bella Donna</h1>
                    <p className={styles.subtitle}>
                        Reservá tu cita en minutos
                    </p>
                </div>

                <a href="/login" className={styles.loginLink}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.icon}
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 9 2.09V2a2 2 0 1 1 4 0v.09c0 .69.4 1.31 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01c.2.6.82 1 1.51 1H22a2 2 0 1 1 0 4h-.09c-.69 0-1.31.4-1.51 1z" />
                    </svg>
                </a>
            </header>

            {/* Progress indicator */}
            {step < 5 && (
                <div className={styles.progressContainer}>
                    <div className={styles.progressText}>
                        <span className={styles.progressStep}>
                            Paso {step} de 4
                        </span>
                        <span className={styles.progressStep}>
                            {Math.round((step / 4) * 100)}%
                        </span>
                    </div>

                    <div className={styles.barContainer}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            {/* Back button */}
            {step > 1 && step < 5 && (
                <button onClick={handleBack} className={styles.backButton}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.backIcon}
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Volver
                </button>
            )}

            {/* Step content */}
            <div>
                {step === 1 && (
                    <ServiceSelection onServiceSelect={handleServiceSelect} />
                )}
                {step === 2 && (
                    <DateSelection
                        onDateSelect={handleDateSelect}
                        selectedDate={bookingData.date}
                    />
                )}
                {step === 3 && (
                    <TimeSelection
                        onTimeSelect={handleTimeSelect}
                        selectedDate={bookingData.date!}
                        selectedTime={bookingData.time}
                    />
                )}
                {/*step === 4 && <ContactForm onSubmit={handleContactSubmit} />}
                {step === 5 && (
                    <Confirmation
                        bookingData={bookingData}
                        onNewBooking={handleNewBooking}
                    />
                )} */}
            </div>
        </div>
    );
}
