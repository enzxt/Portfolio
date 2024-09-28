import { useState } from 'react';
import './app.css'
import RightArrow from './assets/RightArrow'
import AppBackground from './Components/AppBackground'
import DarkAppBackground from './Components/DarkAppBackground'
import Sun from './assets/Sun';
import Moon from './assets/Moon';

export function App() {
  const [dark, setDark] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const darkMode = () => {

    setDark(!dark);
    if (!dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const sendMessage = () => {
    console.log("Name: " + name + "\n" + "Email: " + email + "\n" + "Inquiry: " + inquiry);
  }

  return (
    <>
      {dark && <AppBackground />}
      {dark && <DarkAppBackground />}
      <button onClick={darkMode} className="dark:text-white p-3">
        {dark ? <Sun /> : <Moon />}
      </button>
      {/* these two divs are for the inner square */}
      <div className={dark ? 'dark' : ''}>
        <div className="w-screen h-screen absolute flex justify-center items-start text-black top-40">
          <div className="w-2/3 max-h-max overflow-auto ">
            <div className="flex space-x-3">
              <p className="text-5xl font-medium dark:text-white">Enzo Tinard</p>
              {/* <Snail /> */}
            </div>
            <div className="p-10">
              {/* Skills section */}
              <div className="flex">
                <div className="text-3xl mb-4 dark:text-white">Skills</div>
                <div className="relative top-2 left-5"><button><RightArrow /></button></div>
              </div>
              <div className="ml-4 mb-6 dark:text-white">
                Languages
                <div className="ml-6 mt-2 dark:text-white">C++, C#, Java, Python, JS/TS</div>
              </div>

              <div className="ml-4 mb-6 dark:text-white">
                Backend:
                <div className="ml-6 mt-2 dark:text-white">
                  1. Frameworks
                  <p className="ml-4 mt-1 dark:text-white">Spring Boot, ASP.NET, Express</p>
                </div>
                <div className="ml-6 mt-4 dark:text-white">
                  2. Database
                  <p className="ml-4 mt-1 dark:text-white">MySQL, Mongo, Firestore</p>
                </div>
              </div>

              {/* Frontend section */}
              <div className="ml-4 mb-6 dark:text-white">
                Frontend:
                <div className="ml-6 mt-2 dark:text-white">
                  1. Frameworks
                  <p className="ml-4 mt-1 dark:text-white">React, Angular, Vue, Tailwind</p>
                </div>
                <div className="ml-6 mt-4 dark:text-white">
                  2. Tools
                  <p className="ml-4 mt-1 dark:text-white">Vite</p>
                </div>
              </div>

              {/* Projects section */}
              <div className="text-3xl mb-4 dark:text-white">Projects</div>
              <div className="ml-4 mb-6 dark:text-white">
                Portfolio
              </div>
              <div className="ml-4 mb-6 dark:text-white">
                Capstone
              </div>
              <div className="ml-4 mb-6 dark:text-white">
                SVG
              </div>
              <div className="ml-4 mb-6 dark:text-white">
                Online Store
              </div>
              <div className="ml-4 mb-6 dark:text-white">
                Minesweeper
              </div>
              {/* Contact section */}
              <div className="text-3xl mb-4 dark:text-white">Links</div>
              <div className="ml-4 mb-6">
                <div className="flex p-2 dark:text-white">
                  <RightArrow />
                  <a href="https://www.linkedin.com/in/enzo-tinard-2a0b56261/" className=" dark:text-white" target="_blank">Linkedin</a>
                </div>
                <div className="flex p-2 dark:text-white">
                  <RightArrow />
                  <a href="https://github.com/enzxt" className=" dark:text-white" target="_blank">GitHub</a>
                </div>
              </div>
              <div className="text-3xl mb-4 dark:text-white">Contact</div>
              <div className="ml-5">
                <div>
                  <label htmlFor="name" className="dark:text-white">Name:</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="p-2 text-black bg-transparent focus:outline-none dark:text-white"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName((e.target as HTMLInputElement).value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="dark:text-white">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 text-black bg-transparent focus:outline-none dark:text-white"
                    placeholder="Enter your email/ phone"
                    value={email}
                    onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                  />
                </div>
                <div>
                  <label htmlFor="inquiry" className="dark:text-white">Inquiry:</label>
                  <input
                    type="text"
                    id="inquiry"
                    name="inquiry"
                    className="p-2 text-black bg-transparent focus:outline-none dark:text-white"
                    placeholder="Enter your message"
                    value={inquiry}
                    onChange={(e) => setInquiry((e.target as HTMLInputElement).value)}
                  />
                </div>
                <button className="underline mt-2 dark:text-white" onClick={sendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
