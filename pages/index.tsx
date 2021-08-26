import type { NextPage } from 'next'
import Layout from '../components/Layout/index'
import Header from '../components/Home/Header'
import ProjectList from '../components/Home/ProjectList'
import AboutMe from '../components/Home/AboutMe'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <div style={{marginBottom:"100px"}}></div>
        <AboutMe />
        <div style={{marginBottom:"100px"}}></div>
        <ProjectList />
        <div style={{marginBottom:"100px"}}></div>
      </Layout>
    </>
  )
}

export default Home
