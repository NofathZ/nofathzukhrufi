import type { NextPage } from 'next'
import Layout from '../components/Layout/index'
import Header from '../components/Home/Header'
import ProjectList from '../components/Home/ProjectList'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <ProjectList />
      </Layout>
    </>
  )
}

export default Home
