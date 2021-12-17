const inputStyle =
  'w-3/4 p-3 border-gray-200 rounded-md transition hover:border-pink-400 focus:ring-0 focus:border-pink-400'

interface ContactProps {}

function Contact({}: ContactProps) {
  return (
    <div className='flex items-center justify-center w-full min-h-screen pt-28 pb-12'>
      <form
        onSubmit={e => e.preventDefault()}
        className='flex flex-col items-center gap-8 text-center max-w-lg'
      >
        <h2 className='font-semibold text-2xl'>Send me a message</h2>
        <p className='-mt-2 mb-6'>
          Feel free to get in touch with me with anything related to
          UIPracticeDaily or you can just say hi 👋 I will get back to you as
          soon as I can.
        </p>
        <input
          type='text'
          name='name'
          placeholder='Name'
          className={inputStyle}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={inputStyle}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className={inputStyle}
        />
        <textarea
          name='message'
          placeholder='Message'
          className={inputStyle + ' resize-none h-32'}
        ></textarea>

        <button
          type='submit'
          className='w-3/4 p-3 rounded-md shadow-sm bg-gradient-to-r from-purple-400 to-pink-400 text-white transition duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-md hover:shadow-purple-500/30'
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
