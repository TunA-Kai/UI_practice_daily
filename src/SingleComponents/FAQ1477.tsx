import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import {
  BsInfoCircle,
  BsCashCoin,
  BsTruck,
  BsReplyAll,
  BsChevronDown,
} from 'react-icons/bs'
import { FiHeadphones } from 'react-icons/fi'

const sections = [
  {
    id: 0,
    section: 'Frequently asked questions',
    questions: [],
    answers: [],
    icon: BsInfoCircle,
  },
  {
    id: 1,
    section: 'Payment and invoice',
    questions: [
      'What payment solutions can I choose from?',
      'How does payment via Walley Checkout work?',
      'How is my invoice sent via Walley Checkout?',
    ],
    answers: [
      'Donec eros justo, fringilla eget mattis a, scelerisque maximus felis. Suspendisse facilisis tempus lacus vel fermentum. Nam nunc sapien, consectetur at consequat vitae, scelerisque sed sem. Pellentesque vitae mauris ut.',
      'Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna',
      'Sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat',
    ],
    icon: BsCashCoin,
  },
  {
    id: 2,
    section: 'Deliveries',
    questions: [],
    answers: [],
    icon: BsTruck,
  },
  {
    id: 3,
    section: 'Return & Crediting',
    questions: [],
    answers: [],
    icon: BsReplyAll,
  },
  {
    id: 4,
    section: 'Complaint',
    questions: [],
    answers: [],
    icon: FiHeadphones,
  },
]

interface ButtonProps {
  title: string
  Icon: IconType
  handleClick: () => void
  active: boolean
}

const Button: React.FC<ButtonProps> = ({
  title,
  Icon,
  handleClick,
  active,
}) => {
  return (
    <button
      className={`flex items-center gap-2 p-3 rounded-lg w-full hover:bg-violet-50 ${
        active ? '!bg-white' : ''
      }`}
      onClick={handleClick}
    >
      <Icon />
      <span className='font-semibold'>{title}</span>
    </button>
  )
}

interface FAQ1477Props {}

const FAQ1477: React.FC<FAQ1477Props> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(1)
  const { section, questions, answers } = sections[activeIndex]

  return (
    <div className='w-full h-full py-16 px-4 bg-violet-50 flex justify-center gap-10 rounded-2xl'>
      <div className='self-start shrink-0 p-8 bg-violet-100 rounded-xl shadow-md space-y-2'>
        {sections.map((sec, index) => (
          <Button
            key={sec.id}
            title={sec.section}
            Icon={sec.icon}
            active={activeIndex === index}
            handleClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className='shrink-0 w-[36rem]'>
        <h2 className='font-bold text-xl'>{section}</h2>
        <div className='flex flex-col'>
          {questions.map((question, index) => {
            return (
              <Disclosure key={Math.random() * 100_000}>
                {({ open }): JSX.Element => (
                  <div className='border-b-2 border-violet-500 pt-3 last:border-b-0'>
                    <Disclosure.Button className='flex justify-between items-center w-full mb-3'>
                      <span className='font-semibold'>{question}</span>
                      <BsChevronDown
                        className={`${open ? 'rotate-180' : ''}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='mb-3 ml-9'>
                      {answers[index]}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ1477
