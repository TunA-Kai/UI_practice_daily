import cards from '../data'
import Card from './Card'

interface CardContainerProps {}

function CardContainer({}: CardContainerProps) {
  return (
    <div className='grid gap-8 max-w-md mx-auto py-10 sm:max-w-3xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl'>
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  )
}

export default CardContainer
