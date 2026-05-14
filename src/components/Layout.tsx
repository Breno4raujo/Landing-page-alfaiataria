import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Ruler, Scissors, BookOpen, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: 'Bespoke', path: '/', icon: Ruler },
    { label: 'Atelier', path: '/consultation', icon: Scissors },
    { label: 'Archive', path: '/archive', icon: BookOpen },
    { label: 'Account', path: '/account', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-white bg-background">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left" style={{ scaleX }} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-nav h-20 md:h-24 bg-background/95">
        <div className="max-w-container-max mx-auto h-full px-margin-mobile md:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="p-2 hover:text-gold transition-colors">
              <Menu className="w-5 h-5 text-white" />
            </button>
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-silver/60">
              <Link to="/fabric-science" className="hover:text-gold">Fabric Science</Link>
              <Link to="/archive" className="hover:text-gold">Timeline</Link>
            </div>
          </div>
          
          <Link to="/" className="flex flex-col items-center">
            <span className="text-xl md:text-3xl font-bold uppercase tracking-[0.3em] text-white">Atelier Precision</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gold -mt-1 ml-1">Digital Heritage</span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-gold border border-gold/30 px-3 py-1">
              Private Access
            </div>
            <button className="p-2 hover:text-gold transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-24 pb-20 md:pb-0">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-primary/95 backdrop-blur-xl border border-gold/20 rounded-xl px-2 shadow-2xl">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 transition-all flex-1 py-1",
                  isActive ? "text-gold" : "text-silver opacity-40"
                )}
              >
                <Icon className={cn("w-5 h-5")} />
                <span className="text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-surface-dark text-silver py-32 border-t border-white/5">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-24">
           <div className="md:col-span-2 space-y-12">
             <div className="flex flex-col">
               <span className="text-3xl font-bold uppercase tracking-[0.3em] text-white">Atelier Precision</span>
               <span className="text-xs font-bold uppercase tracking-[0.5em] text-gold">Ancestral Heritage</span>
             </div>
             <p className="max-w-md text-silver/20 leading-relaxed font-light text-sm italic">
               "A verdadeira elegância reside na precisão invisível."
             </p>
           </div>
           <div className="space-y-6">
             <h4 className="text-white text-xs font-bold uppercase tracking-widest">Atelier</h4>
             <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold text-silver/40">
               <li><Link to="/consultation" className="hover:text-gold transition-colors">Bespoke Fitting</Link></li>
               <li><Link to="/fabric-science" className="hover:text-gold transition-colors">Fabric Archive</Link></li>
               <li><Link to="/archive" className="hover:text-gold transition-colors">Historical Timeline</Link></li>
             </ul>
           </div>
           <div className="space-y-6">
             <h4 className="text-white text-xs font-bold uppercase tracking-widest">Connect</h4>
             <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold text-silver/40">
               <li className="hover:text-gold cursor-pointer transition-colors">WhatsApp Concierge</li>
               <li className="hover:text-gold cursor-pointer transition-colors">Instagram</li>
               <li className="hover:text-gold cursor-pointer transition-colors">LinkedIn</li>
             </ul>
           </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-silver/20">
           <div>© 1846 Savile Row Digital</div>
           <div className="flex gap-8">
             <span className="hover:text-silver/40 cursor-pointer transition-colors">Privacy Policy</span>
             <span className="hover:text-silver/40 cursor-pointer transition-colors">Terms of Service</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
