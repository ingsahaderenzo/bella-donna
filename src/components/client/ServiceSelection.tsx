"use client";

import { useEffect, useState } from "react";
import type { Service } from "../../models/Service";
import { getServices } from "../../services/servicesService";
import style from "../../styles/components/client/ServiceSelection.module.css";

type ServiceSelectionProps = {
    onServiceSelect: (service: Service) => void;
};

export function ServiceSelection({ onServiceSelect }: ServiceSelectionProps) {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        getServices().then(setServices);
    }, []);

    return (
        <section className={style.container}>
            <div className={style.titleBox}>
                <h2 className={style.title}>Elegí tu servicio</h2>
                <p className={style.subtitle}>
                    Seleccioná el tratamiento que desees
                </p>
            </div>

            <div className={style.servicesListContainer}>
                {services.map((service) => (
                    <article
                        key={service.id}
                        onClick={() => onServiceSelect(service)}
                        className={style.serviceCard}
                    >
                        <div className={style.serviceCardContent}>
                            <h3 className={style.serviceCardTitle}>
                                {service.name}
                            </h3>
                            <div className={style.serviceCardPrice}>
                                <span>${service.price}</span>
                            </div>
                        </div>

                        <div className={style.serviceCardSecondRow}>
                            <div className={style.serviceCardDurationContainer}>
                                {/* Clock SVG */}
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={style.clock}
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="12 7 12 12 15 14" />
                                </svg>

                                <span className={style.duration}>
                                    {service.duration} min
                                </span>
                            </div>

                            {/* Sparkles SVG */}
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={style.sparkles}
                            >
                                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
                                <path d="M5 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
                                <path d="M18 16l.5 1.5L20 18l-1.5.5L18 20l-.5-1.5L16 18l1.5-.5z" />
                            </svg>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
