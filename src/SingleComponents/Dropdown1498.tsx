import {
  BsArrowLeft,
  BsFillCaretDownFill,
  BsCheckCircleFill,
} from 'react-icons/bs'
import { RiMoonClearLine } from 'react-icons/ri'
import { FiFlag } from 'react-icons/fi'
import { Switch, Listbox, Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IconType } from 'react-icons'

interface DropdownProps {}

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const allTypes = [
  { id: 1, type: 'Product Discovery', unavailable: false },
  { id: 2, type: 'Software', unavailable: false },
  { id: 3, type: 'Service Management', unavailable: true },
  { id: 4, type: 'Business', unavailable: false },
]

function Dropdown1498({}: DropdownProps) {
  const [enabled, setEnabled] = useState(false)
  const [selectedType, setSelectedType] = useState(allTypes[0])

  return (
    <div className='w-full h-full py-16 bg-pink-50 flex items-center justify-center rounded-2xl'>
      <form className='bg-gray-50 px-6 pb-6 pt-8 rounded-2xl shadow-xl'>
        <fieldset className=' flex flex-col mb-4'>
          <legend className='font-semibold mb-3'>Days</legend>
          {days.map(day => (
            <label
              key={day}
              className='flex items-center gap-2 py-3 px-2 border border-gray-50 rounded hover:bg-pink-100 hover:border-pink-300'
            >
              <input
                type='checkbox'
                name='fav_day'
                defaultChecked={
                  day.startsWith('W') || day.startsWith('F') ? true : false
                }
                value={day}
                className='rounded-sm text-pink-400 focus:ring-2 focus:ring-pink-200 focus:ring-offset-0'
              />
              <span>{day}</span>
            </label>
          ))}
        </fieldset>
        <button
          type='reset'
          className='bg-gray-700 text-gray-50 px-4 py-2 rounded transition hover:bg-gray-900 active:scale-95'
        >
          Remove all filters
        </button>
      </form>

      <div className='bg-gray-50 p-4 rounded-2xl ml-3 w-60 self-start shadow-lg'>
        <div className='mb-6 flex items-center'>
          <button>
            <BsArrowLeft className='text-2xl' />
          </button>
          <span className='text-lg font-bold ml-2'>Settings</span>
        </div>
        <div className='flex items-center justify-between mb-2'>
          <span className='font-semibold'>Smart sorting</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`bg-gray-50 border-2 border-pink-300 relative inline-flex items-center h-3 rounded-full w-10 
            transition duration-500 top-[2px]`}
          >
            <span
              className={`${
                enabled ? 'translate-x-5' : '-translate-x-1'
              } inline-block w-5 h-5 transition duration-500 bg-pink-400 rounded-full`}
            ></span>
          </Switch>
        </div>

        <SimpleMenu
          Icon={RiMoonClearLine}
          title='Toggle theme'
          options={['Night Owl', 'After Night']}
        />

        <SimpleMenu
          Icon={FiFlag}
          title='Choose language'
          options={['Vietnamese', 'English', 'Japanese']}
        />

        <Listbox
          value={selectedType}
          onChange={setSelectedType}
          as='div'
          className='relative'
        >
          <Listbox.Button
            className='flex items-center justify-between w-full py-2 border border-gray-50 rounded 
          hover:bg-pink-100 hover:border-pink-300'
          >
            <span className='font-semibold'>{selectedType.type}</span>
            <BsFillCaretDownFill className='inline-block' />
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-90'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-300'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-90'
          >
            <Listbox.Options className='flex flex-col items-start absolute bg-gray-50 w-full z-10 shadow-lg border border-pink-300'>
              {allTypes.map(type => (
                <Listbox.Option
                  key={type.id}
                  value={type}
                  disabled={type.unavailable}
                  className={({ active }) =>
                    `${
                      active ? 'bg-pink-100' : ''
                    } w-full py-2 flex justify-between items-center pr-2 cursor-pointer`
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span className={type.unavailable ? 'text-gray-300' : ''}>
                        {type.type}
                      </span>
                      {selected && <BsCheckCircleFill />}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  )
}

interface SimpleMenuProps {
  Icon: IconType
  title: string
  options: string[]
}

function SimpleMenu({ Icon, title, options }: SimpleMenuProps) {
  return (
    <Menu as='div' className='relative group'>
      <Menu.Button
        className='flex items-center justify-between w-full py-2 border border-gray-50 rounded 
        hover:bg-pink-100 hover:border-pink-300
        group-hover:bg-pink-100 group-hover:border-pink-300'
      >
        <div>
          <Icon className='inline-block text-lg mr-2' />
          <span className='font-semibold'>{title}</span>
        </div>
        <BsFillCaretDownFill className='inline-block' />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0 scale-90'
        enterTo='opacity-100 scale-100'
        leave='ease-in duration-300'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-90'
      >
        <Menu.Items className='flex flex-col items-start absolute bg-gray-50 w-full z-10 shadow-lg border border-pink-300'>
          {options.map(opt => (
            <Menu.Item key={opt}>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-pink-100' : ''} w-full py-2`}
                >
                  {opt}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown1498
