import './style.css';
import Myself from '../assets/Images/Myself/Myself2.png'
const About = () => {
    return (
        <div name="About" className='min-h-screen w-full bg-slate-100 bg-gradient-to-b dark:to-black dark:from-gray-800 light: flex max-md:flex-col mx-auto px-2'>
            <div className='md:w-[30%] w-full flex items-center justify-center mt-10 md:mt-0 md:min-h-screen'>
                <div className='h-[70%] w-[80%] overflow-hidden rounded-md bg-gradient-to-br to-purple-600 from-blue-500 hover:bg-gradient-to-bl'>
                    <img src={Myself} alt="" />
                </div>
            </div>
            <div className=' min-h-screen mx-auto md:px-8 px-4 flex flex-col items-center justify-center md:w-[60%] w-full gap-4'>
                <div>
                    <div className="flex items-center">
                        <h1 className='heading text-3xl font-bold md:text-5xl h-16 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-blue-400'>About Me </h1>
                        <div className="ml-2 w-10 border-b-4 border-black dark:border-slate-400"></div>
                        <div className="ml-2 w-4 border-b-4 border-black dark:border-slate-400"></div>
                        <div className="ml-1 w-1 border-b-4 border-black dark:border-slate-400"></div>
                    </div>                </div>
                <p className='dark:text-white'>I am a dedicated web developer studying at NIT Delhi, skilled in React.js for dynamic front-end experiences and Python with Flask for robust back-end solutions, including MongoDB for data management. I'm passionate about leveraging machine learning techniques to analyze data and derive valuable insights for impactful projects.</p>
                <br />
                <p className='dark:text-white mb-3 md:mb-6'>Outside of coding, I find joy in strategic games like chess and staying active with badminton and cricket. Yoga is my go-to for maintaining physical and mental well-being, ensuring a balanced lifestyle that enhances my creativity and productivity in both technical and personal endeavors.</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
                    <div className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
                        React Js
                    </div>

                    <div className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
                        Tailwind
                    </div>

                    <div className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
                        NodeJs
                    </div>

                    <div className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200">
                        Web Socket
                    </div>
                    <button type="button" className="relative px-3 py-2 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 hover:bg-gray-800 bg-gray-500 text-gray-50">Flask...
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
                    </button>
                    <button type="button" className="relative px-3 py-2 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 hover:bg-gray-800 bg-gray-500 text-gray-50">NextJs...
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default About
