import { RadioGroup } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IconType } from 'react-icons'
import {
  FaRegSadTear,
  FaRegFrown,
  FaRegMeh,
  FaRegSmile,
  FaRegLaughBeam,
} from 'react-icons/fa'

const emotions: { [key: string]: IconType } = {
  terrible: FaRegSadTear,
  bad: FaRegFrown,
  okay: FaRegMeh,
  good: FaRegSmile,
  amazing: FaRegLaughBeam,
}

interface Feedback1497Props {}

const Feedback1497: React.FC<Feedback1497Props> = ({}) => {
  const [emotion, setEmotion] = useState('good')

  return (
    <div className='w-full h-full py-16 px-4 bg-slate-200 flex items-center justify-center rounded-2xl lg:px-0'>
      <form className='bg-slate-50 shadow-lg p-12 rounded-xl'>
        <h3 className='font-serif font-bold text-2xl mb-3'>Give feedback</h3>
        <fieldset>
          <legend className='font-semibold'>
            What do you think of the issue search experience within Jira
            projects?
          </legend>
          <RadioGroup
            value={emotion}
            onChange={setEmotion}
            className='grid grid-cols-5 gap-2 my-5'
          >
            {Object.keys(emotions).map(emo => (
              <RadioGroup.Option value={emo} key={emo} as={Fragment}>
                {({ checked, active }) => {
                  const Icon = emotions[emo]
                  return (
                    <div
                      className={
                        `bg-white p-4 flex flex-col justify-center items-center gap-3 border-2 border-slate-200` +
                        `${checked ? ' shadow-lg' : ' text-gray-400'}`
                      }
                    >
                      <Icon className='text-4xl' />
                      <span className={`font-semibold text-sm`}>
                        {emo.replace(emo[0], emo[0].toUpperCase())}
                      </span>
                    </div>
                  )
                }}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </fieldset>

        <label>
          <p className='mb-2'>What are the main reasons for your rating?</p>
          <textarea
            name='reasons'
            className='w-full h-20 resize-none rounded-md'
          ></textarea>
        </label>

        <label className='flex items-center mt-4 mb-2 font-semibold'>
          <input
            type='checkbox'
            name=''
            className='focus:ring-0 mr-3 rounded-sm'
          />
          <p>
            I may be contacted about this feedback.{' '}
            <span className='text-blue-600 cursor-pointer'>Privacy Policy</span>
          </p>
        </label>

        <label className='flex items-center font-semibold'>
          <input
            type='checkbox'
            name=''
            className='focus:ring-0 mr-3 rounded-sm'
          />
          <p>
            I'd like to help improve by joining the{' '}
            <span className='text-blue-600 cursor-pointer'>
              Research Group.
            </span>
          </p>
        </label>

        <div className='mt-10 flex justify-end items-center gap-4'>
          <button
            type='submit'
            className='font-semibold text-white bg-blue-600 rounded-md px-6 py-3 text-lg hover:bg-blue-800 transition'
          >
            Submit
          </button>
          <button
            type='button'
            className='font-semibold rounded-md px-6 py-3 text-lg bg-white hover:bg-blue-100 transition'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Feedback1497
