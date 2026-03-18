"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers, Chrome, Maximize, MonitorSmartphone } from "lucide-react";
import React, { useRef } from "react";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="relative w-full bg-background overflow-x-hidden min-h-screen font-sans selection:bg-emerald/30 selection:text-emerald">
      
      {/* Brutalist Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-0 mix-blend-screen opacity-70" />
      
      {/* Minimal Header */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex items-center justify-between pointer-events-none mix-blend-difference">
         <div className="text-2xl tracking-tighter flex items-center gap-2 relative z-10 pointer-events-auto">
            <span className="text-white font-display font-black uppercase">Juntamos.</span>
         </div>
      </nav>

      {/* Hero Section - Asymmetric Brutalist Approach */}
      <section className="relative pt-40 pb-20 w-full max-w-[1400px] mx-auto flex flex-col items-start px-6">
        
        <motion.div 
          style={{ y: heroY, opacity: opacityFade }}
          className="relative z-10 w-full flex flex-col items-start mt-8"
        >
          <div className="flex border border-white/20 bg-white/5 text-white/50 text-[10px] font-mono px-3 py-1.5 uppercase tracking-widest mb-12 w-fit items-center gap-3">
             <span className="w-1.5 h-1.5 bg-emerald animate-pulse rounded-full" />
             Seu Provador Virtual Online
          </div>
          
          <h1 className="font-display font-black text-[15vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] tracking-tighter uppercase text-white m-0">
            Compre Com<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-aqua">Certeza.</span>
          </h1>

          <div className="mt-16 flex flex-col md:flex-row items-start lg:items-center justify-between w-full border-t border-white/10 pt-10 gap-10">
            <p className="text-xl md:text-2xl text-white/60 max-w-xl font-light leading-relaxed">
              Cansado de receber roupas que não servem? Com a Juntamos, você se vê usando qualquer peça em qualquer e-commerce antes mesmo de fechar a compra.
            </p>
            
            <button className="group relative px-10 py-6 bg-transparent text-emerald font-black uppercase tracking-[0.2em] text-sm overflow-hidden flex items-center gap-4 cursor-pointer border border-emerald hover:bg-emerald hover:text-black transition-colors shrink-0">
              <Chrome className="w-5 h-5" />
              Baixar Extensão Grátis
            </button>
          </div>
        </motion.div>
      </section>

      {/* THE MOCKUP (Preserved structure, brutalist styling) */}
      <section className="relative z-20 w-full max-w-[1400px] mx-auto px-6 mb-32 -mt-10">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, type: "spring", bounce: 0 }}
           className="w-full relative shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] bg-background"
        >
           <div className="border border-white/20 w-full aspect-[4/3] md:aspect-[21/9] p-0 relative overflow-hidden flex flex-col">
             
             {/* Fake Browser Header */}
             <div className="w-full h-12 border-b border-white/20 flex items-center px-6 gap-4 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full border border-white/40" />
                  <div className="w-3 h-3 rounded-full border border-white/40" />
                  <div className="w-3 h-3 rounded-full border border-white/40" />
                </div>
                <div className="ml-6 w-1/3 h-6 bg-black border border-white/10 flex items-center px-4 hidden sm:flex">
                   <ShieldCheck className="w-3 h-3 text-emerald mr-3" />
                   <span className="text-[10px] text-white/40 font-mono tracking-widest">https://sua-loja-favorita.com.vc</span>
                </div>
             </div>
             
             {/* Simulate E-commerce + Extension */}
             <div className="flex-1 relative flex bg-[#030303] overflow-hidden">
                {/* Product Area */}
                <div className="hidden sm:flex w-1/2 h-full p-8 flex-col justify-center border-r border-white/10 relative z-10 opacity-70">
                   <div className="w-3/4 h-8 border border-white/10 mb-6 bg-white/5" />
                   <div className="w-full h-48 bg-black border border-white/10 mb-6 flex items-center justify-center relative shadow-inner">
                      <Maximize className="w-8 h-8 text-white/10" />
                      <span className="absolute bottom-4 left-4 text-white/30 font-mono text-[10px] z-10 uppercase tracking-widest">Peça na Tela</span>
                   </div>
                   <div className="w-1/2 h-4 border border-white/10 mb-3 bg-white/5" />
                   <div className="w-1/3 h-4 border border-white/10 bg-white/5" />
                </div>
                
                {/* Result Processing Area */}
                <div className="w-full sm:w-1/2 h-full flex flex-col relative overflow-hidden z-10 bg-gradient-to-tr from-[#020202] to-[#0a0a0a]">
                   <div className="p-8 flex-1 flex flex-col items-center justify-center relative z-10">
                     <span className="text-emerald font-mono text-[10px] mb-8 tracking-[0.4em] uppercase border border-emerald/50 px-3 py-1.5 flex items-center gap-2">
                       <Zap className="w-3 h-3" /> Analisando o Caimento
                     </span>
                     <div className="w-full max-w-[220px] aspect-[3/4] bg-black border border-emerald relative flex items-center justify-center overflow-hidden shadow-[0_0_30px_-5px_var(--color-emerald-glow)]">
                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-emerald)_0%,_transparent_60%)] opacity-20 mix-blend-screen animate-pulse" />
                       <span className="text-emerald font-mono z-10 tracking-widest text-[10px] uppercase text-center px-4">Você Vestindo a Peça</span>
                     </div>
                   </div>
                </div>

                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] z-0 opacity-30 mix-blend-overlay" />
             </div>

             {/* Extension Overlay UI */}
             <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute right-0 sm:right-10 top-[20%] w-72 bg-black border border-emerald shadow-2xl z-30 p-5"
             >
                <div className="flex items-center gap-4 mb-5 border-b border-white/20 pb-4">
                  <div className="p-2 border border-emerald bg-emerald/10 shrink-0">
                    <Sparkles className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-white leading-none mb-1.5 uppercase tracking-widest">Juntamos</h4>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald" />
                      <p className="text-[9px] text-emerald font-mono uppercase tracking-[0.2em]">Pronto para Uso</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-[2px] bg-white/10 relative">
                    <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       viewport={{ once: true }}
                       transition={{ delay: 1, duration: 2.5, ease: "linear" }}
                       className="absolute left-0 top-0 bottom-0 bg-emerald shadow-[0_0_10px_var(--color-emerald)]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/50 font-mono uppercase tracking-widest">
                    <span>Ajustando Medidas</span>
                    <span className="text-emerald">100%</span>
                  </div>
                </div>
             </motion.div>
           </div>
        </motion.div>
      </section>

      {/* How it Works - Typographic Narrative */}
      <section className="relative w-full border-y border-white/20 bg-black">
         <div className="max-w-[1400px] mx-auto px-6 py-24 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 pt-12">
               <h3 className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                  Como é<br/><span className="text-white/20">Fácil.</span>
               </h3>
               <p className="text-white/60 text-sm font-mono leading-relaxed max-w-sm">
                  Não pesamos o seu celular nem exigimos envio das suas fotos o tempo todo. A tecnologia trabalha de maneira invisível.
               </p>
            </div>
            
            <div className="lg:w-2/3 border-l-0 lg:border-l border-white/20 lg:pl-20 flex flex-col gap-24 py-12">
               {[
                 { num: "01", title: "Encontre o que você ama", desc: "Navegue pelo seu e-commerce favorito. Escolha a roupa que chamou a sua atenção e apenas clique no ícone da nossa extensão." },
                 { num: "02", title: "Nós Capturamos o Tecido", desc: "O Juntamos entende exatamente qual é a roupa, preservando as texturas, o corte original e suas verdadeiras proporções e cores." },
                 { num: "03", title: "Prove num Instante", desc: "A peça é moldada perfeitamente na sua silhueta guardada com a gente. Volte a se empolgar em comprar roupas exclusivas online." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-8 group">
                    <div className="font-display text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] group-hover:[-webkit-text-stroke:1px_#00FF66] transition-all pt-2">
                       {step.num}
                    </div>
                    <div>
                       <h4 className="text-2xl font-bold uppercase tracking-widest mb-4 group-hover:text-emerald transition-colors">{step.title}</h4>
                       <p className="text-white/50 font-mono text-sm leading-relaxed max-w-md">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Features - Brutalist Split Grid */}
      <section className="w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 text-center md:text-left divide-white/20">
            <div className="p-16 lg:p-32 border-r-0 md:border-r border-white/20 hover:bg-white/[0.02] transition-colors flex flex-col relative group">
               <Layers className="w-12 h-12 text-white/30 mb-12 group-hover:text-aqua transition-colors" />
               <h4 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">Funciona em<br/>Qualquer Loja.</h4>
               <p className="text-white/50 font-mono text-xs max-w-sm leading-relaxed uppercase">Seja nas maiores vitrines virtuais ou na loja independente que você adora. Bastou abrir pelo navegador, instalar a extensão e provar com um clique sem sair da página.</p>
            </div>
            
            <div className="p-16 lg:p-32 hover:bg-white/[0.02] transition-colors flex flex-col relative group">
               <ShieldCheck className="w-12 h-12 text-white/30 mb-12 group-hover:text-emerald transition-colors" />
               <h4 className="font-display text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">Sua Privacidade<br/>Protegida.</h4>
               <p className="text-white/50 font-mono text-xs max-w-sm leading-relaxed uppercase">O seu rosto e o seu corpo pertencem só a você. Quando a aba do site é fechada, toda a memória de simulação também é descartada com absoluta segurança. Confiança primeiro.</p>
            </div>
         </div>
      </section>

      {/* Extreme Footer */}
      <footer className="w-full bg-emerald text-black py-40 px-6 border-t border-white/20">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
            <h2 className="font-display text-[14vw] md:text-[11vw] font-black uppercase tracking-tighter leading-[0.8] mb-16 mix-blend-multiply">
               Descubra o<br/>Novo "Vestir".
            </h2>
            <button className="group px-16 py-8 bg-black text-white hover:text-emerald font-black uppercase tracking-[0.3em] text-xl transition-all shadow-[10px_10px_0px_rgba(0,0,0,0.5)] active:shadow-[0px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-[10px] active:translate-y-[10px] flex items-center gap-6">
               <Chrome className="w-8 h-8" />
               Adicionar ao Navegador
            </button>
         </div>
      </footer>

    </main>
  );
}
