import React from 'react';
import { motion } from 'motion/react';
import { FileText, Ruler, ShieldCheck, Thermometer } from 'lucide-react';
import { IMAGES } from '@/src/constants';

export default function FabricArchive() {
  return (
    <div className="bg-primary text-white min-h-screen selection:bg-gold selection:text-white">
      {/* Hero with full-bleed texture */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-20 contrast-125">
           <img src={IMAGES.fabricHands} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.6em] text-gold mb-8 block">Molecular Standards</span>
            <h1 className="text-6xl md:text-9xl font-bold mb-12 tracking-tighter leading-none">
              A Ciência <br /> do <span className="italic serif font-light text-gold">Tecido</span>
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
            <p className="text-xl text-silver/60 leading-relaxed font-light max-w-xl">
              Nossa filosofia 'Zero Erro' começa no nível molecular. Buscamos as fibras mais finas de moinhos históricos em Biella e Huddersfield.
            </p>
            <div className="flex gap-16 border-t border-white/10 pt-12">
               <div>
                 <span className="text-[10px] font-bold uppercase text-gold block mb-2">Tolerância</span>
                 <span className="text-4xl font-bold tabular-nums">0.0001%</span>
               </div>
               <div>
                 <span className="text-[10px] font-bold uppercase text-gold block mb-2">Resistência</span>
                 <span className="text-4xl font-bold tabular-nums">98.9%</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
        {/* Cashmere */}
        <div className="lg:col-span-8 group relative overflow-hidden bg-primary p-12 min-h-[600px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.cashmere} 
              alt="Cashmere" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Inner Mongolia</span>
            <h3 className="text-5xl font-bold text-white tracking-tight">Super 180s <br />White Cashmere</h3>
            <p className="text-silver/50 max-w-md leading-relaxed">
              Colhido do subpêlo macio das cabras Capra Hircus. O diâmetro da fibra mede consistentemente abaixo de 14,5 mícrons.
            </p>
            <div className="flex gap-12 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <div className="flex flex-col">
                  <span className="text-[8px] uppercase text-gold">Micron Count</span>
                  <span className="text-2xl font-bold">14.1μ</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[8px] uppercase text-gold">Thread Tension</span>
                  <span className="text-2xl font-bold">High</span>
               </div>
            </div>
          </div>
        </div>

        {/* Silk */}
        <div className="lg:col-span-4 group relative overflow-hidden bg-primary p-12 flex flex-col justify-between">
           <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Como, Italy</span>
              <h3 className="text-3xl font-bold mt-4 text-white">Liquid Mulberry Silk</h3>
           </div>
           <div className="absolute inset-0 z-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
              <img src={IMAGES.silk} className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10">
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-silver/60 text-sm leading-relaxed">Seda de filamento contínuo que oferece um brilho natural e resistência extrema.</p>
           </div>
        </div>

        {/* Technical Sections */}
        {[
          { title: "Hydro-Regulated", desc: "Regulação térmica natural através de arquitetura de fios.", val: "Temp: Active" },
          { title: "Estabilidade", desc: "Retenção de forma garantida por mais de 1.000 ciclos.", val: "Form: Locked" },
          { title: "Rastreabilidade", desc: "Proveniência total via blockchain individual.", val: "Origin: Verified" }
        ].map((item, i) => (
          <div key={i} className="lg:col-span-4 bg-primary-light p-12 border-t border-white/5 hover:bg-gold/5 transition-colors group">
             <div className="flex justify-between items-start mb-12">
                <ShieldCheck className="w-8 h-8 text-gold/30 group-hover:text-gold transition-colors" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-gold/40">{item.val}</span>
             </div>
             <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
             <p className="text-silver/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Lab Banner */}
      <section className="py-32 bg-white text-primary">
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">The <br /> Integrity <br /> <span className="italic serif font-light text-gold">Report</span></h2>
            <div className="space-y-12">
               <p className="text-xl text-ink-muted leading-relaxed font-light italic">
                 "Cada lote é submetido a escaneamento ultrassônico para detectar inconsistências microscópicas no tecido antes do primeiro corte."
               </p>
               <button className="primary-button bg-primary text-white border-none w-full md:w-auto">Ver Relatórios de Lab</button>
            </div>
         </div>
      </section>
    </div>
  );
}
