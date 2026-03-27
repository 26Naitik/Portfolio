const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="p-6 bg-gray-900 rounded-2xl hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">
            Portfolio Website
          </h3>

          <p className="text-gray-400 mb-4">
            Personal portfolio built using React, Tailwind CSS and animations.
          </p>

          <div className="flex gap-2 mb-4">
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
              React
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">
              Tailwind
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-primary">GitHub</a>
            <a href="#" className="text-primary">Live</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;