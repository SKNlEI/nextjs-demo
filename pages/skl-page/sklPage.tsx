import React from 'react'

interface IProps {
  testData: any
}

const SklPage = (props: IProps) => {
  // console.log(props)
  const { testData = { obj: [] } } = props
  return (
    <div style={{ fontSize: '20px', wordBreak: 'break-all' }}>
      {testData.obj.map((v: any, i: number) => (
        <div key={i}>
          <h3>链接名字：{v.name}</h3>
          <h4 style={{ color: 'gray' }}>链接地址：{v.url}</h4>
        </div>
      ))}
    </div>
  )
}

export default SklPage

export async function getStaticProps() {
  // https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList
  // http://localhost:3000/api/hello
  const res = await fetch('https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList')
  const testData = await res.json()

  return {
    props: {
      testData
    }
  }
}
