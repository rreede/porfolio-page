import './App.css'
import { Link } from 'react-router'

function App() {
  return (
    <>
   
      <main>
      <div className="wrapper">
        <h1 className='text-3xl'>Hi, I'm Rene, a front-end web developer specialized in JavaScript / React.</h1>

        <div className="bottom-container mt-6">
          <div className="left-bottom-container">
          <h2>Here is my latest project:</h2>
           <Link to=''><button className='bg-blue-500 px-6 py-3 rounded-2xl text-white font-bold'>Phone web shop</button></Link>
          </div>

          <div className="right-bottom-container">
              <p>I finished Applied Computer Science degree in Tallinn university which included studying web development, graphic design and sound design.</p>
              <p>My main strengths are HTML, CSS (tailwind), JavaScript and ReactJs.</p>
              <p>I also have some experience with NextJS, MySQL, PHP and NodeJS.</p>
            <p></p>
          </div>
          </div>
        </div>
        </main>
       
    </>
  )
}

export default App
