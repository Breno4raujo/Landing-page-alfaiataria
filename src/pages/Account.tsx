import React from 'react';
import { User, Settings, LogOut, Package, CreditCard } from 'lucide-react';

export default function Account() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-white border border-silver/20 p-12 text-center">
          <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Alexander Sterling</h1>
          <p className="text-gold font-semibold uppercase tracking-widest text-xs mb-8">Executive Member</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-silver/20 border border-silver/20">
             {[
               { icon: Package, title: "Orders", desc: "View your bespoke collection" },
               { icon: Settings, title: "Preferences", desc: "Digital pattern settings" },
               { icon: CreditCard, title: "Payment", desc: "Manage subscription" },
               { icon: LogOut, title: "Sign Out", desc: "Securely exit session" }
             ].map((item, i) => (
               <button key={i} className="bg-white p-8 flex flex-col items-center hover:bg-surface transition-colors">
                  <item.icon className="w-6 h-6 text-primary mb-4" />
                  <span className="text-xs font-bold uppercase tracking-widest mb-1">{item.title}</span>
                  <span className="text-[10px] text-ink-muted">{item.desc}</span>
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
