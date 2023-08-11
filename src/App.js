import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Layout, Space, Input, Button } from 'antd';
import Menus from './menu.js';
import Top from './top.js';
import Contents from './content.js';
import Bottom from './bottom.js';

const { Header, Footer, Sider, Content } = Layout;
const contentStyle = {
  textAlign: 'left',
  color: '#fff',
  backgroundColor: '#ccc'
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#000',
  height: '100vh'
};
const list = [
  {
    label: '菜单一',
    key: 'sub1',
    children: [
      { label: '子菜单-1', key: '1' },
      { label: '子菜单-2', key: '2' }
    ]
  },
  {
    label: '菜单二',
    key: 'sub2',
    children: [
      { label: '子菜单-1', key: '3' },
      { label: '子菜单-2', key: '4' }
    ]
  }
];
function App() {
  const [isList, setIsList] = useState(list);
  function listOut() {
    let islist = JSON.parse(JSON.stringify(isList));
    islist.forEach(item => {
      if (item.key === keyList[1]) {
        console.log(item, 'item', keyList);
        item.children.forEach(items => {
          console.log(items, 'items');
          if (items.key == keyList[0]) {
            items.label = text;
            console.log(islist);
            setIsList(islist);
          }
        });
      }
    });
  }
  const [text, setText] = useState('');

  const [keyList, setKeyList] = useState(['1', 'sub1']);

  function select(list) {
    setKeyList(list || []);
    let islist = JSON.parse(JSON.stringify(isList));
    islist.forEach(item => {
      if (item.key === list[1]) {
        item.children.forEach(items => {
          if (items.key == list[0]) {
            setText(items.label);
          }
        });
      }
    });
  }
  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }}>
      <Layout>
        <Header style={{ padding: '0', display: 'flex' }}>
          <div className="logo">
            <img
              src="https://img2.baidu.com/it/u=2613289509,3052102499&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
          </div>
          <div className="index">
            <div className="index_img">
              <img
                src="https://img2.baidu.com/it/u=2613289509,3052102499&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
              首页
            </div>
            <div className="index_img">
              <img
                src="https://img2.baidu.com/it/u=2613289509,3052102499&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
              首页
            </div>
            <div className="index_img">
              <img
                src="https://img2.baidu.com/it/u=2613289509,3052102499&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
              首页
            </div>
          </div>
        </Header>
        <Layout style={{ height: '100%', backgroundColor: '#000' }}>
          <Sider style={siderStyle}>
            <Menus isprops={isList} select={select}></Menus>
          </Sider>
          <Content style={contentStyle}>
            <div
              style={{
                padding: '10px 20px',
                lineHeight: '20px',
                backgroundColor: '#fff'
              }}
            >
              <div style={{ fontSize: '12px', color: '#c1c1c1' }}>
                的经费卡号的咖啡机哈利肯定就恢复了卡号
              </div>
              <div style={{ fontSize: '16px', color: '#000' }}>对方哈迪斯</div>
            </div>
            <div style={{ padding: '0 20px' }}>
              <Top></Top>
              <Contents></Contents>
              <Bottom></Bottom>
            </div>
            <div className="sub">
              <Button type="primary">保存</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}

export default App;
