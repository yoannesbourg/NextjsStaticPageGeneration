import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { blogPosts, getPostData } from '../pages/index'
import Link from 'next/Link'


export default function Post({singlePost}) {
  console.log(singlePost)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
        <Link href={'/'}><a>Go home</a></Link>
        <h1>{singlePost.title}</h1>
        <p>{singlePost.content}</p>
      </main>
      
    </div>
  )
}

export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({
    params: {id: post.id}
  }))

  return { paths, fallback: false }
}


export function getStaticProps({params}) {
  const singlePost = getPostData(params.id)
  return {
    props: { singlePost }
  }
}
