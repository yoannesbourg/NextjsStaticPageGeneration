import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export const blogPosts = [
  {id: '1', title: 'hello-world', content: 'lorem-ipsum'},
  {id: '2', title: 'good-afternoon-world', content: 'lorem-ipsum'},
  {id: '3', title: 'bye-bye-world', content: 'lorem-ipsum'},
]

export default function Home({postsList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
    
      {postsList.map(singlePost => <Link key={singlePost.id} href={`/${singlePost.id}`}><a>{singlePost.title}</a></Link>)}

 
      </main>
      
    </div>
  )
}



export function getStaticProps(context) {
  const postsList = blogPosts
  return {
    props: { postsList }
  }
}


export const getPostData = (id) => {
  const title = blogPosts.find(element => element.id = id)
  return title
}