# Sistema de Turnos – Emprendimiento de Belleza

Este proyecto es una aplicación web desarrollada en **React + TypeScript (Vite)** que permite a las clientas reservar turnos de servicios (esmaltado, kapping, esculpidas, etc.) según la disponibilidad configurada por la profesional.

Incluye:

-   Página pública para agendar turnos
-   Panel administrativo para la dueña del emprendimiento
-   Gestión de servicios y horarios personalizados
-   Integración con Google Calendar para sincronizar agendas y enviar recordatorios por email

---

## 🚀 Tecnologías utilizadas

-   **React + TypeScript** (Vite)
-   **Firebase**
    -   Hosting
    -   Firestore (base de datos)
    -   Authentication (login de la profesional)
-   **Google Calendar API**
-   **Google Apps Script**
-   **React Router DOM**

---

## 📌 Funcionalidades principales

### 🟢 Parte pública (clientas)

-   Selección de servicio (esmaltado, kapping, etc.)
-   Selección de día disponible
-   Visualización de horarios libres según:
    -   Horarios establecidos en Firestore
    -   Horarios especiales (solo por ese día)
    -   Eventos ya ocupados en Google Calendar
-   Registro del turno
-   Confirmación por email (Google Calendar la envía automáticamente)
-   Recordatorio de turno un dia antes vía email

### 🔒 Parte privada (profesional)

-   Inicio de sesión con Firebase Authentication
-   CRUD de servicios:
    -   Nombre, duración, precio
-   CRUD de horarios:
    -   Horarios fijos semanales
    -   Horarios especiales
    -   Feriados / días no laborables
