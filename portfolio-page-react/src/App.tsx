import './App.css'
import { Link } from 'react-router'

function App() {
  return (
    <>
      <main>
      <div className="wrapper">

<div className="left-container">

<h1 className='text-2xl'>Hi, I'm Rene, a front-end web developer specialized<br/>in JavaScript / React.</h1>

<div className="left-bottom-container mr-10 text-center">
     <Link to='/project'><button className='bg-blue-500 px-6 py-3 rounded-2xl text-white font-bold w-sm'>Click to see my latest phone web shop project!<br/><small>(Built with ReactJS and Tailwind)</small></button></Link>
</div>
</div>
        <div className="bottom-container">

          <div className="right-bottom-container">
          <p>I earned a degree in Applied Computer Science from Tallinn University, where I studied web development, graphic design, web design and sound design.</p><br/> <p>I have professional experience in sales, customer service, and e-commerce management.</p><br/> <p>My core skills include HTML, CSS (Tailwind), JavaScript, and React.js.</p><br/> <p>I also have experience with Next.js, MySQL, PHP, and Node.js.</p>
          </div>
          </div>

        </div>
        </main>
       
    </>
  )
}

export default App
