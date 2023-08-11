import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  Table
} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import { useState } from 'react';
import './style.css';
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 150
      }}
    >
      <Option value="86">金额</Option>
      <Option value="87">明细</Option>
    </Select>
  </Form.Item>
);
const preSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70
      }}
    >
      <Option value="86">金额</Option>
      <Option value="87">明细</Option>
    </Select>
  </Form.Item>
);
const columns = [
  {
    title: '指定渠道编码',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '指定渠道名称',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '所在省',
    dataIndex: 'address',
    key: 'address'
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  }
];
const Top = props => {
  // const [collapsed, setCollapsed] = useState(false);
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
  });
  return (
    <div className="box">
      <div className="top">
        <div className="top_line"></div>
        <span className="top_cencer">
          <IconFont type="icon-tuichu" />
          <span className="top_text">协议全体</span>
        </span>
        <div className="top_line"></div>
      </div>
      <div className="form">
        <Form
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 16
          }}
          layout="horizontal"
        >
          <Row gutter={18}>
            <Col span={12}>
              <Form.Item label="选择用户">
                <Button>选择用户</Button>
                <soan style={{ marginLeft: '10px' }}>上海某某某公司</soan>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="协议状态"
                labelCol={{
                  span: 4
                }}
                wrapperCol={{
                  span: 8
                }}
                rules={[{ required: true }]}
              >
                <Select placeholder="请选择" onChange={() => {}} allowClear>
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={18}>
            <Col span={12}>
              <Form.Item name="phone" label="购进细状">
                <Input
                  placeholder="请输入金额数量"
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="phone" label="纯销细状">
                <Form.Item
                  name="year"
                  style={{
                    display: 'inline-block',
                    width: '100px',
                    margin: '0'
                  }}
                >
                  <Input placeholder="金额" />
                </Form.Item>
                <Form.Item
                  name="month"
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                    margin: '0'
                  }}
                >
                  <Input placeholder="请输入金额/数量" />
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={18}>
            <Col span={12}>
              <Form.Item label="选择用户">
                <Button>选择用户</Button>
                <soan style={{ marginLeft: '10px' }}>上海某某某公司</soan>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="签订时间"
                labelCol={{
                  span: 4
                }}
                wrapperCol={{
                  span: 16
                }}
              >
                <DatePicker format="YYYY-MM-DD HH:mm" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={18}>
            <Col span={12}>
              <Form.Item label="购进渠道">
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={() => {}}
                  allowClear
                  style={{ display: 'inline-block', width: '150px' }}
                >
                  <Option value="male">指定渠道</Option>
                  <Option value="female">指定渠道</Option>
                  <Option value="other">指定渠道</Option>
                </Select>
                <Button>选择用户</Button>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="   "
            labelCol={{
              span: 2
            }}
            wrapperCol={{
              span: 22
            }}
          >
            <Table
              style={{ width: '100%' }}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Top;
