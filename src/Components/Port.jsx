import React from 'react'
import './Port.css'

export default function Port() {
    return (
        <div>
            <section className='Navbar'>


                <nav className="bg-gray-900 py-3 w-full">
                    <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-12 2xl:px-16">
                        <img
                            src="/images/mern.png"
                            alt="MERN Logo"
                            className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px] h-auto object-contain"
                        />
                    </div>
                </nav>

            </section>

            <section>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 2xl:px-20 2xl:py-10">

                    {/* Left Side - Text */}
                    <div className="text-center md:text-left flex flex-col md:ml-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900">
                            Hello, I am
                        </h2>
                        <p className="font-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-[#e66c8e]">
                            SRINITHI
                        </p>
                        <h5 className="text-md sm:text-lg md:text-xl 2xl:text-2xl text-gray-700">
                            MERN Stack Developer
                        </h5>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:block w-1/3 lg:w-1/4 2xl:w-1/5 pt-3">
                        <img src="/images/sri1.png" alt="Profile" className="w-full h-auto object-cover" />
                        <hr className="mt-4" />
                    </div>

                </div>



                <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 2xl:gap-x-16 gap-6">

                    {/* Who Am I? */}
                    <div className="bg-white p-4 lg:p-5 shadow-lg rounded-lg lg:h-[330px] xl:h-[350px] 2xl:h-auto flex flex-col justify-between ">
                        <h3 className="text-lg md:text-xl xl:text-2xl !font-bold !text-[#e66c8e]">Who Am I?</h3>
                        <strong className="block text-gray-700 text-sm lg:text-base xl:text-lg">
                            A Web Designer / MERN Stack Developer & Coding Enthusiast
                        </strong>
                        <p className="text-gray-600 text-sm md:text-base xl:text-lg">
                            Building Scalable Web Apps With JavaScript, MongoDB, Express, React, and Node.js.
                            Passionate About Coding, Innovative Solutions, and Continuous Learning.
                        </p>
                    </div>

                    {/* Personal Info */}
                    <div className="bg-white p-6 xl:p-5 shadow-lg rounded-lg lg:h-[330px] xl:h-[350px] 2xl:h-auto flex flex-col justify-between">
                        <h3 className="text-lg md:text-xl xl:text-2xl !font-bold !text-[#e66c8e]">Personal Info</h3>

                        {/* Grid for alignment */}
                        <div className="grid grid-cols-2 gap-y-1 gap-x-1 text-gray-700 text-[13px] lg:text-[14px] xl:text-lg">
                            <strong>Name:</strong> <span className="text-gray-600">Srinithi</span>
                            <strong>BirthDate:</strong> <span className="text-gray-600">29.05.2004</span>
                            <strong>Email:</strong>
                            <span className="text-gray-600  underline text-[13px] !lg:text-sm xl:text-[16px]  break-words">srinithi.tec@gmail.com</span>
                            <strong>Phone:</strong> <span className="text-gray-600">8xxxxxx362</span>
                            <strong>Address:</strong> <span className="text-gray-600">Trichy, TN</span>
                            <strong>Nationality:</strong> <span className="text-gray-600">India</span>
                            <strong>Languages:</strong> <span className="text-gray-600">English, Tamil</span>
                            <strong>LinkedIn:</strong>
                            <a href="https://www.linkedin.com/in/k-srinithi-29-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                className="!text-gray-500 underline text-[13px] !lg:text-sm xl:text-[14px]  break-words">
                                linkedin.com/in/srinithi
                            </a>
                        </div>
                    </div>


                    {/* My Expertise */}
                    <div className="bg-white p-4 lg:p-5 shadow-lg rounded-lg lg:h-[330px] xl:h-[350px] 2xl:h-auto flex flex-col justify-between">
                        <h3 className="text-lg md:text-xl xl:text-2xl !font-bold !text-[#e66c8e]">My Expertise</h3>
                        <p className="text-gray-700 text-sm md:text-base lg:text-[14px] xl:text-base ">
                            <strong className="flex items-center gap-2 ">
                                <i className="fa-solid fa-layer-group "></i> Full Stack Developer
                            </strong>
                            <span className="text-gray-600">Expert in Front-end and Back-end With Database and Testing Skills.</span>
                            <br /><br />

                            <strong className="flex items-center gap-2 ">
                                <i className="fa-brands fa-bootstrap "></i> Bootstrap
                            </strong>
                            <span className="text-gray-600">Front-End Framework for Building Responsive Web Design.</span>
                            <br /><br />

                            <strong className="flex items-center gap-2 ">
                                <i className="fa-brands fa-github text-gray-800"></i> Tools & DevOps
                            </strong>
                            <span className="text-gray-600">GitHub - Web Platform for Hosting, Sharing & Collaboration.</span>
                        </p>
                    </div>

                </div>

                {/* Resume */}

                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My Resume</h2>

                    {/* Expertise & Education Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                        {/* Expertise */}
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 underline">Expertise</h3>
                            <div className="mt-4 space-y-4 text-gray-700 text-sm sm:text-base">
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> FrontEnd
                                    </strong>
                                    Integrating Next.js Routing with React, Bootstrap & Tailwind CSS, Typescript (basics).
                                </p>
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> BackEnd
                                    </strong>
                                    Secure APIs & Real-Time Apps with Node.js, Express.js, JWT, WebSockets.
                                </p>
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> Database
                                    </strong>
                                    Efficient Data Modeling & Queries with MongoDB & Mongoose.
                                </p>
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> Performance
                                    </strong>
                                    Optimized Code, Fast Rendering, and Scalability.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 underline">Education</h3>
                            <div className="mt-4 space-y-4 text-gray-700 text-sm sm:text-base">
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> 2021-2024
                                    </strong>
                                    <h6 className="font-semibold">B.A Public Administration</h6>
                                    <small>Bharathiar University, Coimbatore - Secured 80%</small>
                                </p>
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> 2019-2021
                                    </strong>
                                    <h6 className="font-semibold">HSC</h6>
                                    <small>State Board, Tamil Nadu - Secured 87%</small>
                                </p>
                                <p>
                                    <strong className="flex items-center gap-2">
                                        <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> 2018-2019
                                    </strong>
                                    <h6 className="font-semibold">SSLC</h6>
                                    <small>State Board, Tamil Nadu - Secured 83%</small>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="mt-8 bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 underline">Project</h3>

                        {/* Employee Management System */}
                        <div className="mt-4">
                            <h5 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> Employee Management System (Admin Panel)
                            </h5>
                            <h6 className="text-sm text-gray-600">January - February (2025)</h6>

                            <span className="block text-gray-700 mt-2">
                                <b>Description:</b> Developed a MERN stack-based system to manage employee data efficiently.

                            </span>

                            <p className="mt-3 text-gray-700">
                                <b>Key Contributions:</b>
                                <ul className="list-none mt-1 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i>  Built a responsive dashboard using React.js & Bootstrap for an intuitive admin interface.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i>  Developed CRUD functionalities to manage employee details (Add, Update, Delete).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Designed a minimalist login system where admins log in/out by clicking on an employee image card.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Integrated MongoDB with Mongoose for structured data management.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Optimized API performance with Node.js and Express.js.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto">
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">Skills</h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-6 mt-4 justify-items-center">
                        {[
                            { src: "/images/html.png", name: "HTML 5" },
                            { src: "/images/cs.png", name: "CSS 3" },
                            { src: "/images/js.png", name: "JavaScript" },
                            { src: "/images/boot.png", name: "Bootstrap" },
                            { src: "/images/react.png", name: "React.js" },
                            { src: "/images/tailwind.png", name: "Tailwind CSS" },
                            { src: "/images/node.png", name: "Node.js" },
                            { src: "/images/exp.png", name: "Express.js" },
                            { src: "/images/mongo.png", name: "MongoDB" },
                            { src: "/images/mongoose.png", name: "Mongoose" },
                            { src: "/images/git.png", name: "Git" },
                            { src: "/images/github.png", name: "GitHub" }
                        ].map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={skill.src} alt={skill.name} className="w-16 h-16 md:w-20 md:h-20" />
                                <h6 className="text-gray-700 text-sm md:text-base mt-2">{skill.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="container mx-auto mt-5">
                    <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10 ">Tools And Software</h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-6 mt-4 justify-items-center">
                        {[
                            { src: "/images/vsc.png", name: "VS Code" },
                            { src: "/images/gpt.png", name: "ChatGPT" },
                            { src: "/images/goog.png", name: "Chrome" },
                            { src: "/images/comp.png", name: "MongoDB" },
                            { src: "/images/pman.png", name: "Postman" }
                        ].map((tool, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={tool.src} alt={tool.name} className="w-16 h-16 md:w-20 md:h-20" />
                                <h6 className="text-gray-700 text-sm md:text-base mt-2">{tool.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <footer>
                <div className="map container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.948815606872!2d78.67414519688539!3d10.79744145960333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56bd5aca4d1%3A0x94811cb77468869e!2s94%2C%20Kallar%20St%2C%20Ponnagar%20Extension%2C%20Karumandapam%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620001!5e0!3m2!1sen!2sin!4v1738819370901!5m2!1sen!2sin"
                            className="w-full sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[900px] 2xl:w-[1000px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] rounded-lg shadow-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


            </footer>
        </div>


    )
}
{/* <div className='card2 row col'>
                        <h3 className='card-body'><u>Projects</u></h3>

                        <div className="bg-white p-6 shadow-lg rounded-lg">
                            <h5 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                <i className="fa-solid fa-circle-dot text-[#e66c8e]"></i> Employee Management System (Admin Panel)
                            </h5>
                            <h6 className="text-sm text-gray-600">January - February (2025)</h6>

                            <span className="block text-gray-700 mt-2">
                                <b>Description:</b> Developed a **MERN stack-based** admin panel to manage employee records, track attendance, and streamline HR operations.
                            </span>

                            <p className="mt-3 text-gray-700">
                                <b>Key Contributions:</b>
                                <ul className="list-none mt-1 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Built a responsive dashboard using React.js & Tailwind CSS for an intuitive admin interface.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Developed CRUD functionalities to manage employee details (Add, Update, Delete).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Designed a minimalist login system where admins log in/out by clicking on an employee image card.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Integrated MongoDB with Mongoose for structured data management.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="fa-solid fa-star text-[#e66c8e]"></i> Optimized API performance with Node.js and Express.js.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div> */}
