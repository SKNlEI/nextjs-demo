import React, { useState } from 'react'

const Fetch = () => {
  const [list, setList] = useState([])
  const handleClick = async () => {
    const data = await fetch('/api/linkList', { method: 'POST'})
    const result = await data.json()
    setList(result.obj)
  }

  return (
    <div>
      {list.length === 0 && <button onClick={handleClick}>点击获取数据</button>}
      {list.map((v: any, i) => <h3 key={i}>{v.name}</h3>)}
    </div>
  )
}

export default Fetch