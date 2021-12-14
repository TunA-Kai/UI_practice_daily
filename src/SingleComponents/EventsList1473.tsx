import { Menu } from '@headlessui/react'
import { FaEllipsisH, FaCalendarPlus, FaShare } from 'react-icons/fa'

const events = [
  {
    id: 1,
    date: 'TODAY',
    hour: 17,
    title: 'Bergen International Film Festival',
    description:
      'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.',
  },
  {
    id: 2,
    date: '22 - 31 OCT',
    hour: 10,
    title: 'Wool week',
    description:
      'ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.',
  },
  {
    id: 3,
    date: '22 - 31 OCT',
    hour: 19,
    title: 'Light park at Bergenhus Fortress',
    description:
      'Fusce luctus convallis condimentum. Morbi orci justo, ullamcorper vitae posuere ut, viverra ut erat. Cras sed metus nibh. Nullam libero.',
  },
  {
    id: 4,
    date: '13 - 31 OCT',
    hour: 10,
    title: 'Gingerbread City 2021',
    description:
      'Curabitur quis nunc quis libero condimentum blandit at at purus. Vestibulum dolor erat, efficitur porta enim in, malesuada porttitor turpis.',
  },
]

interface EventIn {
  id: number
  date: string
  hour: number
  title: string
  description: string
}

interface EventProps {
  event: EventIn
}

const Event: React.FC<EventProps> = ({ event }) => {
  const { date, hour, title, description } = event
  const bgColors = [
    'bg-slate-200',
    'bg-red-200',
    'bg-amber-200',
    'bg-lime-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-violet-200',
  ]
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)]

  return (
    <div className='max-w-3xl p-3 flex items-center gap-5 bg-slate-50 rounded-lg transition duration-300 hover:shadow-md'>
      <div
        className={
          `w-28 h-24 shrink-0 flex flex-col items-center justify-center rounded-md` +
          ` ${bgColor}`
        }
      >
        <p className='font-semibold'>{date}</p>
        <p className='text-4xl font-bold font-serif tracking-tighter'>{`${hour}:00`}</p>
      </div>
      <div>
        <h3 className='text-xl font-serif font-bold mb-2'>{title}</h3>
        <p>{description}</p>
      </div>
      <Menu as='div' className='relative self-start'>
        <Menu.Button className='ml-auto p-2 rounded-full transition duration-100 hover:bg-slate-700 hover:text-slate-50'>
          <FaEllipsisH />
        </Menu.Button>
        <Menu.Items className='bg-slate-200/10 backdrop-blur-sm absolute w-max -translate-x-40 -translate-y-28 border-2 border-slate-300 rounded-md'>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? bgColor : ''
                } flex gap-2 items-center p-2 w-full`}
              >
                <FaCalendarPlus />
                Add to calender
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? bgColor : ''
                } flex gap-2 items-center p-2 w-full`}
              >
                <FaShare />
                Share with friends
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

const EventsList1473: React.FC = () => {
  return (
    <div className='w-full h-full py-16 px-4 bg-slate-300 flex items-center justify-center rounded-2xl lg:px-0'>
      <div>
        <h2 className='font-bold text-3xl font-serif'>Events</h2>
        <div className='mt-6 flex flex-col gap-4'>
          {events.map(e => (
            <Event key={e.id} event={e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsList1473
