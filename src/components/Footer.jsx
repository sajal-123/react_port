import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div name="Footer" className='border-t-orange-200 min-h-44 w-full bg-slate-100 dark:bg-gradient-to-b dark:to-black dark:from-gray-800 flex flex-col items-center mx-auto px-2'>
      <footer className=" py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="dark:text-white">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p>I am smart working guy who explore and innovate new ideas.</p>
                    </div>
                    <div className="dark:text-white">
                        <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                        <ul>
                            <li><a href="https://twitter.com/SajalAgarw36877"
                            target="_blank" className="dark:text-gray-400 ">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/sajal-agarwal-960176262/"
                            target="_blank" className="dark:text-gray-400 ">Linkedin</a></li>
                            <li><a href="https://www.instagram.com/sajalagarwal3/"
                            target="_blank" className="dark:text-gray-400 ">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="dark:text-white">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>Email: sajalag78@example.com</p>
                        <p>Phone No. : +91 9045770801</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
