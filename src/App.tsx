import React, {Component} from 'react';
import './App.css';
import {Card, Layout, Space, Typography} from 'antd';
import StatComponent from "./components/StatComponent";
import CurrentDateComponent from "./components/CurrentDateComponent";
const {Header, Footer, Sider, Content} = Layout

class App extends Component {
    render() {
        return (
            <div className="App" style={{background: 'black'}}>
                <Space direction="horizontal" style={{background: "black"}}>
                    <Card bordered={false} style={{background: "black"}}>
                        <StatComponent title={"CPU Temp"} statIndex={"32"} subStat={"CPU CCD #1"}/>
                    </Card>
                    <Card bordered={false} style={{background: "black"}}>
                        <StatComponent title={"GPU Temp"} statIndex={"67"} subStat={"GPU Core"}/>
                    </Card>
                </Space>
                <div>
                    <CurrentDateComponent />
                </div>
            </div>
        );
    }
}

export default App;
