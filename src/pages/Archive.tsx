import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { IMAGES } from '@/src/constants';

export default function Archive() {
  const timeline = [
    {
      year: "1865",
      label: "O Acervo",
      title: "As Mãos do Mestre",
      desc: "Antes do primeiro corte, há o olhar. Nossos alfaiates fundadores em Londres estabeleceram um código de precisão que tratava cada fibra de lã como um bloco de construção para o status.",
      img: IMAGES.timeline1,
      reverse: false
    },
    {
      year: "1990",
      label: "Evolução",
      title: "A Silhueta do Poder",
      desc: "Transicionando para a era digital global, o terno Savile Row tornou-se a armadura da elite moderna. Começamos a traduzir padrões físicos em certezas matemáticas.",
      img: IMAGES.timeline2,
      reverse: true
    },
    {
      year: "2024",
      label: "Digital Atelier",
      title: "O Ponto Quântico",
      desc: "Hoje, scanners laser 3D mapeiam o corpo com precisão submilimétrica. Não fazemos apenas ternos; engenheiramos experiências sob medida.",
      img: IMAGES.timeline3,
      reverse: false
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header section with gradient background */}
      <section className="relative overflow-hidden pt-48 pb-48 bg-surface-dark">
        <div className="absolute inset-0 opacity-[0.05] grayscale brightness-50">
           <img src={IMAGES.hero} className="w-full h-full object-cover" />
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-gold mb-8 block"
          >
            Legado para Inovação
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-bold mb-10 max-w-4xl mx-auto leading-[0.9] tracking-tighter"
          >
            Da Savile Row <br /> ao <span className="italic font-light serif text-gold">Digital</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-silver/40 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Unimos três séculos de tradição sartorial com a precisão da tecnologia do futuro.
          </motion.p>
        </div>
      </section>

      {/* Timeline with richer backgrounds */}
      <div className="relative py-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-silver/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-48 md:space-y-80 relative">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-32 ${item.reverse ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 space-y-6 ${item.reverse ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`flex flex-col ${item.reverse ? 'items-start' : 'items-end'}`}>
                    <span className="text-6xl md:text-9xl font-serif font-black text-silver/10 absolute -top-12 -z-10 select-none">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mt-4">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">{item.title}</h3>
                  <p className="text-lg text-ink-muted leading-relaxed font-light">{item.desc}</p>
                  <div className={`pt-8 flex ${item.reverse ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-12 h-px bg-gold/30" />
                  </div>
                </div>

                {/* Image Container with richer styling */}
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-4 border border-silver/30 -z-10 translate-x-4 translate-y-4" />
                    <div className="aspect-[4/5] bg-surface overflow-hidden relative group shadow-2xl">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Centered Indicator */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                   <div className="w-4 h-4 rounded-full border-2 border-gold bg-background z-20 shadow-[0_0_20px_rgba(198,155,61,0.3)]" />
                   <span className="text-[10px] font-bold text-gold/40 mt-6 tracking-tighter uppercase tabular-nums">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Quote Section */}
      <section className="bg-primary py-48 text-white relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[150px] rounded-full" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <Quote className="w-24 h-24 mx-auto mb-16 text-gold/20" />
          <blockquote className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto leading-[1.1] tracking-tight mb-20 italic font-serif">
            "Estilo é a única coisa que você não pode comprar. Não está em uma sacola, um rótulo ou um preço. É o reflexo da alma."
          </blockquote>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
             <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Heritage Founder</span>
                <span className="text-silver/40 text-sm italic font-serif">Savile Row 1846</span>
             </div>
             <div className="w-12 h-px bg-white/10 hidden md:block" />
             <div className="flex flex-col items-center">
                <button className="primary-button hover:bg-white hover:text-primary min-w-[250px]">Iniciar Bespoke</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
