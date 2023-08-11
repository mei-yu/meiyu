import { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
const { TextArea } = Input;
const Bottom = props => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
  });
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab2Change = key => {
    setActiveTabKey2(key);
  };
  const tabListNoTitle = [
    {
      key: 'article',
      label: '补充协议1'
    },
    {
      key: 'app',
      label: '补充协议2'
    },
    {
      key: 'project',
      label: '补充协议3'
    }
  ];
  const contentListNoTitle = {
    article: (
      <div className="card_box">
        <div className="card_box_top">
          <div className="card_box_text">协议内容：</div>
          <Button style={{ color: 'orange' }}>删除</Button>
        </div>
        <TextArea rows={4} placeholder="" maxLength={100} />
      </div>
    ),
    app: <p>app content</p>,
    project: <p>project content</p>
  };
  return (
    <div className="box bottom_box">
      <div className="top">
        <div className="top_line"></div>
        <span className="top_cencer">
          <IconFont type="icon-tuichu" />
          <span className="top_text">补充协议</span>
        </span>
        <div className="top_line"></div>
      </div>
      <div className="bottom_info">
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          tabBarExtraContent={<Button type="primary">新增</Button>}
          onTabChange={onTab2Change}
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </div>
    </div>
  );
};
export default Bottom;
