import React, { Component } from 'react';
import { Menu, Typography, Button, Badge } from 'antd';
import { DashboardOutlined, LogoutOutlined, FormOutlined, UserOutlined, NotificationOutlined, TeamOutlined } from '@ant-design/icons';

import '../styles/layouts/main.css';

const { SubMenu } = Menu;

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
    }

    handleCollapse = () => {
        let current = this.state.isCollapsed;
        this.setState({
            isCollapsed: !current
        })
    }

    render() { 
        return (
            <div className="wrapper">
                <div className="cs-sider">
                    <div className="logo">
                        <img src="/images/kemenag.png" />
                        <Typography.Title level={4} style={{color: '#179c34', marginTop: '0.5em'}}>Nama Staff</Typography.Title>
                    </div>
                    <div className="menu">
                        <Menu>
                            <Menu.Item key="menu1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
                            <Menu.Item key="menu2" icon={<TeamOutlined />}>Staf dan Karyawan</Menu.Item>
                            <Menu.Item key="menu3" icon={<FormOutlined />}>Daftar Surat</Menu.Item>
                            <Menu.Item key="menu4" icon={<NotificationOutlined />}>Notifikasi <Badge count={99} overflowCount={10} /></Menu.Item>
                            <Menu.Item key="menu5" icon={<UserOutlined />}>Profile</Menu.Item>
                            <Menu.Item key="menu6" icon={<LogoutOutlined />}>Logout</Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="cs-main">
                    <div className="cs-headers">
                        <Typography.Title level={4} style={{color: 'white'}}>APLIKASI SEKOLAH</Typography.Title>
                    </div>
                    <div className="cs-main-page">
                        {this.props.children}
                    </div>
                    <div className="cs-footer">
                        2020 @Muhamad Abdul Muis
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainLayout;