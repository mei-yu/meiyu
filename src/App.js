import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Layout, Space, Input, Button } from 'antd';
import Menus from './menu.js';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  color: '#fff',
  height: 64,
  paddingInline: 50,
  display: 'flex',
  lineHeight: '64px',
  backgroundColor: '#000'
};
const contentStyle = {
  paddingLeft: '50px',
  textAlign: 'left',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff'
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#000',
  height: '100%'
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

  function textChange(input) {
    setText(input.target.value || '');
  }
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
        <Header style={headerStyle}>
          <div style={{ flex: 1, textAlign: 'left' }}>react</div>
          <div style={{ flex: 1, textAlign: 'right' }}>admin</div>
        </Header>
        <Layout style={{ height: '100%', backgroundColor: '#000' }}>
          <Sider style={siderStyle}>
            <Menus isprops={isList} select={select}></Menus>
          </Sider>
          <Content style={contentStyle}>
            <Space.Compact style={{ width: '30%' }}>
              <Input defaultValue="" value={text} onChange={textChange} />
              <Button type="primary" onClick={listOut}>
                保存
              </Button>
            </Space.Compact>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}

export default App;
