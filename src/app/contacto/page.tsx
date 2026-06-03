"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo electronico invalido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Mail, label: "Correo", value: "info@sysadmin.gt", href: "mailto:info@sysadmin.gt" },
  { icon: Phone, label: "Telefono", value: "+502 3171 0897", href: "tel:+50231710897" },
  { icon: MapPin, label: "Ubicacion", value: "Ciudad de Guatemala, Guatemala", href: "https://maps.google.com/?q=Ciudad+de+Guatemala" },
];

export default function ContactoPage() {
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
      formData.append("subject", `Mensaje de contacto de ${data.nombre}`);
      formData.append("name", data.nombre);
      formData.append("email", data.email);
      formData.append("message", data.mensaje);

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
    <main className="min-h-screen bg-[#FBF8F2] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#F28E3A] text-sm font-semibold tracking-widest uppercase">
            Hagamos algo increíble para tu negocio
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#116776]">
            Contacto
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#116776] to-[#F28E3A]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#116776] mb-6">
                Información de contacto
              </h2>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#116776]/10 flex items-center justify-center shrink-0 group-hover:bg-[#116776] transition-colors">
                        <Icon size={18} className="text-[#116776] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-[#333333] text-sm font-medium mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/50231710897?text=Hola%20Sysadmin%20GT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#116776] mb-6">
              Envíanos un mensaje
            </h2>

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <CheckCircle size={48} className="text-[#116776]" />
                <h3 className="text-[#116776] text-lg font-semibold">
                  Mensaje enviado
                </h3>
                <p className="text-[#333333] text-sm">
                  Nos pondremos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[#F28E3A] text-sm hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#116776]">
                    Nombre completo *
                  </label>
                  <input
                    {...register("nombre")}
                    placeholder="Juan Perez"
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
                  />
                  {errors.nombre && (
                    <span className="text-red-500 text-xs">{errors.nombre.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#116776]">
                    Correo electrónico *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="juan@empresa.com"
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#116776]">
                    Mensaje *
                  </label>
                  <textarea
                    {...register("mensaje")}
                    rows={5}
                    placeholder="Escribe tu mensaje aqui..."
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-[#333333] placeholder-slate-400 focus:outline-none focus:border-[#116776] transition-colors resize-none"
                  />
                  {errors.mensaje && (
                    <span className="text-red-500 text-xs">{errors.mensaje.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#F28E3A] hover:bg-orange-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {loading ? "Enviando..." : (
                    <>Enviar mensaje <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}