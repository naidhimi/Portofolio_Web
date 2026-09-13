import { useParams, useNavigate } from "react-router";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-[#71717a] font-['Inter'] text-sm">Project not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-[#e4e4e7]">
        <button
          onClick={() => navigate("/")}
          className="text-[#71717a] text-[10px] sm:text-xs tracking-widest uppercase font-['Inter'] hover:text-[#09090b] transition-colors duration-200 flex items-center gap-2"
        >
          ← Back
        </button>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-[#a1a1aa] text-[10px] sm:text-xs tracking-widest uppercase font-['Inter']">
            {project.index} / {projects.length.toString().padStart(2, "0")}
          </span>
          <span className="text-[#09090b] text-xs font-['Inter'] font-medium hidden md:block truncate max-w-[200px] lg:max-w-none">
            {project.title}
          </span>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-[#f4f4f5] pt-[56px] sm:pt-[60px]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent" />

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-10 lg:px-12 pb-8 sm:pb-10 md:pb-14 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-['Inter'] tracking-widest uppercase bg-white/10 text-white/70 px-2 sm:px-2.5 py-0.5 sm:py-1 backdrop-blur-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/50 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-['Inter'] mb-2 sm:mb-3">
            {project.category} — {project.year}
          </p>
          <h1 className="font-['DM_Serif_Display'] text-[clamp(2rem,6vw,6rem)] text-white leading-[0.9]">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-8 md:px-10 lg:px-12 w-full max-w-[1400px] mx-auto">

        {/* Description + meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 sm:gap-y-12 gap-x-10 lg:gap-x-12 py-12 sm:py-16 lg:py-20 border-b border-[#e4e4e7]">
          <div className="md:col-span-7">
            <p className="font-['DM_Serif_Display'] text-[clamp(1.1rem,2.5vw,2rem)] text-[#09090b] leading-[1.4]">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-row md:flex-col gap-6 sm:gap-8 md:gap-6 flex-wrap">
            <div>
              <p className="text-[#a1a1aa] text-[10px] tracking-widest uppercase font-['Inter'] mb-1.5">Category</p>
              <p className="text-[#09090b] text-sm font-['Inter'] font-medium">{project.category}</p>
            </div>
            <div>
              <p className="text-[#a1a1aa] text-[10px] tracking-widest uppercase font-['Inter'] mb-1.5">Year</p>
              <p className="text-[#09090b] text-sm font-['Inter'] font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-[#a1a1aa] text-[10px] tracking-widest uppercase font-['Inter'] mb-2">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[#3f3f46] text-[10px] font-['Inter'] tracking-wide border border-[#e4e4e7] px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three-act */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e4e4e7] my-10 sm:my-14 lg:my-16">
          {[
            { label: "Challenge", text: project.challenge, num: "01" },
            { label: "Solution", text: project.solution, num: "02" },
            { label: "Outcome", text: project.outcome, num: "03" },
          ].map(({ label, text, num }) => (
            <div key={label} className="py-6 sm:py-8 md:py-10 sm:px-6 md:px-8 lg:px-10 first:sm:pl-0 last:sm:pr-0">
              <div className="flex items-baseline gap-3 mb-3 sm:mb-4">
                <span className="text-[#4338ca] text-[10px] font-['Inter'] tracking-widest">{num}</span>
                <p className="text-[#09090b] text-[10px] sm:text-xs tracking-widest uppercase font-['Inter'] font-medium">
                  {label}
                </p>
              </div>
              <p className="text-[#3f3f46] text-sm leading-relaxed font-['Inter']">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-16 sm:mb-20 lg:mb-24">
          {project.images.map((img, i) => (
            <div key={i} className="overflow-hidden bg-[#f4f4f5] aspect-video">
              <img
                src={img}
                alt={`${project.title} — view ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Next project */}
        <div className="border-t border-[#e4e4e7] py-12 sm:py-14 lg:py-16">
          <p className="text-[#a1a1aa] text-[10px] sm:text-xs tracking-widest uppercase font-['Inter'] mb-4 sm:mb-6">
            Next Project
          </p>
          <button
            onClick={() => navigate(`/project/${next.slug}`)}
            className="group w-full flex items-center justify-between gap-4 sm:gap-6 text-left"
          >
            <div>
              <h3 className="font-['DM_Serif_Display'] text-[clamp(1.8rem,5vw,4.5rem)] text-[#09090b] leading-none group-hover:text-[#4338ca] transition-colors duration-300">
                {next.title}
              </h3>
              <p className="text-[#71717a] text-xs sm:text-sm mt-2 font-['Inter']">{next.subtitle}</p>
            </div>
            <span className="text-[#09090b] text-2xl sm:text-3xl transition-all duration-300 group-hover:text-[#4338ca] group-hover:translate-x-2 shrink-0">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-10 lg:px-12 w-full max-w-[1400px] mx-auto pb-10 sm:pb-12 pt-8 sm:pt-10 border-t border-[#e4e4e7]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div>
            <p className="text-[#09090b] text-sm font-['Inter'] font-medium mb-1">
              Let's build something great.
            </p>
            <a href="mailto:alifidianf@gmail.com" className="text-[#4338ca] text-sm font-['Inter'] hover:underline">
              alifidianf@gmail.com
            </a>
          </div>
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
      </footer>
    </main>
  );
}
