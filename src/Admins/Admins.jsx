import { Layout } from 'antd'
import React from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const Admins = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <Layout className='!min-h-screen'>
      <SideBar isCollapsed={collapsed}/>
      <Layout>
        <Header setCollapsed={setCollapsed}/>
        <Content>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Admins