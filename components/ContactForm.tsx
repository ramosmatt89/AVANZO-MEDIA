'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  phone: z.string().min(9, 'Telemóvel inválido'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mykdnqge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `Novo contato de ${data.name} - Avanzo Media`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Pronto para <span className="text-gradient">Avançar</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para levar o seu negócio ao próximo nível. Preencha o formulário e nossa equipe entrará em contato em menos de 24 horas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-12 rounded-[2rem] border-white/10 relative"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-display font-bold">Mensagem Enviada!</h3>
                <p className="text-white/60">Obrigado pelo contacto. Responderemos em breve.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-emerald-400 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Nome Completo</label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all`}
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Telemóvel</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all`}
                    placeholder="910 000 000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">E-mail Profissional</label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-white/40 uppercase tracking-widest mb-2">Mensagem</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-all resize-none`}
                    placeholder="Como podemos ajudar?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-emerald-500 text-black font-black rounded-xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all neon-glow disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
