"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { services } from "@/data/services";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  empresa: z.string().optional(),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(8, "Ingresa un teléfono válido"),
  servicio: z.string().min(1, "Selecciona un servicio"),
  descripcion: z.string().min(10, "Describe brevemente tu necesidad"),
});

type FormData = z.infer<typeof schema>;

export default function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "e2b1d39a-38ba-4733-a056-1d690c8a78d0");
      formData.append("subject", `Nueva cotización de ${data.nombre}`);
      formData.append("name", data.nombre);
      formData.append("email", data.email);
      formData.append("telefono", data.telefono);
      formData.append("empresa", data.empresa || "No indicada");
      formData.append("servicio", data.servicio);
      formData.append("descripcion", data.descripcion);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        alert("Hubo un error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-full min-h-screen bg-[#FBF8F2] py-24 flex items-center" id="cotizacion">
      <div className="w-full px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Hablemos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#116776]">
            Solicita tu cotización
          </h2>
          <p className="mt-3 text-[#333333] text-sm">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
        </div>

        {submitted ? (
          <div className="text-center py-16 flex flex-col items-center gap-4">
            <CheckCircle size={52} className="text-[#116776]" />
            <h3 className="text-[#116776] text-xl font-semibold">
              ¡Mensaje recibido!
            </h3>
            <p className="text-[#333333] text-sm">
              Nos pondremos en contacto contigo pronto.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-[#F28E3A] text-sm hover:underline"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-sm"
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1">
              <label className="text-[#116776] text-sm font-medium">
                Nombre completo *
              </label>
              <input
                {...register("nombre")}
                placeholder="Juan Pérez"
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
              />
              {errors.nombre && (
                <span className="text-red-500 text-xs">{errors.nombre.message}</span>
              )}
            </div>

            {/* Empresa */}
            <div className="flex flex-col gap-1">
              <label className="text-[#116776] text-sm font-medium">
                Empresa <span className="text-slate-400">(opcional)</span>
              </label>
              <input
                {...register("empresa")}
                placeholder="Mi Empresa S.A."
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[#116776] text-sm font-medium">
                Correo electrónico *
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="juan@empresa.com"
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email.message}</span>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1">
              <label className="text-[#116776] text-sm font-medium">
                Teléfono / WhatsApp *
              </label>
              <input
                {...register("telefono")}
                placeholder="+502 5555 5555"
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
              />
              {errors.telefono && (
                <span className="text-red-500 text-xs">{errors.telefono.message}</span>
              )}
            </div>

            {/* Servicio */}
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-[#116776] text-sm font-medium">
                Tipo de servicio *
              </label>
              <select
                {...register("servicio")}
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm focus:outline-none focus:border-[#116776] transition-colors bg-white"
              >
                <option value="">Selecciona una categoría</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.servicio && (
                <span className="text-red-500 text-xs">{errors.servicio.message}</span>
              )}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-[#116776] text-sm font-medium">
                Descripción breve *
              </label>
              <textarea
                {...register("descripcion")}
                rows={4}
                placeholder="Cuéntanos qué necesitas..."
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-[#333333] text-sm placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors resize-none"
              />
              {errors.descripcion && (
                <span className="text-red-500 text-xs">{errors.descripcion.message}</span>
              )}
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F28E3A] hover:bg-orange-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {loading ? "Enviando..." : (
                  <>Enviar solicitud <Send size={16} /></>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}