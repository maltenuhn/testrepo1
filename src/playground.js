import { View } from 'utopia-api'
import '../public/globals.css'

const colours = [
  '#eae4e9',
  '#fff1e6',
  '#fde2e4',
  '#fad2e1',
  '#e2ece9',
  '#bee1e6',
  '#f0efeb',
  '#cddafd',
  '#cddafd',
]

const rowStyle = {
  height: 50,
  background: 'white',
  border: '1px dashed lightgrey',
  padding: '2px 16px',
  display: 'flex',
  gap: 31,
}

const Box = (props) => (
  <div
    style={{
      background: colours[Math.round(9 * Math.random())],
      padding: 4,
      color: '#00000088',
      ...props.style,
    }}
  >
    {Math.round(100 * Math.random())}
  </div>
)

export var Playground = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        contain: 'layout',
      }}
    >
      Boxes, gap
      <div style={{ display: 'flex', gap: 8 }}>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <p>
        Various permutations of alignItems and
        justifyContent
      </p>
      <div
        style={{
          height: 50,
          background: 'white',
          border: '1px dashed lightgrey',
          padding: '2px 16px',
          gap: 31,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div
        style={{
          ...rowStyle,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <div
        style={{
          ...rowStyle,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <p>justify-self, align-self, both</p>
      <div
        style={{
          ...rowStyle,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box
          style={{
            background: 'black',
            alignSelf: 'flex-end',
          }}
        />
        <Box />
        <Box />
        <Box />
      </div>
      <div
        style={{
          ...rowStyle,
          height: 70,
          alignItems: 'flex-start',
          justifyContent: 'xstretch',
        }}
      >
        <Box />
        <Box />
        <Box
          style={{
            background: 'black',
            alignSelf: 'flex-end',
          }}
        />
        <Box />
      </div>
      <p>dimensions (grow, base, fixed)</p>
      <div
        style={{
          ...rowStyle,
          justifyContent: 'space-between',
        }}
      >
        <Box style={{ width: 50 }} />
        <Box
          style={{ flexBasis: 80, borderRadius: '16px' }}
        />
        <Box style={{ minWidth: 100 }} />
      </div>
      <div
        style={{
          ...rowStyle,
        }}
      >
        <Box style={{ width: 50 }} />
        <Box
          style={{ flexBasis: 80, borderRadius: '16px' }}
        />
        <Box style={{ minWidth: 100 }} />
      </div>
    </div>
  )
}
