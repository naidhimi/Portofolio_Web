import { useState } from "react";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";

export default function Home() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className="bg-white">

      {/* ── SECTION 1: Hero ── */}
      <section className="min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 w-full max-w-[1400px] mx-auto">

        {/* Top nav */}
        <nav className="flex justify-between items-center">
          <span className="text-[#09090b] text-sm font-['Inter'] font-medium tracking-tight">
            Alifidian Fahimi
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[#71717a] text-[11px] sm:text-xs font-['Inter'] tracking-wide">
              Available for projects
            </span>
          </div>
        </nav>

        {/* Center — stacks on mobile/tablet, two-col on laptop+ */}
        <div className="flex-1 flex items-center py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 w-full items-center">

            {/* Left: name + bio */}
            <div>
              <p className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-[0.25em] uppercase mb-6 sm:mb-8">
                Designer & Engineer
              </p>
              <h1 className="font-['DM_Serif_Display'] text-[clamp(3rem,10vw,7.5rem)] leading-[0.88] text-[#09090b] tracking-tight">
                Alifidian<br />
                <em className="not-italic text-[#4338ca]">Fahimi</em>
              </h1>
              <p className="text-[#3f3f46] text-sm sm:text-base leading-relaxed font-['Inter'] max-w-sm mt-6 sm:mt-8">
                I design and build digital products end-to-end — from research and strategy to pixel-perfect interfaces and production code.
              </p>

              {/* Disciplines — visible on mobile/tablet when right panel is hidden */}
              <div className="grid grid-cols-2 gap-px bg-[#e4e4e7] mt-8 lg:hidden">
                {["Full Stack Dev", "UI Design", "UX Research","System Analyst"].map((d) => (
                  <div key={d} className="bg-white px-3 sm:px-4 py-2.5 sm:py-3">
                    <span className="text-[#3f3f46] text-[11px] sm:text-xs font-['Inter']">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: featured project card — laptop+ only */}
            <div className="hidden lg:block">
              <p className="text-[#a1a1aa] text-[10px] font-['Inter'] tracking-[0.25em] uppercase mb-4">
                Latest Work
              </p>
              <div
                className="group relative overflow-hidden cursor-pointer bg-[#f4f4f5]"
                onClick={() => navigate(`/project/${projects[0].slug}`)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={projects[0].coverImage}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-[#09090b]/10 to-transparent" />
                  <div className="absolute inset-0 bg-[#09090b]/0 group-hover:bg-[#09090b]/20 transition-all duration-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-[10px] font-['Inter'] tracking-widest uppercase mb-1">
                      {projects[0].category} — {projects[0].year}
                    </p>
                    <p className="font-['DM_Serif_Display'] text-xl text-white leading-tight">
                      {projects[0].title}
                    </p>
                  </div>
                  <span className="text-white/0 group-hover:text-white/90 text-lg transition-all duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>

              {/* Disciplines grid */}
              <div className="mt-5 grid grid-cols-2 gap-px bg-[#e4e4e7]">
                {["Full Stack Dev","UI Design", "UX Research","System Analyst"].map((d) => (
                  <div key={d} className="bg-white px-4 py-3">
                    <span className="text-[#3f3f46] text-xs font-['Inter']">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end">
          <div className="flex gap-5 sm:gap-8">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Email", href: "mailto:alifidianf@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-widest uppercase hover:text-[#09090b] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-widest uppercase">Scroll</span>
            <span className="text-[#4338ca] text-base leading-none">↓</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: About ── */}
      <section className="min-h-screen flex flex-col justify-center border-t border-[#e4e4e7] px-4 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20 lg:py-24 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-y-10 sm:gap-y-14 gap-x-10 xl:gap-x-12 items-center">

          {/* Heading */}
          <div className="md:col-span-1 xl:col-span-5">
            <p className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-[0.25em] uppercase mb-5 sm:mb-6">
              About
            </p>
            <h2 className="font-['DM_Serif_Display'] text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] text-[#09090b]">
              Obsessed with the gap between design and code.
            </h2>
          </div>

          {/* Body */}
          <div className="md:col-span-1 xl:col-span-6 xl:col-start-7 flex flex-col gap-5 sm:gap-6">
            <p className="text-[#3f3f46] text-sm sm:text-base leading-relaxed font-['Inter']">
              Hi — I'm Alifidian Fahimi, a UI/UX designer and full-stack developer based in Indonesia. I like figuring out how things can work better — then turning those ideas into interfaces that feel simple and intuitive.
            </p>
            <p className="text-[#3f3f46] text-sm sm:text-base leading-relaxed font-['Inter']">
             My background combines UI/UX design, system analysis, and full-stack development. I enjoy working through the whole process, from understanding a problem and mapping user flows to designing the interface and bringing it to life in code.
            </p>
            <div className="flex flex-wrap gap-2 pt-3 sm:pt-4">
              {["Full Stack Dev","UI Design", "UX Research","System Analyst"].map((skill) => (
                <span
                  key={skill}
                  className="text-[#3f3f46] text-[10px] sm:text-[11px] font-['Inter'] tracking-wide border border-[#e4e4e7] px-2.5 sm:px-3 py-1 sm:py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Work ── */}
      <section className="min-h-screen border-t border-[#e4e4e7] px-4 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20 lg:py-24 w-full max-w-[1400px] mx-auto">
        <div className="flex justify-between items-baseline mb-8 sm:mb-12">
          <p className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-[0.25em] uppercase">
            Selected Work
          </p>
          <span className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter']">
            {projects.length} projects
          </span>
        </div>

        {/* 1-col mobile, 2-col sm+, keep 2-col on all larger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative cursor-pointer overflow-hidden bg-[#f4f4f5] rounded-sm"
              onClick={() => navigate(`/project/${project.slug}`)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] sm:aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Always-on gradient so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/75 via-[#09090b]/10 to-transparent" />
                {/* Extra hover overlay */}
                <div
                  className="absolute inset-0 bg-[#09090b] transition-opacity duration-400"
                  style={{ opacity: hoveredId === project.id ? 0.4 : 0 }}
                />
              </div>

              {/* Bottom info — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-[9px] sm:text-[10px] font-['Inter'] tracking-widest uppercase mb-1">
                    {project.category} — {project.year}
                  </p>
                  <h3 className="font-['DM_Serif_Display'] text-[clamp(1.1rem,2vw,1.8rem)] text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                <span
                  className="text-white text-lg sm:text-xl transition-all duration-300 group-hover:translate-x-1 shrink-0 ml-2"
                  style={{ opacity: hoveredId === project.id ? 1 : 0.4 }}
                >
                  →
                </span>
              </div>

              {/* Hover subtitle — hidden on small screens, shown on hover for md+ */}
              <div
                className="absolute inset-0 hidden sm:flex items-center justify-center px-6 sm:px-8 pb-20 sm:pb-24 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: hoveredId === project.id ? 1 : 0 }}
              >
                <p className="text-white/75 text-xs sm:text-sm font-['Inter'] leading-relaxed text-center max-w-[200px] sm:max-w-xs">
                  {project.subtitle}
                </p>
              </div>

              {/* Index badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                <span className="text-white/40 text-[10px] sm:text-xs font-['Inter'] font-medium tracking-widest">
                  {project.index}
                </span>
              </div>

              {/* Tags on hover */}
              <div
                className="absolute top-4 left-4 sm:top-5 sm:left-5 hidden sm:flex gap-2 flex-wrap transition-opacity duration-300"
                style={{ opacity: hoveredId === project.id ? 1 : 0 }}
              >
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] sm:text-[10px] font-['Inter'] tracking-widest uppercase bg-white/10 text-white/80 px-2 sm:px-2.5 py-0.5 sm:py-1 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Contact ── */}
      <section className="min-h-screen flex flex-col justify-center border-t border-[#e4e4e7] px-4 sm:px-8 md:px-10 lg:px-12 py-16 sm:py-20 lg:py-24 w-full max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-[0.25em] uppercase mb-6 sm:mb-8">
            Contact
          </p>
          <h2 className="font-['DM_Serif_Display'] text-[clamp(2.2rem,7vw,7rem)] leading-[0.9] text-[#09090b] mb-10 sm:mb-12">
            Let's make something worth remembering.
          </h2>
          <a
            href="mailto:alifidianf@gmail.com"
            className="inline-flex items-center gap-3 sm:gap-4 text-[#4338ca] font-['DM_Serif_Display'] text-[clamp(1rem,2.5vw,2rem)] hover:gap-5 sm:hover:gap-6 transition-all duration-300 group"
          >
            alifidianf@gmail.com
            <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#e4e4e7] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-widest uppercase">
              Alifidian Fahimi — {new Date().getFullYear()}
            </p>
            <div className="flex gap-5 sm:gap-8">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "Email", href: "mailto:alifidianf@gmail.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[#a1a1aa] text-[10px] sm:text-xs font-['Inter'] tracking-widest uppercase hover:text-[#09090b] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
