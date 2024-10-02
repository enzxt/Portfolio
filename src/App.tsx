import { useState } from 'react';
import './app.css';
import RightArrow from './assets/RightArrow';
import AppBackground from './Components/AppBackground';
import DarkAppBackground from './Components/DarkAppBackground';
import Sun from './assets/Sun';
import Moon from './assets/Moon';
import ExternalLink from './assets/ExternalLink';
import firestore from './firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

export function App() {
  // Defining the available sections
  type Section = 'skills' | 'projects' | 'links';
  const [dark, setDark] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isTimeout, setIsTimeout] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState('');

  const contactCollectionRef = collection(firestore, "messages");

  const createMessage = async () => {
    if (!isTimeout) {
      setIsTimeout(true);
      try {
        const docRef = await addDoc(contactCollectionRef, {
          email,
          inquiry,
          name
        });
        console.log("MEssage made in db with ID:", docRef.id);
        setSuccessMessage("Message sent!")
      } catch (error) {
        console.error("Error creating message:", error);
        setErrorMessage("Error from Firebase.");

      }
      setTimeout(() => setIsTimeout(false), 10000);

    } else {
      console.log("Error, you're abusing the send button >:(")
      setErrorMessage("Too many attempts.")
    }
  }

  // Single state object to manage all sections
  const [openSections, setOpenSections] = useState<{ [key in Section]: boolean }>({
    skills: false,
    projects: false,
    links: false,
  });

  // Function to toggle any section dynamically
  const toggleSection = (section: Section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const darkMode = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <>
      {dark ? <DarkAppBackground /> : <AppBackground />}
      <button onClick={darkMode} className="dark:text-white p-3 fixed top-4 left-4 z-50">
        <div className="">{dark ? <Sun /> : <Moon />}</div>
      </button>

      {/* Main container */}
      <div className={dark ? 'dark' : ''}>
        <div className="w-screen h-screen absolute flex justify-center items-start text-black top-40">
          <div className="w-2/3 max-h-max overflow-auto">
            <div className="flex space-x-3">
              <p className="text-5xl font-medium dark:text-white">Enzo Tinard</p>
            </div>
            <div className="p-10">

              {/* Skills section */}
              <div className="flex items-center">
                <div className="text-3xl mb-4 dark:text-white">Skills</div>
                <button onClick={() => toggleSection('skills')} className="relative top-2 left-5">
                  {/* Rotate the arrow when open */}
                  <div className={openSections.skills ? 'transform rotate-90 transition-transform duration-300 relative -top-3 dark:text-white' : 'transition-transform duration-300 relative -top-3 dark:text-white'}>
                    <RightArrow />
                  </div>
                </button>
              </div>

              {/* Conditionally render the Skills content */}
              {openSections.skills && (
                <div>
                  {/* Languages Section */}
                  <div className="ml-4 mb-6 dark:text-white">
                    Languages:
                    <div className="ml-6 mt-2 dark:text-white">C++, C#, Java, Python, JS/TS</div>
                  </div>

                  {/* Backend Section */}
                  <div className="ml-4 mb-6 dark:text-white">
                    Backend
                    <div className="ml-6 mt-2 dark:text-white">
                      1. Frameworks
                      <p className="ml-4 mt-1 dark:text-white">Spring Boot, ASP.NET, Express</p>
                    </div>
                    <div className="ml-6 mt-4 dark:text-white">
                      2. Database
                      <p className="ml-4 mt-1 dark:text-white">MySQL, Mongo, Firestore</p>
                    </div>
                  </div>

                  {/* Frontend Section */}
                  <div className="ml-4 mb-6 dark:text-white">
                    Frontend
                    <div className="ml-6 mt-2 dark:text-white">
                      1. Frameworks
                      <p className="ml-4 mt-1 dark:text-white">React, Angular, Vue, Tailwind</p>
                    </div>
                    <div className="ml-6 mt-4 dark:text-white">
                      2. Tools
                      <p className="ml-4 mt-1 dark:text-white">Vite</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Projects section */}
              <div className="flex items-center">
                <div className="text-3xl mb-4 dark:text-white">Projects</div>
                <button onClick={() => toggleSection('projects')} className="relative top-2 left-5">
                  <div className={openSections.projects ? 'transform rotate-90 transition-transform duration-300 relative -top-3 dark:text-white' : 'transition-transform duration-300 relative -top-3 dark:text-white'}>
                    <RightArrow />
                  </div>
                </button>
              </div>

              {/* Conditionally render the Projects content */}
              {openSections.projects && (
                <div className="ml-4 mb-6 dark:text-white space-y-2">
                  <div>Portfolio</div>
                  <div>Capstone</div>
                  <div>SVG</div>
                  <div>Online Store</div>
                  <div>Minesweeper</div>
                </div>
              )}

              {/* Links section */}
              <div className="flex items-center">
                <div className="text-3xl mb-4 dark:text-white">Links</div>
                <button onClick={() => toggleSection('links')} className="relative top-2 left-5">
                  <div className={openSections.links ? 'transform rotate-90 transition-transform duration-300 relative -top-3 dark:text-white' : 'transition-transform duration-300 relative -top-3 dark:text-white'}>
                    <RightArrow />
                  </div>
                </button>
              </div>

              {/* Conditionally render the Links content */}
              {openSections.links && (
                <div className="ml-4 space-y-2">
                  <div className="flex dark:text-white">
                    <a href="https://www.linkedin.com/in/enzo-tinard-2a0b56261/" className=" dark:text-white" target="_blank"><ExternalLink /></a>
                    <a href="https://www.linkedin.com/in/enzo-tinard-2a0b56261/" className=" dark:text-white" target="_blank">Linkedin</a>
                  </div>
                  <div className="flex dark:text-white">
                    <a href="https://github.com/enzxt" className=" dark:text-white" target="_blank"><ExternalLink /></a>
                    <a href="https://github.com/enzxt" className=" dark:text-white" target="_blank">GitHub</a>
                  </div>
                </div>
              )}

            </div>

            {/* Contact section */}
            <div className="text-3xl mb-4 dark:text-white">Contact</div>
            <div className="ml-5">
              <div>
                <label htmlFor="name" className="dark:text-white">Name:</label>
                <input
                  type="text"
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
                  placeholder="Enter your email"
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
              <button className="underline mt-2 dark:text-white" onClick={createMessage}>Send</button>
              {errorMessage && isTimeout && (
                                <p className="text-red-500 text-sm">{errorMessage}</p>
                            )}
              {successMessage && isTimeout && (
                                <p className="text-green-500 text-sm">{successMessage}</p>
                            )}
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
