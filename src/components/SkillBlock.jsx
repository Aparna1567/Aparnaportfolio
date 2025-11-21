// import React from "react";

// const SkillBlock = () => {
//   return (
//     <div className="w-full max-w-xl bg-[#1e1e1e] rounded-xl shadow-lg border border-gray-700 overflow-hidden">
//       {/* Top bar */}
//       <div className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border-b border-gray-700">
//         <span className="w-3 h-3 rounded-full bg-red-500"></span>
//         <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
//         <span className="w-3 h-3 rounded-full bg-green-500"></span>
//       </div>

//       {/* Code content */}
//       <pre className="p-4 text-sm text-gray-200">
//         <code>
// {`const developer = {
//   name: "Your Name",
//   role: "Frontend Developer",
//   skills: [
//     "React", 
//     "JavaScript",
//     "Three.js",
//     "GSAP",
//     "TailwindCSS",
//     "Node.js",
//   ],
//   focussedOn: "Building immersive 3D + interactive web experiences",
// };`}
//         </code>
//       </pre>
//     </div>
//   );
// };

// export default SkillBlock;



// import React from "react";

// const skills = [
//   { name: "React", level: 90 },
//   { name: "JavaScript", level: 88 },
//   { name: "Three.js", level: 85 },
//   { name: "GSAP", level: 82 },
//   { name: "Tailwind CSS", level: 92 },
//   { name: "Node.js", level: 70 },
// ];

// const SkillBlock = () => {
//   return (
//     <div className="w-full max-w-xl bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b] border border-gray-700 rounded-2xl shadow-xl p-6">
//       {/* Header */}
//       <div className="flex items-center gap-2 mb-6">
//         <span className="text-emerald-400 text-lg">⚡</span>
//         <h2 className="text-gray-100 text-xl font-semibold">Tech Stack & Skills</h2>
//       </div>

//       {/* Skill Bars */}
//       <div className="space-y-5">
//         {skills.map((skill, index) => (
//           <div key={index} className="w-full">
//             <div className="flex justify-between mb-1">
//               <span className="text-gray-300 text-sm">{skill.name}</span>
//               <span className="text-gray-400 text-sm">{skill.level}%</span>
//             </div>

//             <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
//               <div
//                 style={{ width: `${skill.level}%` }}
//                 className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full transition-all duration-700"
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Glow */}
//       <div className="mt-6 w-full h-1 rounded-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-xl"></div>
//     </div>
//   );
// };

// export default SkillBlock;


// import React from "react";

// const skills = [
//   "React",
//   "JavaScript",
//   "Three.js",
//   "GSAP",
//   "Tailwind CSS",
//   "Node.js",
// ];

// const SkillBlock = () => {
//   return (
//     <div className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {skills.map((skill, i) => (
//         <div
//           key={i}
//           className="
//             backdrop-blur-xl bg-white/5
//             border border-white/10
//             shadow-xl rounded-xl
//             p-5 flex items-center justify-center
//             text-gray-100 text-lg font-medium
//             hover:bg-white/10 hover:scale-105
//             transition-all duration-300
//           "
//         >
//           {skill}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SkillBlock;

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SkillBlock() {
  const marqueeRef = useRef(null);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "AWS",
    "Appwrite",
    "Firebase",
    "Git",
    "Docker",
    "GSAP",
    "Redux",
    "CI/CD",
    "REST APIs",
  ];

  useEffect(() => {
    const element = marqueeRef.current;

    // Infinite Marquee Animation
    gsap.to(element, {
      xPercent: -50,
      duration: 18,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full py-14 bg-gray-50 overflow-hidden border-t border-b">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Skills & Technologies
      </h2>

      <div className="relative w-full overflow-hidden select-none pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex gap-10 whitespace-nowrap"
          style={{ width: "200%" }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <span
              key={idx}
              className="px-6 py-2 text-lg font-medium text-gray-700
              bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

