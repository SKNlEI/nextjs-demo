import type { GetStaticPaths, GetStaticPathsContext } from 'next'
import { useRouter } from 'next/router'

const List = (props: any) => {
  const router = useRouter()
  console.log(router)

  const goBack = () => {
    router.push('/?a=10')
  }

  return (
    <div>
      <div>展示的id===={1}</div>
      <button onClick={goBack}>返回首页</button>
    </div>
  )
}

export default List

// export async function getStaticPaths(context: GetStaticPathsContext) {
//   console.log('context', context)
//   return {
//     paths: [
//       { params: ['1', '2'] },
//     ],
//     fallback: false
//   }
// }

// export async function getStaticProps(context: any) {
//   console.log('getStaticProps', context)
//   return {
//     props: { id: context.params.id }
//   }
// }