import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Testimonials from '../components/testimonials'
import NewsLetter from '../components/newsletter'
import Footer from '../components/footer'

import prisma from '../lib/prisma'

export default function Home({data}) {
  return (
    <>
      <div className={styles.container}>
        <div >
          <h4 className={styles.welcomeHead}>Welcome</h4>
          <p>Thank you for visiting my store - feel free to browse around.
            Explore new products and see what we have launched recently.</p>
        </div>
      </div>
      <Testimonials data={data}/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export  async function getServerSideProps() {
  const res = await prisma.testimony.findMany()
  const data = await JSON.stringify(res)
  return {
      props:{data}
  }
}

