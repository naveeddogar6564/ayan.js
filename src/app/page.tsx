import react from "react"
import image from "next/image"
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-rounded-full mx-auto" src="/0 (51).jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          My name is naveed sarwar dogar.i am working in govt sector.i am very intrested in generative artificial intelligence.thats why i join generative Ai course under the supervision of Sir, Mian Asif Langrah.He is very kind and helpfull person for students.we all are very happy to learning them  
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Naveed Sarwar Dogar
        </div>
        <div className="text-blk-700 dark:text-slate-500">
          Student Ai course Rahim yar khan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page