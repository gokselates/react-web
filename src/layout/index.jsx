import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import Sidebar from './sidebar';
import { Outlet } from 'react-router';

export default function DefaultLayout() {

    return (
        <Layout>
            <Layout>
                <Sidebar/>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
