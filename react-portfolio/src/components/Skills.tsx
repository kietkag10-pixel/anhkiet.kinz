import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 100 },
      ],
    },
    {
      category: 'UI/UX Design',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Sketch', level: 75 },
        { name: 'Principle', level: 70 },
      ],
    },
    {
      category: 'Công cụ khác',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Three.js', level: 70 },
        { name: 'GSAP', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-6">Kỹ năng</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Công cụ & Công nghệ</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Những kỹ năng và công cụ tôi sử dụng để tạo ra trải nghiệm người dùng tuyệt vời
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h4>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: inView ? skillIndex * 0.1 : 0,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;