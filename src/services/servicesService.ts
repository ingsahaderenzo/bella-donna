import { collection, getDocs } from "firebase/firestore";
import type { Service } from "../models/Service";
import { db } from "../firebase";

export async function getServices(): Promise<Service[]> {
    const servicios: Service[] = [
        {
            id: "1",
            name: "Servicio de limpieza",
            price: 100,
            duration: 60,
        },
        {
            id: "2",
            name: "Kapping",
            price: 150,
            duration: 45,
        },
        { id: "3", name: "Uñas esmaltadas", price: 80, duration: 30 },
    ];

    return servicios;
    /*  const querySnapshot = await getDocs(collection(db, "services"));
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Service[];
     
    
    Lo comento para no llamar a firebase en desarrollo
    */
}
