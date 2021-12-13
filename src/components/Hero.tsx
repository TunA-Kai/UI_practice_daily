interface HeroProps {}

function Hero({}: HeroProps) {
  return (
    <section
      className='container mx-auto mb-28 shadow-lg
      relative top-20 h-32 rounded-2xl
      flex justify-center items-center
      bg-gradient-to-r from-purple-500 to-pink-500 
      text-white'
    >
      <h1 className='text-2xl sm:text-3xl uppercase font-black tracking-wide mr-8'>
        Welcome to my website
      </h1>
      <div
        className='flex flex-col items-center
        border border-pink-300 rounded-2xl
        px-6 py-1 
        absolute top-3 right-3'
      >
        <span className='uppercase text-xs sm:text-sm'>day</span>
        <span className='font-bold text-base sm:text-lg -mt-1'>1500</span>
      </div>
    </section>
  )
}

export default Hero
