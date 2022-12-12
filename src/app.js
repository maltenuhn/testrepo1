import '../public/globals.css'
import { FlexCol } from './utils'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.jpg?raw=true'
        alt='Utopia logo'
        style={{ height: '40%' }}
      ></img>
    </FlexCol>
  )
}
