import './App.css'
import { Link } from 'react-router'

function App() {
  return (
    <>

<div className="portfolio-page-body">

      <main>
      <div className="wrapper phone-wrapper">

<div className="left-container">

<h1 className='text-3xl'>Hi, I'm Rene, a front-end web developer specializing in JavaScript and React.</h1>

<div className="left-bottom-container mr-10 text-center">
     <Link to='/project'><button className='bg-blue-500 px-6 py-3 rounded-2xl text-white font-bold w-sm'>Click to see my latest webshop project!<br/><small>(Built with ReactJS and Tailwind)</small></button></Link>

<div className="links mt-6 w-full">
  <a href="https://www.linkedin.com/in/rene-reede/" target='_blank'><button className='mt-6 bg-gray-700 rounded-md text-white py-3 px-3 mr-6'>LinkedIn</button></a>
  <a href="https://github.com/rreede" target='_blank'><button className='mt-3 bg-gray-700 rounded-md text-white py-3 px-3'>GitHub</button></a>
</div>
</div>
</div>
        <div className="bottom-container">

          <div className="right-bottom-container">


            <p>
          My core skills include:<br/> <strong>HTML</strong>, <strong>CSS</strong> (Tailwind), <strong>JavaScript</strong>, and <strong>React.js</strong>.
I also have experience with <strong>Next.js</strong>, <strong>MySQL</strong>, <strong>PHP</strong>, and<strong> Node.js</strong>.
</p>
<br/>
<p>
I studied Applied Computer Science in Tallinn University. This includes studying web development, web design, graphic design and sound design. I also have experience in photography and photo editing.</p>
<p><br/>
I have professional experience in sales and as an e-commerce manager. My responsibilities included communicating with webshop owners and customer service teams, maintaining bug registers, creating marketing material for leads, recommending website improvements to enhance functionality and user experience and optimizing SEO performance.</p>
          </div>
          </div>

        </div>
        </main>
        </div>
    </>
  )
}

export default App
