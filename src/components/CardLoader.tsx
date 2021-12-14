import ContentLoader from 'react-content-loader'

const CardLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={448}
    height={336}
    viewBox='0 0 448 336'
    backgroundColor='#f3f3f3'
    foregroundColor='#dddddd'
  >
    <rect x='0' y='0' rx='0' ry='0' width='448' height='336' />
  </ContentLoader>
)

export default CardLoader
