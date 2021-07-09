
import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next';
export interface IProps {
  testData: any
}

const ServerRender = (props: IProps) => {
  const { testData = { obj: [] } } = props
  
  useEffect(() => {
    console.log('展示数据了')
  }, [])

  console.log(props)

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

export default ServerRender

// 服务端渲染
export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log('contentx====>', context)
  const res = await fetch('https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList')
  const testData = await res.json()

  return {
    props: {
      testData
    }
  }
}