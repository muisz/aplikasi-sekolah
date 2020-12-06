import React, { Component } from 'react';
import {} from 'antd';

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
                    testing
                </div>
            </MainLayout>
        );
    }
}
 
export default IndexPage;