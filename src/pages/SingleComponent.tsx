import { useParams } from 'react-router-dom'
import components from '../data'

interface SingleComponentProps {}

function SingleComponent({}: SingleComponentProps) {
  const { id } = useParams()
  const { component } = components.find(comp => comp.id === Number(id)) || {}
  return <div className='w-full min-h-screen pt-28 pb-12'>{component}</div>
}

export default SingleComponent
