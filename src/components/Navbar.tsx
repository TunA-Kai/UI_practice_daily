import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaGithubAlt } from 'react-icons/fa'
import { ReactComponent as Logo } from '../images/uidesigndaily-logo.svg'
import { useState } from 'react'

interface NavbarProps {}
const linkClassName = 'hover:text-pink-700'
const iconClassName = 'cursor-pointer hover:text-purple-700'
const bar =
  'w-[25px] h-[3px] bg-gray-900 rounded-sm my-[5px] transition-all transform duration-500'

function Navbar({}: NavbarProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      className='flex justify-between items-center 
      pr-6 py-3 shadow-sm 
      fixed bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-lg
      w-full h-16 z-50'
    >
      <Link to='/' className='pl-6'>
        <Logo fill='#7C3AED' stroke='' />
      </Link>
      <ul
        className={
          `flex flex-col fixed gap-8 top-16 bg-gray-50 w-full h-[calc(100vh-theme(spacing.16))]
           items-center justify-start transform transition-all duration-500
           sm:static sm:bg-transparent sm:w-max sm:h-auto sm:flex-row ` +
          `${isActive ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`
        }
      >
        <li className='mt-20 sm:mt-0'>
          <a
            href='https://www.uidesigndaily.com/'
            rel='noreferrer'
            target='_blank'
            className='hover:text-pink-700'
          >
            Designs
          </a>
        </li>
        <li>
          <NavLink to='/about' className={linkClassName}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={linkClassName}>
            Contact
          </NavLink>
        </li>
        <li className='flex gap-12 text-xl mt-16 sm:hidden'>
          <FaGithubAlt className={iconClassName} />
          <FaTwitter className={iconClassName} />
          <FaFacebookF className={iconClassName} />
        </li>
      </ul>
      <button
        className='sm:hidden text-2xl'
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={bar + `${isActive ? ' translate-y-2 rotate-45' : ''}`}
        ></div>
        <div className={bar + `${isActive ? ' opacity-0' : ''}`}></div>
        <div
          className={bar + `${isActive ? ' -translate-y-2 -rotate-45' : ''}`}
        ></div>
      </button>
    </nav>
  )
}

export default Navbar
