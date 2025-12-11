"use client";

import { useEffect, useState } from "react";
import type { Service } from "../../models/Service";
import { getServices } from "../../services/servicesService";

type ServiceSelectionProps = {
    onServiceSelect: (service: Service) => void;
};

export function ServiceSelection({ onServiceSelect }: ServiceSelectionProps) {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        getServices().then(setServices);
    }, []);

    return (
        <section>
            <div>
                <h2>Elige tu servicio</h2>
                <p>Selecciona el tratamiento que deseas</p>
            </div>

            <div>
                {services.map((service) => (
                    <article
                        key={service.id}
                        onClick={() => onServiceSelect(service)}
                    >
                        <div>
                            <div>
                                <h3>{service.name}</h3>
                                <div>
                                    <span>{service.duration} min</span>
                                </div>
                            </div>
                            <div>
                                <span>${service.price}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
