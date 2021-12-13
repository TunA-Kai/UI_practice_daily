import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {}

function SearchBar({}: SearchBarProps) {
  return (
    <div className='inline-flex items-center gap-3 relative text-gray-400 focus-within:text-pink-500'>
      <FaSearch className='absolute transform transition' />
      <input
        type='text'
        placeholder='Search'
        className='w-64 py-2 pl-8 text-purple-700 border-0 border-b 
        focus:ring-0 focus:outline-none focus:border-pink-300'
      />
    </div>
  )
}

export default SearchBar
