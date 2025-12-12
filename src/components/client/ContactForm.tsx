"use client";

import { useState } from "react";
import style from "../../styles/client/ContactForm.module.css";

type ContactFormProps = {
    onSubmit: (contact: { name: string; email: string; phone: string }) => void;
};

export function ContactForm({ onSubmit }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            phone: "",
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "El nombre completo es requerido";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email inválido";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "El teléfono es requerido";
            isValid = false;
        } else if (!/^\d{8,15}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Teléfono inválido";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
            });
        }
    };

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    return (
        <section className={style.container}>
            <div className={style.header}>
                <h2 className={style.title}>Tus datos de contacto</h2>
                <p className={style.subtitle}>
                    Necesitamos estos datos para confirmar tu cita
                </p>
            </div>

            <div className={style.card}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.inputGroup}>
                        <label htmlFor="name" className={style.label}>
                            Nombre completo *
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="María González"
                            value={formData.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                            className={`${style.input} ${
                                errors.name ? style.inputError : ""
                            }`}
                        />
                        {errors.name && (
                            <p className={style.errorText}>{errors.name}</p>
                        )}
                    </div>

                    <div className={style.inputGroup}>
                        <label htmlFor="email" className={style.label}>
                            Email *
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="maria@ejemplo.com"
                            value={formData.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                            className={`${style.input} ${
                                errors.email ? style.inputError : ""
                            }`}
                        />
                        {errors.email && (
                            <p className={style.errorText}>{errors.email}</p>
                        )}
                    </div>

                    <div className={style.inputGroup}>
                        <label htmlFor="phone" className={style.label}>
                            Teléfono *
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="1234567890"
                            value={formData.phone}
                            onChange={(e) =>
                                handleChange("phone", e.target.value)
                            }
                            className={`${style.input} ${
                                errors.phone ? style.inputError : ""
                            }`}
                        />
                        {errors.phone && (
                            <p className={style.errorText}>{errors.phone}</p>
                        )}
                    </div>

                    <button type="submit" className={style.submitButton}>
                        Confirmar reserva
                    </button>
                </form>
            </div>
        </section>
    );
}
