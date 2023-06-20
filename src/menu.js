import { Menu } from 'antd';
import { useState } from 'react';

const Menus = props => {
  let { isprops, select } = props;
  const [collapsed, setCollapsed] = useState(false);
  function onSelect(input) {
    select(input.keyPath);
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={isprops}
        onSelect={onSelect}
      />
    </div>
  );
};
export default Menus;
