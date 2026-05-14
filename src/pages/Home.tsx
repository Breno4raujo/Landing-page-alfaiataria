import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Fingerprint, Ruler, Settings } from 'lucide-react';
import { IMAGES } from '@/src/constants';

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={IMAGES.hero} 
            alt="Tailor hands" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.6em] text-gold mb-8">Bespoke Excellence</p>
            <h1 className="text-6xl md:text-9xl font-bold leading-tight mb-10 tracking-tight">
              Digital Heritage, <br />
              <span className="font-light italic serif text-gold">Ancestral Precision</span>
            </h1>
            <p className="text-lg md:text-xl text-silver/60 max-w-2xl mx-auto mb-16 leading-relaxed">
              Onde a geometria do código encontra a maestria da agulha. Definimos a silhueta do ícone moderno através da alfaiataria matemática.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <button className="primary-button bg-white text-black hover:bg-gold hover:text-white">Begin Your Journey</button>
              <button className="secondary-button border-white/20 text-white hover:border-gold">View Collection</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Anatomy of a Masterpiece */}
      <section className="py-40 bg-surface-dark relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">The Technical Cut</span>
              <h2 className="text-5xl md:text-7xl font-bold">Anatomy of a Masterpiece</h2>
            </div>
            <p className="text-silver/40 max-w-sm font-light">
              Nosso processo de corte utiliza mapeamento biométrico 3D para garantir um ajuste anatômico que parece uma segunda pele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: IMAGES.detail1, label: "01 / Structural Integrity", title: "The Inner Canvas" },
              { img: IMAGES.pattern, label: "02 / Biometric Ratio", title: "Pattern Mapping" },
              { img: IMAGES.suit, label: "03 / Hidden Luxury", title: "Silk Architecture" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6 group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-primary relative">
                  <img src={item.img} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 border border-white/5 group-hover:border-gold/30 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">{item.label}</p>
                  <h4 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Profile Interface (Dashboard Style) */}
      <section className="py-40 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-20 bg-gold/5 blur-[120px] rounded-full" />
              <div className="bg-surface-dark border border-white/5 p-12 space-y-12 shadow-3xl text-silver/80">
                <div className="flex justify-between items-center border-b border-white/5 pb-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Body Profile Analysis</span>
                  <Fingerprint className="w-6 h-6 text-gold/30" />
                </div>
                
                <div className="space-y-8">
                  {[
                    { label: "Ombro a Ombro (mm)", val: "482.5" },
                    { label: "Circunferência Tórax", val: "1040.2" },
                    { label: "Longo de Braço", val: "665.8" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-silver/30">{stat.label}</span>
                      <span className="text-4xl font-bold tabular-nums text-white">{stat.val}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gold/5 p-6 border-l-2 border-gold flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Postura Escapular</span>
                  <span className="text-xl font-bold text-gold">ALPHA-7</span>
                </div>

                <button className="w-full py-4 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold/10 transition-colors">
                  Sincronizar Perfil Digital
                </button>
              </div>
            </div>

            <div className="space-y-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">Interface de Medição</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">O Perfil <br /><span className="italic font-light serif text-gold">Invisível</span></h2>
              <p className="text-lg text-silver/50 leading-relaxed font-light">
                Cada cliente recebe uma identidade digital cifrada, garantindo que o seu caimento impecável seja preservado por toda a eternidade nos nossos servidores seguros.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                   <span className="text-4xl font-bold block mb-2">0.01mm</span>
                   <span className="text-[10px] uppercase text-silver/30">Precisão Atômica</span>
                </div>
                <div>
                   <span className="text-4xl font-bold block mb-2">40+</span>
                   <span className="text-[10px] uppercase text-silver/30">Pontos de Dados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Textures Section (Moody Grid) */}
      <section className="py-40 bg-surface-dark">
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold mb-16 italic">The Material Library</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
               {[IMAGES.cashmere, IMAGES.silk, IMAGES.fabricHands, IMAGES.suit].map((img, i) => (
                 <div key={i} className="aspect-square relative overflow-hidden group bg-primary">
                    <img src={img} className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-4 py-2 backdrop-blur-sm">View Texture</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
