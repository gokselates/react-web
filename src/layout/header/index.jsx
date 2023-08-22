import { Layout, Menu } from 'antd'
import React from 'react'

export default function Header() {
  return (
    <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Layout.Header>
  )
}
