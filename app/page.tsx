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

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="relative w-full bg-background overflow-x-hidden min-h-screen font-sans selection:bg-emerald/30 selection:text-emerald">
      
      {/* Background ambient glow - fixed behind everything */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-emerald/10 blur-[150px] rounded-full pointer-events-none opacity-50 z-0" />
      
      {/* Navbar (Minimal) */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 px-6 py-4 flex items-center justify-between">
         <div className="text-xl font-bold tracking-tighter flex items-center gap-2 relative z-10">
            <Sparkles className="text-emerald w-5 h-5 fill-emerald/20" />
            <span className="text-foreground">Juntamos</span>
         </div>
         <button className="px-5 py-2 text-sm font-medium bg-white text-black hover:bg-emerald hover:text-black transition-colors rounded-full transition-transform hover:scale-105 relative z-10 flex items-center gap-2">
           <Chrome className="w-4 h-4" />
           Add to Chrome
         </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Massive Typography Background */}
        <motion.h1 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-[15vw] leading-[0.8] font-black tracking-tighter text-center uppercase absolute top-32 z-0 text-white/[0.03] select-none flex flex-col items-center w-full"
        >
          <span>VIRTUAL</span>
          <span>TRY-ON</span>
        </motion.h1>

        <div className="relative z-10 flex flex-col items-center mt-12 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald/30 bg-emerald/10 text-emerald text-xs font-semibold mb-8 uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_-5px_var(--color-emerald-glow)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-[0_0_10px_var(--color-emerald)]" />
            Extensão IA Nativa
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 max-w-5xl leading-[1.1] text-white"
          >
            Seu Provador <br className="hidden md:block" />
            <span className="text-gradient-emerald-aqua">Definitivo.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mb-12 font-light leading-relaxed"
          >
            Abra qualquer e-commerce. Clique na extensão. Veja-se vestindo a peça instantaneamente com renderização ultrarrealista baseada em Inteligência Artificial.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-emerald text-black font-extrabold text-lg rounded-full overflow-hidden shadow-[0_0_40px_-10px_var(--color-emerald)] transition-all flex items-center gap-3 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Chrome className="w-5 h-5" />
              Add to Chrome (Free)
            </span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>
        </div>

        {/* The Mockup / Abstract Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, type: "spring", bounce: 0.2 }}
          className="w-full max-w-5xl mt-32 relative z-20 perspective-[2000px]"
        >
          {/* Main Glass Mockup Container */}
          <div className="glass-panel-emerald rounded-3xl w-full aspect-video md:aspect-[21/9] p-2 relative overflow-hidden flex flex-col transform-gpu hover:rotate-x-[2deg] hover:rotate-y-[2deg] transition-transform duration-700 ease-out shadow-2xl">
             {/* Fake Browser Header */}
             <div className="w-full h-10 border-b border-white/5 flex items-center px-5 gap-3 mb-2 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="ml-4 w-1/3 h-5 bg-black/40 border border-white/10 rounded-md flex items-center px-3">
                   <div className="w-4 h-4 text-white/20 rounded-sm mr-2 flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3" />
                   </div>
                   <span className="text-[10px] text-white/30 font-mono">https://loja.exemplo.com/produto</span>
                </div>
             </div>
             
             {/* Content Area Simulate E-commerce */}
             <div className="flex-1 relative flex bg-black/60 rounded-xl overflow-hidden shadow-inner border border-white/5">
                {/* Product Image Placeholder */}
                <div className="w-1/2 h-full p-8 flex flex-col justify-center border-r border-white/5 relative z-10 opacity-70">
                   <div className="w-3/4 h-8 bg-white/5 rounded-md mb-6" />
                   <div className="w-full h-48 bg-zinc-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden border border-white/10">
                      <Maximize className="w-8 h-8 text-white/20" />
                      <span className="absolute bottom-4 left-4 text-white/30 font-mono text-xs z-10">Modelo Original</span>
                   </div>
                   <div className="w-1/2 h-4 bg-white/5 rounded-md mb-3" />
                   <div className="w-1/3 h-4 bg-white/5 rounded-md" />
                </div>
                
                {/* Processed Results Area */}
                <div className="w-1/2 h-full bg-[#030303] flex flex-col relative overflow-hidden z-10">
                   {/* Scanner Line Animation */}
                   <motion.div 
                     animate={{ y: ["-100%", "500%", "-100%"] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 w-full h-24 bg-gradient-to-b from-transparent via-emerald/20 to-emerald shadow-[0_2px_20px_2px_var(--color-emerald)] z-20 pointer-events-none" 
                   />
                   
                   <div className="p-8 flex-1 flex flex-col items-center justify-center relative z-10">
                     <span className="text-emerald font-mono text-xs mb-4 tracking-[0.3em] uppercase opacity-80 flex items-center gap-2">
                       <Zap className="w-3 h-3" /> Try-On Generativo
                     </span>
                     <div className="w-full max-w-[200px] aspect-[3/4] bg-zinc-950 rounded-xl border border-emerald/40 relative flex items-center justify-center overflow-hidden shadow-[0_0_50px_-15px_var(--color-emerald-glow)]">
                       <motion.div
                         animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-emerald-glow)_0%,_transparent_70%)]"
                       />
                       <span className="text-white font-medium z-10 tracking-wide text-sm">Seu Avatar Aqui</span>
                     </div>
                   </div>
                </div>

                {/* Grid Overlay on Background */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] z-0 opacity-50" />
             </div>

             {/* Extension Floating UI Overlay Simulation */}
             <motion.div 
                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.6, type: "spring" }}
                className="absolute right-[-20px] top-[15%] w-72 glass-panel rounded-2xl p-5 border border-emerald/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] z-30 transform-gpu translate-x-12 translate-y-4"
             >
                <div className="flex items-center gap-4 mb-5 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald/20 flex items-center justify-center border border-emerald/30 shadow-[0_0_15px_var(--color-emerald-glow)]">
                    <Sparkles className="w-5 h-5 text-emerald" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-none mb-1">Juntamos</h4>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                      <p className="text-[11px] text-emerald font-mono uppercase tracking-wider">Aba Conectada</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "100%" }}
                       transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
                       className="h-full bg-emerald shadow-[0_0_10px_var(--color-emerald)]"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-white/50 font-mono uppercase">
                    <span>Processando Peça</span>
                    <span className="text-emerald">100%</span>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How it Works Section - Disconnected Timeline */}
      <section className="relative py-32 px-6 w-full max-w-7xl mx-auto border-t border-white/5">
         <div className="mb-20">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">A Mágica em <br/><span className="text-emerald">3 Cliques.</span></h3>
            <p className="text-foreground-muted text-lg max-w-xl">A complexidade fica no servidor. Para você, é apenas uma extensão que transforma qualquer loja no seu provador pessoal.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Horizontal Line connecting steps (Desktop only) */}
            <div className="hidden md:block absolute top-[24px] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

            {/* Step 1 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="relative z-10 flex flex-col items-start"
            >
               <div className="w-12 h-12 rounded-full bg-surface-elevated border border-emerald/30 text-emerald flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_20px_-5px_var(--color-emerald-glow)]">
                 1
               </div>
               <h4 className="text-xl font-bold mb-3">Ative a Extensão</h4>
               <p className="text-white/60 text-sm leading-relaxed">Navegue até o produto que deseja na sua loja favorita e clique no ícone do Juntamos.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative z-10 flex flex-col items-start md:mt-12"
            >
               <div className="w-12 h-12 rounded-full bg-surface-elevated border border-white/10 text-white flex items-center justify-center text-xl font-bold mb-6">
                 2
               </div>
               <h4 className="text-xl font-bold mb-3 text-white">Capture a Peça</h4>
               <p className="text-white/60 text-sm leading-relaxed">Nossa IA identifica automaticamente a roupa na página e a separa do fundo perfeitamente.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="relative z-10 flex flex-col items-start md:mt-24"
            >
               <div className="w-12 h-12 rounded-full bg-emerald text-black flex items-center justify-center text-xl font-black mb-6 shadow-[0_0_30px_var(--color-emerald-glow)]">
                 3
               </div>
               <h4 className="text-xl font-bold mb-3 text-emerald">Try-On Automático</h4>
               <p className="text-white/60 text-sm leading-relaxed">Em segundos, você verá como a peça veste o seu corpo, mantendo proporções e tecidos realistas.</p>
            </motion.div>
         </div>
      </section>

      {/* Radical Radical Features Grid (Breaking Bento) */}
      <section className="relative py-32 px-6 w-full max-w-7xl mx-auto">
         <div className="absolute -left-32 top-1/2 w-[600px] h-[600px] bg-aqua/10 blur-[150px] rounded-full pointer-events-none" />
         
         <div className="text-center mb-20 relative z-10">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Tecnologia sem <br/> <span className="text-glow-aqua text-aqua">Fricção.</span></h3>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Feature Frame 1 - Large Overlay */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="group relative h-[400px] rounded-[2rem] overflow-hidden border border-white/5 bg-surface-elevated/50 p-8 flex flex-col justify-end items-start"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
               <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-50 group-hover:bg-emerald/20 group-hover:border-emerald/30 group-hover:text-emerald transition-all z-20">
                  <Layers className="w-8 h-8" />
               </div>
               <div className="relative z-20">
                  <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald transition-colors">Integração Universal</h4>
                  <p className="text-white/50 max-w-md text-sm">Funciona em Zara, Shein, Renner ou qualquer e-commerce de moda. Não há restrição de domínio, nossa visão computacional entende a tela ativa.</p>
               </div>
            </motion.div>

            <div className="flex flex-col gap-8 h-[400px]">
               {/* Feature Frame 2 */}
               <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 rounded-[2rem] border border-white/5 bg-surface/50 p-8 flex items-center gap-6"
               >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-emerald/20 to-aqua/20 border border-emerald/20 flex items-center justify-center">
                     <ShieldCheck className="w-8 h-8 text-emerald" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-2">Privacidade Total</h4>
                     <p className="text-white/50 text-xs leading-relaxed">Nenhuma foto sua é armazenada eternamente. O processamento é efêmero e focado apenas na aba ativa de compras, descartado após o uso.</p>
                  </div>
               </motion.div>

               {/* Feature Frame 3 */}
               <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 rounded-[2rem] border border-white/5 bg-surface/50 p-8 flex items-center gap-6"
               >
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                     <MonitorSmartphone className="w-8 h-8 text-white/70" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold mb-2">Simulação 3D Real</h4>
                     <p className="text-white/50 text-xs leading-relaxed">Não é apenas uma "colagem". A rede neural entende a estrutura do tecido, caimento, dobras reais e iluminação ambiental do produto original.</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="relative w-full border-t border-white/5 bg-black pt-32 pb-12 overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald/10 blur-[150px] pointer-events-none" />
         
         <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center relative z-10 mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
               O fim das <br/><span className="text-gradient-emerald-aqua italic pr-2">devoluções.</span>
            </h2>
            <p className="text-white/50 mb-12 max-w-xl text-lg">Pare de adivinhar se a roupa vai servir. Instale o Juntamos e mude para sempre a forma como você compra moda online.</p>
            
            <button className="px-10 py-5 bg-white text-black font-black text-xl rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_50px_-15px_rgba(255,255,255,1)] transition-all flex items-center gap-3 active:scale-95">
               <Chrome className="w-6 h-6" />
               Adicionar ao Chrome agora
            </button>
            <p className="text-white/30 text-xs mt-6 font-mono tracking-widest uppercase">Totalmente Gratuito · Seguro · Rápido</p>
         </div>

         <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <div className="flex items-center gap-2">
               <Sparkles className="w-4 h-4 text-emerald/50" />
               <span className="font-bold text-white/60">Juntamos &copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
               <a href="#" className="hover:text-emerald transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-emerald transition-colors">Privacidade</a>
               <a href="#" className="hover:text-emerald transition-colors">Contato</a>
            </div>
         </div>
      </footer>

    </main>
  );
}
