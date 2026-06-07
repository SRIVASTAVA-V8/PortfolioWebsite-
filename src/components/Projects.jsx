import React, { useState ,useRef} from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink , ChevronLeft, ChevronRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const swiperRef = useRef(null);

  const categories = ['all', 'frontend', 'backend', 'fullstack'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`capitalize px-6 py-2 rounded-full transition-all ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-dark-100 text-gray-400 hover:bg-primary-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="relative px-16">
          <button onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-20 bg-primary-500 p-3 rounded-full hover:scale-110 transition-all"
           >
            <ChevronLeft />
          </button>

          <button onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-20 bg-primary-500 p-3 rounded-full hover:scale-110 transition-all"
           >
            <ChevronRight />
          </button>
          <Swiper
          onSwiper ={(swiper)=>{
            swiperRef.current = swiper;}}
           modules={[Navigation]}
           navigation={false}
           spaceBetween={30}
           slidesPerView={1}
           breakpoints={{
            768: {
             slidesPerView: 2,
             },
            1024: {
             slidesPerView: 3,
            },
            }}
           className="projects-swiper"
           >
           {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">  
              <div
                // key={project.id}
                className="bg-dark-100 rounded-xl overflow-hidden card-hover cursor-pointer h-[520px] flex flex-col"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
               >

               {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl transform transition-transform duration-300 group-hover:scale-110">
                    {project.image}
                   </div>
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-primary-500/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <a href={project.liveLink} className="bg-white text-dark-300 p-2 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.githubLink} className="bg-white text-dark-300 p-2 rounded-full hover:scale-110 transition-transform">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  </div>
                </div>

                 {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                 <p className="text-gray-400 text-sm mb-4 min-h-[80px]">{project.description}</p>
                
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-primary-500/20 text-primary-500 px-2 py-1 rounded">
                      {tech}
                      </span>
                      ))}
                    {project.tech.length > 3 && (
                    <span className="text-xs bg-dark-200 text-gray-400 px-2 py-1 rounded">
                      +{project.tech.length - 3}
                    </span>
                     )}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-4 ">
                     {project.features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="text-xs text-gray-500">• {feature}</span>
                     ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>

          {/* View More Button */}
           {/* <div className="text-center mt-12">
          <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 px-8 py-3 rounded-lg font-semibold transition-all">
            View All Projects
          </button>
           </div> */}
         {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-primary-500 p-3 rounded-full">
         <ChevronLeft />
          </button>

         <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-primary-500 p-3 rounded-full">
          <ChevronRight />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;