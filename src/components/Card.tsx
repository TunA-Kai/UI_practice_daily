import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardIn } from '../Interface'
import CardLoader from './CardLoader'

interface CardProps extends CardIn {}

function Card({ imageUrl, projectName, date, id }: CardProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <article
      className='rounded-md overflow-hidden shadow-md bg-white
      relative group'
    >
      <div className='overflow-hidden'>
        {isLoading && <CardLoader />}
        <img
          src={imageUrl}
          alt={projectName}
          className={`group-hover:scale-125 transform transition duration-500 ${
            isLoading ? 'hidden' : ''
          }`}
          onLoad={() => setTimeout(() => setIsLoading(false), 3000)}
        />
      </div>
      <div className='p-3'>
        <h4 className='font-bold text-lg'>{projectName}</h4>
        <p className='text-sm text-gray-400'>{date}</p>
      </div>
      <Link
        to={`/components/${id}`}
        className='absolute bottom-8 right-3 px-4 py-2 bg-white text-white font-semibold rounded-md
            shadow-sm transition-all transform scale-50 duration-500
          group-hover:bg-purple-500 group-hover:scale-100 group-hover:bottom-4
          hover:!bg-purple-700 hover:shadow-md'
      >
        Preview
      </Link>{' '}
    </article>
  )
}

export default Card
