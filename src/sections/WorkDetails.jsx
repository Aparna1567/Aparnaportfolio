// import { useParams } from "react-router-dom";
// import { projects } from "../constants";
// import { Icon } from "@iconify/react";

// const WorkDetails = () => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id.toString() === id);

//   if (!project) {
//     return (
//       <div className="flex items-center justify-center h-screen text-2xl font-semibold">
//         Project Not Found
//       </div>
//     );
//   }

//   return (
//     <section className="min-h-screen py-20 px-6 md:px-10">
//       {/* Main Container */}
//       <div className="max-w-6xl mx-auto space-y-12">
        
//         {/* Project Image */}
//         {/* <div className="w-full h-[380px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
//           <img
//             src={project.image}
//             alt={project.name}
//             className="object-cover w-full h-full"
//           />
//         </div> */}
//         {/* Project Image */}
// <div className="w-full rounded-xl overflow-hidden shadow-xl aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] bg-gray-200">
//   <img
//     src={project.image}
//     alt={project.name}
//     className="w-full h-full object-cover"
//   />
// </div>


//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold text-black">
//           {project.name}
//         </h1>

//         {/* Description */}
//         {/* <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
//           {project.description}
//         </p> */}


//     <ul className="text-lg text-gray-700 leading-relaxed max-w-4xl space-y-2 list-disc ml-6">
//   {project.description.map((point, index) => (
//     <li key={index}>{point}</li>
//   ))}
// </ul>
//         {/* Tech Stack */}
//         <div className="pt-4">
//           <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

//           <div className="flex flex-wrap gap-3">
//             {project.frameworks.map((tech) => (
//               <span
//                 key={tech.id}
//                 className="px-4 py-2 text-sm bg-black text-white rounded-full"
//               >
//                 {tech.name}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Project Link */}
//         <div className="pt-6">
//           <a
//             href={project.href || "#"}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl transition ${
//               project.href
//                 ? "bg-black hover:bg-gray-900"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Visit Live Project
//             <Icon icon="lucide:arrow-up-right" className="size-5" />
//           </a>

//           {!project.href && (
//             <p className="text-sm text-gray-500 mt-2">
//               (Live link not added yet)
//             </p>
//           )}          
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WorkDetails;


import { useParams, Link } from "react-router-dom";
import { projects } from "../constants";
import { Icon } from "@iconify/react";

const WorkDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl font-semibold">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-6 md:px-10">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Project Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-xl aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] bg-gray-200">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          {project.name}
        </h1>

        {/* Description as bullet points */}
        <ul className="text-lg text-gray-700 leading-relaxed max-w-4xl space-y-2 list-disc ml-6">
          {project.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* Tech Stack / Skills Used */}
        {project.frameworks && project.frameworks.length > 0 && (
          <div className="pt-4">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.frameworks.map((tech) => (
                <span
                  key={tech.id}
                  className="px-4 py-2 text-sm bg-black text-white rounded-full"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Live Project Link */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:gap-4">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl bg-black hover:bg-gray-900 transition"
            >
              Visit Live Project
              <Icon icon="lucide:arrow-up-right" className="size-5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl bg-gray-400 cursor-not-allowed">
              Visit Live Project
              <Icon icon="lucide:arrow-up-right" className="size-5" />
            </div>
          )}

          {!project.href && (
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              (Live link not added yet)
            </p>
          )}

          {/* Back to Portfolio Button */}
          <Link
            to="/"
            className="inline-block mt-4 md:mt-0 px-6 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
