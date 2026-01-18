import React, { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { KatanaModel } from './components/KatanaModel';
import { Section } from './components/Section';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  
  // Initialize general text animations
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate-text');
    textElements.forEach((el) => {
      gsap.fromTo(el, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="relative w-full bg-zinc-950 text-white selection:bg-fuchsia-500 selection:text-black">
      <CustomCursor />
      <div className="noise-overlay" />
      
      {/* Fixed Navigation / Brand */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-display font-bold text-2xl tracking-tighter">RONIN</div>
        <div className="font-mono-tech text-xs tracking-[0.2em] flex gap-4">
          <span>MDL-01</span>
          <span className="text-fuchsia-500">AVAILABLE NOW</span>
        </div>
      </nav>

      {/* The 3D Programmatic Object */}
      <KatanaModel />

      <main className="relative z-20">
        
        {/* SECTION 1: HERO */}
        <Section className="z-30 pointer-events-none">
          <div className="text-center">
            <h1 className="font-display text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-difference text-white/90">
              The Edge <br />
              <span className="outline-text text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>of Silence</span>
            </h1>
            <p className="font-mono-tech mt-8 text-sm md:text-base tracking-widest text-zinc-400 max-w-md mx-auto animate-text">
              PRECISION ENGINEERED FOR THE MODERN WARRIOR.
              <br/>PURE SVG. ZERO ASSETS.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
             <div className="w-[1px] h-24 bg-gradient-to-b from-fuchsia-500 to-transparent" />
             <span className="font-mono-tech text-[10px] text-fuchsia-500">SCROLL TO UNSHEATH</span>
          </div>
        </Section>

        {/* SECTION 2: FORGING (Spacer for ScrollTrigger) */}
        <Section className="h-[50vh]" /> 

        {/* SECTION 3: DECONSTRUCTION */}
        <Section className="items-start text-left">
          <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-text">
              <span className="font-mono-tech text-fuchsia-500 text-xs mb-4 block">01 / GENESIS</span>
              <h2 className="font-display text-6xl md:text-8xl font-bold mb-6">
                CODE <br/> AS STEEL.
              </h2>
              <p className="font-mono-tech text-zinc-400 text-lg leading-relaxed max-w-md">
                Forged not in fire, but in mathematics. Every curve is a bezier path, every reflection calculated in real-time. 
                This is not a 3D model. It is a vector symphony.
              </p>
            </div>
            {/* Visuals handled by KatanaModel falling into place here */}
          </div>
        </Section>

        {/* SECTION 4: PHILOSOPHY */}
        <Section className="items-end text-right bg-gradient-to-t from-zinc-900/50 to-transparent">
          <div className="w-full max-w-screen-xl animate-text">
             <span className="font-mono-tech text-fuchsia-500 text-xs mb-4 block">02 / PURPOSE</span>
             <h2 className="font-display text-6xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">
                LETHAL <br/> ELEGANCE
              </h2>
              <div className="flex justify-end gap-12 mt-12">
                <div className="border-l border-fuchsia-500/30 pl-6">
                  <h3 className="font-mono-tech text-xl text-white mb-2">WEIGHT</h3>
                  <p className="font-mono-tech text-zinc-500">1.2 KG</p>
                </div>
                <div className="border-l border-fuchsia-500/30 pl-6">
                  <h3 className="font-mono-tech text-xl text-white mb-2">BALANCE</h3>
                  <p className="font-mono-tech text-zinc-500">PERFECT</p>
                </div>
                <div className="border-l border-fuchsia-500/30 pl-6">
                  <h3 className="font-mono-tech text-xl text-white mb-2">MATERIAL</h3>
                  <p className="font-mono-tech text-zinc-500">TAMAHAGANE</p>
                </div>
              </div>
          </div>
        </Section>

        {/* SECTION 5: SPECS & BUY */}
        <Section className="z-40">
           <div className="w-full max-w-4xl border border-white/10 bg-black/50 backdrop-blur-md p-12 rounded-sm relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div>
                   <h2 className="font-display text-5xl font-bold mb-2">RONIN <span className="text-fuchsia-500">.SVG</span></h2>
                   <p className="font-mono-tech text-zinc-400">LIMITED EDITION DIGITAL ASSET</p>
                   
                   <ul className="mt-8 space-y-2 font-mono-tech text-sm text-zinc-300">
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"/>
                       Full Source Code Access
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"/>
                       Commercial License
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"/>
                       Lifetime Updates
                     </li>
                   </ul>
                </div>

                <div className="flex flex-col items-center">
                   <div className="font-display text-6xl font-bold mb-6">$299</div>
                   <button className="group relative px-8 py-4 bg-white text-black font-mono-tech font-bold tracking-wider overflow-hidden transition-all hover:bg-fuchsia-500 hover:text-white">
                      <span className="relative z-10">ACQUIRE ASSET</span>
                      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out opacity-10" />
                   </button>
                   <p className="mt-4 text-[10px] text-zinc-500 font-mono-tech">SECURED BY ETHEREUM</p>
                </div>
              </div>
           </div>
        </Section>

        <footer className="w-full py-12 text-center border-t border-white/5">
           <p className="font-mono-tech text-xs text-zinc-600">
             DESIGNED BY AI. ENGINEERED BY HUMANITY. <br/>
             © 2024 RONIN COLLECTIVE.
           </p>
        </footer>

      </main>
    </div>
  );
}