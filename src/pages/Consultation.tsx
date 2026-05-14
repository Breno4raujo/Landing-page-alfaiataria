import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Circle } from 'lucide-react';
import { IMAGES } from '@/src/constants';

export default function Consultation() {
  return (
    <div className="bg-background text-white min-h-screen py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-32">
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden">
              <img 
                src={IMAGES.lounge} 
                alt="Bespoke atelier lounge" 
                className="w-full aspect-[4/5] md:aspect-video object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-gold/10 m-12 pointer-events-none" />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold mb-6">Invitation Only</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">Um círculo <br /> restrito.</h2>
            </div>
            <p className="text-xl text-silver/40 leading-relaxed font-light">
              Nosso Lounge Privado é um santuário para aqueles que apreciam a intersecção entre herança e precisão digital. 
            </p>
            <div className="pt-8">
              <ShieldCheck className="w-16 h-16 text-gold/30" />
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-32">
          <div className="lg:col-span-4 space-y-12">
            <h3 className="text-3xl font-bold text-white">Consulta Virtual</h3>
            <p className="text-silver/40 font-light leading-relaxed">
              Sua jornada começa com uma sessão privada dirigida por nossos mestres alfaiates em Londres.
            </p>
            <ul className="space-y-6">
              {[
                "Curadoria Digital de Tecidos",
                "Mapeamento de Silhueta 3D",
                "Acesso Global ao Atelier"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-silver/80">
                  <div className="w-6 h-px bg-gold" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 bg-surface-dark p-12 border border-white/5 shadow-3xl">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 border-b border-white/5 group focus-within:border-gold transition-colors">
                  <label className="text-[10px] font-bold uppercase text-silver/30 group-focus-within:text-gold transition-colors">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="ALEXANDER STERLING" 
                    className="w-full bg-transparent border-none p-0 pb-4 focus:ring-0 placeholder:text-white/10 text-white font-serif text-xl"
                  />
                </div>
                <div className="space-y-4 border-b border-white/5 group focus-within:border-gold transition-colors">
                  <label className="text-[10px] font-bold uppercase text-silver/30 group-focus-within:text-gold transition-colors">Email Privado</label>
                  <input 
                    type="email" 
                    placeholder="A.STERLING@RESIDENCE.COM" 
                    className="w-full bg-transparent border-none p-0 pb-4 focus:ring-0 placeholder:text-white/10 text-white font-serif text-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2 border-b border-silver/60 group focus-within:border-primary transition-colors">
                  <label className="text-[10px] font-semibold uppercase text-ink-muted group-focus-within:text-primary transition-colors">Tipo de Consulta</label>
                  <select className="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-ink-muted">
                    <option>Bespoke Three-Piece</option>
                    <option>Atelier Evening Wear</option>
                    <option>Heritage Archive Restoration</option>
                  </select>
                </div>
                <div className="space-y-2 border-b border-silver/60 group focus-within:border-primary transition-colors">
                  <label className="text-[10px] font-semibold uppercase text-ink-muted group-focus-within:text-primary transition-colors">Fuso Horário Preferencial</label>
                  <select className="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 text-ink-muted">
                    <option>GMT (London)</option>
                    <option>EST (New York)</option>
                    <option>PST (Los Angeles)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 border-b border-silver/60 group focus-within:border-primary transition-colors">
                <label className="text-[10px] font-semibold uppercase text-ink-muted group-focus-within:text-primary transition-colors">Requisitos Especiais</label>
                <textarea 
                  rows={2}
                  placeholder="DESCREVA SUA VISÃO..."
                  className="w-full bg-transparent border-none p-0 pb-2 focus:ring-0 placeholder:text-silver resize-none"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="primary-button flex items-center gap-3">
                  Solicitar Convite
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[IMAGES.detail1, IMAGES.detail2, IMAGES.detail3, IMAGES.detail4].map((img, i) => (
            <div key={i} className="aspect-square bg-surface overflow-hidden border border-silver/10">
              <img 
                src={img} 
                alt="Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
