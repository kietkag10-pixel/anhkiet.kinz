import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Website E-commerce',
      description: 'Thiết kế và phát triển website bán hàng với React và Node.js, tích hợp thanh toán online và quản lý kho.',
      image: '/placeholder-project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'App Mobile UI',
      description: 'Thiết kế giao diện ứng dụng di động với Figma, tập trung vào trải nghiệm người dùng và accessibility.',
      image: '/placeholder-project2.jpg',
      tags: ['Figma', 'Mobile Design', 'Prototyping'],
      link: '#',
    },
    {
      title: 'Portfolio 3D',
      description: 'Website portfolio với hiệu ứng 3D sử dụng Three.js, showcasing các dự án với animations tương tác.',
      image: '/placeholder-project3.jpg',
      tags: ['Three.js', 'WebGL', 'React', 'GSAP'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-6">Dự án</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Công việc gần đây</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Một số dự án nổi bật mà tôi đã thực hiện, thể hiện khả năng thiết kế và phát triển
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/60 text-6xl">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  Xem chi tiết
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem tất cả dự án
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;