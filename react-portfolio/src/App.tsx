/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, select, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-secondary/30 mesh-gradient overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-primary z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-brand-secondary rounded-full z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />

      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <div id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 border-t border-white/5">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-6">Về tôi</h2>
                <h3 className="text-[60px] md:text-[80px] font-sans font-extrabold mb-8 leading-[0.9] tracking-tighter">
                  NGHỆ THUẬT <br /><span className="italic font-display font-black text-brand-secondary underline decoration-brand-accent/30 underline-offset-8">LẬP TRÌNH</span>
                </h3>
              </div>
              <div className="space-y-6 text-white/60 leading-relaxed font-semibold uppercase tracking-wider text-xs">
                <p>
                  Với nền tảng cả về kỹ thuật và thiết kế thẩm mỹ, tôi kết nối khoảng cách
                  giữa logic backend phức tạp và giao diện frontend hoàn hảo.
                </p>
                <p>
                  Tôi tin rằng phần mềm không chỉ hoạt động hoàn hảo mà còn gợi lên cảm xúc.
                  Phong cách của tôi kết hợp độ chính xác kỹ thuật với sự sáng tạo—nhấn mạnh
                  glassmorphism, chuyển động và kể chuyện kỹ thuật số sống động.
                </p>
                <div className="flex space-x-12 pt-8">
                  <div>
                    <div className="text-3xl font-display font-bold text-white">40+</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-brand-secondary">Dự án hoàn thành</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-white">12</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-brand-secondary">Giải thưởng thiết kế</div>
                  </div>
                </div>
              </div>
            </div>

            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xl font-display font-bold tracking-tighter mb-4">
            <span className="text-gradient">ANH KIỆT</span>.
          </div>
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest font-medium">Thiết kế & Lập trình bởi Anh Kiệt © 2026</p>
          <div className="flex justify-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-brand-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
