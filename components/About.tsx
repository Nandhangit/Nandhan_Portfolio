import React from "react";
import { SiPython, SiDjango, SiFlask, SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { FaDatabase, FaServer } from "react-icons/fa";
import {
  Cpu,
  Briefcase,
  Award,
  FolderCheck,
  Code2,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 scroll-mt-32">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-extrabold text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="mt-6 text-gray-400 text-lg mx-auto max-w-xl">
          Building complete web applications from frontend to backend with modern technologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div className="relative rounded-2xl p-8 md:p-10 glass border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-fade-up">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
              <Code2 className="text-blue-400 w-7 h-7" />
              Python Fullstack Developer
            </h3>

            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
               I am Nandhan, a Commerce with Computer Applications graduate (2025) and a Python Full-Stack Developer. I have recently completed comprehensive full-stack training, where I gained hands-on experience in building web applications using Python for backend development and modern front-end technologies.
              </p>

              <p>
                I am passionate about writing clean, maintainable code and developing scalable, real-world applications. I enjoy solving complex problems through well-structured backend architectures while continuously learning and adapting to new technologies.
              </p>

              <p>
                I am actively seeking a Python Full-Stack Developer role where I can contribute to production-grade web applications, enhance my technical skills, and grow as part of a collaborative development team.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-12">
          {/* TECH STACK */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Cpu className="text-purple-400 w-5 h-5" />
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-200">
                <SiPython className="w-8 h-8 text-[#3776AB]" />
                <span className="text-white">Python</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <FaDatabase className="w-7 h-7 text-blue-400" />
                <span className="text-white">SQL</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">

                <SiDjango className="w-8 h-8 text-[#44B78B]" />
                <span className="text-white">Django</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-200">
                <FaServer className="w-7 h-7 text-red-400" />
                <span className="text-white">Django REST</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <SiFlask className="w-7 h-7 text-red-400" />
                <span className="text-white">Flask</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <SiHtml5 className="w-7 h-7 text-blue-400" />
                <span className="text-white">HTML</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <SiCss3 className="w-7 h-7 text-blue-400" />
                <span className="text-white">CSS</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <SiJavascript className="w-7 h-7 text-red-400" />
                <span className="text-white">Javascript</span>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-4 animate-fade-up animate-delay-400">
                <SiReact className="w-7 h-7 text-red-400" />
                <span className="text-white">React JS</span>
              </div>  
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaDatabase className="text-blue-400 w-5 h-5" />
              Quick Stats
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-6 rounded-2xl text-center">
                <FolderCheck className="mx-auto text-blue-400 w-6 h-6 mb-2" />
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-gray-400">Projects</p>
              </div>

              <div className="glass p-6 rounded-2xl text-center">
                <Award className="mx-auto text-purple-400 w-6 h-6 mb-2" />
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-xs text-gray-400">Certifications</p>
              </div>

              <div className="glass p-6 rounded-2xl text-center">
                <Briefcase className="mx-auto text-cyan-400 w-6 h-6 mb-2" />
                <p className="text-2xl font-bold text-white">1</p>
                <p className="text-xs text-gray-400">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
