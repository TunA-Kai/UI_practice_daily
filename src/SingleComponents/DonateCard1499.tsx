import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface ButtonProps {
  className?: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, className, ...others }) => {
  return (
    <button
      className={className + ` font-semibold border-2 rounded-md py-2`}
      {...others}
    >
      {children}
    </button>
  )
}

const donateAmount = [12, 30, 40, 50, 60]

function DonateCard() {
  const [donate, setDonate] = useState(donateAmount[0])

  return (
    <div className='w-full h-full py-16 bg-[#ebebfb] flex items-center justify-center rounded-2xl'>
      <form
        className='w-96 bg-gray-50 px-8 py-10 font-semibold rounded-2xl shadow-lg'
        onSubmit={e => e.preventDefault()}
      >
        <p>Select gift frequency</p>
        <div className='p-[6px] mt-3 mb-6 bg-[#EBEBFB] grid grid-cols-2 gap-2 fonts rounded-md border border-[#98a1caac]'>
          <button className='bg-gray-50 font-semibold py-2 rounded-md'>
            Monthly
          </button>
          <button>One time</button>
        </div>
        <p>Select amount</p>
        {/* <div className='gap-2 mt-2 mb-4 grid grid-cols-5'>
          {donateAmount.map(amount => (
            <Button
              key={amount}
              type='button'
              className={
                donate === amount
                  ? 'bg-[#1D2047] text-gray-50 border-[#1D2047]'
                  : ''
              }
              onClick={() => setDonate(amount)}
            >{`$${amount}`}</Button>
          ))}
        </div> */}
        <RadioGroup
          value={donate}
          onChange={setDonate}
          className='gap-2 mt-2 mb-4 grid grid-cols-5'
        >
          <RadioGroup.Label className='sr-only'>Donate Amount</RadioGroup.Label>
          {donateAmount.map(amount => (
            <RadioGroup.Option
              key={amount}
              value={amount}
              className={({ active, checked }) =>
                `${
                  checked ? 'bg-[#1D2047] text-gray-50 border-[#1D2047]' : ''
                } text-center font-semibold border-2 rounded-md py-2 cursor-pointer`
              }
            >
              <RadioGroup.Label as='span'>{`$${amount}`}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </RadioGroup>
        <label className='flex gap-2 items-start'>
          <input
            type='checkbox'
            className='mt-1 rounded-sm text-indigo-600 focus:ring focus:ring-offset-0 focus:ring-[#EBEBFB]'
          />
          <span>
            Yes, I'll generously add {`$${(donate * 0.025).toFixed(2)}`} each
            month to cover the transaction fees
          </span>
        </label>
        <label className='block mt-6 mb-4'>
          <span>Name</span>
          <input
            type='text'
            required
            placeholder='Enter your name'
            className='block mt-1 w-full rounded-md
            focus:border-indigo-300 focus:ring focus:ring-[#ebebfb]'
          />
        </label>
        <label className='block'>
          <span>Email</span>
          <input
            type='email'
            required
            placeholder='Enter your email'
            className='block mt-1 w-full rounded-md
            focus:border-indigo-300 focus:ring focus:ring-[#ebebfb]'
          />
        </label>
        <Button
          type='submit'
          className='w-full bg-[#1D2047] text-gray-50 border-[#1D2047] transition hover:bg-gray-50 hover:text-[#1d2047] mt-10 mb-6'
        >
          Donate now
        </Button>
        <p>
          By donating, you agree to our{' '}
          <a href='#' className='text-blue-700 underline'>
            terms of service
          </a>{' '}
          and{' '}
          <a href='#' className='text-blue-700 underline'>
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}

export default DonateCard

// function Button({
//   children,
//   className = '',
//   ...others
// }: {
//   children: string
//   className?: string
//   type: 'button' | 'submit' | 'reset'
//   onClick?: () => void
// }) {
//   return (
//     <button
//       className={className + ` font-semibold border-2 rounded-md py-2`}
//       {...others}
//     >
//       {children}
//     </button>
//   )
// }
