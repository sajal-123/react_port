import React from 'react'
import './style.css';
import blog_1 from '../assets/Images/blog_1.png'
import E_com from '../assets/Images/E_com.png'
import E_Learn from '../assets/Images/E_Learn.png'
import Todo_2 from '../assets/Images/Todo_2.png'
import micro from '../assets/Images/Micro_loop.png'
const Projects = () => {
    let Projects = [
        { id: 1, description: 'transformative co-creation experience with simultaneous collaboration on shared content.', title: 'Microsoft_Loop', link: 'https://github.com/sajal-123/Micro_loop_2.0', src: micro },
        { id: 2, description: 'Built using Next.js and Node.js/Express.js, the platform can efficiently handle a growing number of users and courses.', title: 'Learn_first', link: 'https://github.com/sajal-123/Learn_Manage_Sys', src: E_Learn },
        { id: 3, description: "An full stack Blogging platform to explore world with new Technologies and update Yourself.", title: 'Blogs update', link: 'https://github.com/sajal-123/blog_1', src: blog_1 },
        { id: 4, description: 'E-commerce Platform with to Buy and sell Product having User friendly interface with seamless payment system.', title: 'E-Commerce Platform', link: 'https://github.com/sajal-123/Full_Stack_Ecommerce_Application', src: E_com },
        { id: 5, description: 'In the realme of productivity tools, our to-do app stands out for its intuitive design and powerful features.', title: 'Todo In Next', link: 'https://github.com/sajal-123/Todo-2', src: Todo_2 },
    ];
    return (
        <div name="Projects" className='flex flex-col items-center justify-center  min-h-screen w-full dark:bg-gradient-to-b dark:to-black dark:from-gray-800 bg-slate-100 md:pb-16'>
            <div className='mb-4 py-4'>
                <div className="flex items-center">
                    <h1 className='heading text-3xl font-bold md:text-5xl h-16 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400'>projects </h1>
                    <div className="ml-2 w-10 border-b-4 border-black dark:border-slate-400"></div>
                    <div className="ml-2 w-4 border-b-4 border-black dark:border-slate-400"></div>
                    <div className="ml-1 w-1 border-b-4 border-black dark:border-slate-400"></div>
                </div>

            </div>
            <div className='min-h-screen m-2 w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:px-16 px-8'>
                {Projects.map(project => (
                    <div key={project.id} className='p-6 md:w-[360px] md:h-[440px] border dark:border-indigo-300 w-[320px] m-2 rounded-2xl  shadow-[inset_-12px_-8px_40px_#46464620] hover:shadow-2xl hover:shadow-indigo-50 flex flex-col items-center'>
                        <div className='overflow-hidden relative'>
                            <img src={project.src} height={280} width={360} className={`image_dark shadow rounded-lg overflow-hidden border`} />
                            <a href={project.link} target='_blank' className=' font-semibold cursor-pointer absolute code h-10 bg-slate-400  rounded-md items-center pt-2 px-2'>GoTo Projects</a>
                        </div>
                        <div className="mt-6">
                            <h4 className="font-bold text-xl bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{project.title}</h4>
                            <p className="mt-2 dark:text-gray-400">{project.description}
                            </p>
                            <div className="mt-5">
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Projects
