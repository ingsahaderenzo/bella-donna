import type { Service } from "./Service";

export type BookingData = {
    service?: Service;
    date?: Date;
    time?: string;
    contact?: {
        name: string;
        email: string;
        phone: string;
    };
};
