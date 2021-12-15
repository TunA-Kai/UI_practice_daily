import { Popover } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { BsBook, BsPeople } from 'react-icons/bs'
import { FiHeadphones } from 'react-icons/fi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IconType } from 'react-icons'

interface ListItemProps {
  color: string
  hover: string
  details: {
    title: string
    description: string
  }
  Icon: IconType
}

const ListItem: React.FC<ListItemProps> = ({
  color,
  hover,
  Icon,
  details: { title, description },
}) => {
  return (
    <li
      className={`px-4 pt-4 pb-2 flex gap-4 rounded-lg max-w-sm cursor-pointer ${hover}`}
    >
      <div className={`${color} self-start rounded-full p-2`}>
        <Icon className='text-2xl' />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  )
}

interface Dropdown1474Props {}

const Dropdown1474: React.FC<Dropdown1474Props> = ({}) => {
  return (
    <div className='w-full h-screen py-16 px-16 bg-slate-200 flex justify-end rounded-2xl'>
      <Popover className='relative'>
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`${
                open ? 'bg-slate-50' : ''
              } flex items-center gap-3 p-2 rounded-md`}
            >
              <span>Resources</span>
              <FaChevronDown className={`${open ? 'rotate-180' : ''}`} />
            </Popover.Button>
            <Popover.Panel className='absolute z-10 grid grid-cols-1 p-8 w-max top-12 right-0 rounded-xl bg-white shadow-lg lg:grid-cols-2'>
              <div className='mb-4 lg:mb-0'>
                <h3 className='font-semibold text-lg'>HELP</h3>
                <ul onClick={() => close()}>
                  <ListItem
                    Icon={BsBook}
                    details={{
                      title: 'Help Center',
                      description:
                        'Learn how to sign up, install and use our products.',
                    }}
                    color='bg-pink-100'
                    hover='hover:bg-pink-100'
                  />
                  <ListItem
                    Icon={BsPeople}
                    details={{
                      title: 'Community Forum',
                      description: 'Learn, share and connect with other users.',
                    }}
                    color='bg-slate-100'
                    hover='hover:bg-slate-100'
                  />
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-lg'>LEARN</h3>
                <ul onClick={() => close()}>
                  <ListItem
                    Icon={FiHeadphones}
                    details={{
                      title: 'Podcasts',
                      description:
                        'Learn how to sign up, install and use our products.',
                    }}
                    color='bg-green-100'
                    hover='hover:bg-green-100'
                  />
                  <ListItem
                    Icon={HiOutlineChatAlt2}
                    details={{
                      title: 'Community Forum',
                      description: 'Learn, share and connect with other users.',
                    }}
                    color='bg-amber-100'
                    hover='hover:bg-amber-100'
                  />
                </ul>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}

export default Dropdown1474
