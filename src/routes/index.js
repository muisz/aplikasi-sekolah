import React, { Component } from 'react';
import { Button } from 'antd';

import MainLayout from '../layouts/main';

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <MainLayout>
                <div style={{
                    background: '#fff',
                    padding: '15px'
                }}>
                </div>
            </MainLayout>
        );
    }
}
 
export default IndexPage;