# Sistema de Turnos – Emprendimiento de Belleza

Este proyecto es una aplicación web desarrollada en **React + TypeScript (Vite)** que permite a las clientas reservar turnos de servicios (esmaltado, kapping, esculpidas, etc.) según la disponibilidad configurada por la profesional.

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

---

## 📌 Tecnologías principales

### Frontend

-   React + TypeScript
-   React Router → Navegación entre Cliente / Login / Admin
-   Firebase Authentication → Login del administrador
-   Firebase Hosting → Deploy gratuito del frontend

### 📌 Backend (Serverless)

No existe un backend tradicional. En su lugar se utiliza **Firebase Cloud Functions (Node.js)**

Responsables de:

-   Conectar con la API de Google Calendar
-   Crear eventos
-   Consultar disponibilidad
-   Enviar emails de confirmación
-   Enviar recordatorios 24 h antes
-   Ejecutar tareas programadas con un único Cloud Scheduler Job (entra en el plan gratuito)
-   Las credenciales de Google se almacenan en el config de Firebase (nunca en el frontend).

### 📌 Base de Datos

Firestore (NoSQL) para almacenar:

-   Servicios del negocio (services)
-   Horarios fijos (fixedSchedules)
-   Horarios especiales para días puntuales (specialSchedules)
-   Configuraciones del negocio (duración por servicio, etc.)
-   Registro de turnos (para recordatorios y auditoría)

### 📌 Integración con Google Calendar

Se utiliza una Service Account con acceso al calendario del profesional.

Cloud Functions permite:

-   Crear eventos con título, descripción, cliente y fecha
-   Leer eventos existentes para calcular horarios disponibles
-   Evitar superposiciones de turnos

### 📌 Recordatorios por Email

**Email de confirmación:**
Se envía inmediatamente luego de agendar el turno.

**Email 24 h antes:**
Se utiliza una Cloud Function + un único Cloud Scheduler job que ejecuta cada hora:

-   Busca los turnos que ocurren en 24 h
-   Envía el recordatorio correspondiente
-   Esto permite mantener todo dentro del free tier.
