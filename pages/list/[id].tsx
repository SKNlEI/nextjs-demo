import type { GetStaticPathsContext } from 'next'
import { useRouter } from 'next/router'

const List = (props: any) => {
  const router = useRouter()

  console.log(props)

  const goBack = () => {
    router.push('/')
  }

  return (
    <div>
      <div>展示的id===={props.id}</div>
      <button onClick={goBack}>点击回到首页</button>
    </div>
  )
}

export default List

// 这种是预渲染使用
export async function getStaticPaths(context: GetStaticPathsContext) {
  console.log('context', context)
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: 'dsf' } }
    ],
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  console.log('getStaticProps', context)
  return {
    props: { id: context.params.id }
  }
}