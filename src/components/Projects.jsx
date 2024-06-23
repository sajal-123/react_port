import React from 'react'
import './style.css';
import chat from '../assets/Images/Chat_main.png'
import job_1 from '../assets/Images/job_2.png'
import Todo_1 from '../assets/Images/Todo_1.png'
import Todo_2 from '../assets/Images/Todo_2.png'
import Todo_3 from '../assets/Images/Todo_3.png'
const Projects = () => {
    let Projects = [
        { id: 1, description: 'An real time conversation platform to interact one on one.', title: 'Chatting App', link: 'https://github.com/sajal-123/MERN-Project-1', src: chat },
        { id: 2, description: 'helpfull platform that easy to grab job in fast manner.', title: 'Job Seeking App', link: 'https://github.com/sajal-123/JObPortal', src: job_1 },
        { id: 3, description: "Take control of your time and tasks with precision using our to-do app's comprehensive set of tools and features.", title: 'Todo In react', link: 'https://github.com/sajal-123/Todo-1', src: Todo_1 },
        { id: 4, description: 'In the realm of productivity tools, our to-do app stands out for its intuitive design and powerful features.', title: 'Todo In Next', link: 'https://github.com/sajal-123/Todo-2', src: Todo_2 },
        { id: 5, description: 'Seamlessly schedule and manage tasks with our to-do app, designed to elevate your efficiency and organization.', title: 'Another Todo', link: 'https://github.com/sajal-123/Todo-3', src: Todo_3 },
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
