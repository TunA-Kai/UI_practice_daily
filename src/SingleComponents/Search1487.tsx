import { FaSearch } from 'react-icons/fa'

interface Search1487Props {}

const tags = [
  'dinner',
  'quick dinners',
  'reasonably priced',
  'kid friendly',
  'pasta',
  'get ingredients',
  'weekday',
  'fish',
  'vegetarian',
  'supper',
  'salads',
  'chicken',
  'grill',
  'taco',
  'pizza',
  'seafood',
  'beef',
  'dessert',
]

const Search1487: React.FC<Search1487Props> = ({}) => {
  return (
    <div className='w-full h-full py-16 px-4 bg-[#212c36] flex items-center justify-center rounded-2xl lg:px-0'>
      <div className='border-8 border-[#5C6C8C] p-12 text-[#88A4DF] bg-[#141A25] rounded-xl space-y-4 max-w-3xl'>
        <p>All recipes/ Vegetarian</p>
        <h3 className='font-bold text-2xl'>All recipes / Vegetarian</h3>
        <div className='flex items-center relative'>
          <FaSearch className='absolute left-4 text-xl text-[#88A4DF]' />
          <input
            type='search'
            placeholder='Search hundreds of recipes'
            className='w-full pl-12 text-[#88A4DF] placeholder-[#88a4df] bg-[#212c36] rounded-sm p-4 focus:ring-0 focus:border-[#88a4df]'
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map(tag => (
            <span
              key={tag}
              className='px-5 py-2 bg-[#212c36] rounded-full cursor-default hover:text-[#212c36] hover:bg-[#88a4df]'
            >
              {tag.replace(tag[0], tag[0].toUpperCase())}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search1487
