import { Button, DatePicker, Input, Select } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { createFromIconfontCN } from '@ant-design/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;
const Contern = props => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
  });
  return (
    <div className="box">
      <div className="top">
        <div className="top_line"></div>
        <span className="top_cencer">
          <IconFont type="icon-tuichu" />
          <span className="top_text">产品政策</span>
        </span>
        <div className="top_line"></div>
      </div>
      <div className="add">
        <Button type="primary">添加产品</Button>
        <span className="price">购进总指标（万元）： ￥154</span>
        <span className="price">购进总指标（万元）： ￥154</span>
        <span className="price">购进总指标（万元）： ￥154</span>
        <span className="price">购进总指标（万元）： ￥154</span>
      </div>
      <div className="add_info">
        <div className="add_info_top">
          <div className="add_info_top_left">
            <span className="add_info_top_item">
              <span>产品</span>
              <Button style={{ marginLeft: '20px' }}>选择产品</Button>
              <soan style={{ marginLeft: '10px' }}>某某某产品</soan>
            </span>
            <span className="add_info_top_item">
              <span>协议时间</span>
              <RangePicker
                defaultValue={[
                  dayjs('2015/01/01', 'YYYY-MM-DD'),
                  dayjs('2015/01/01', 'YYYY-MM-DD')
                ]}
                style={{ marginLeft: '20px' }}
                format="YYYY-MM-DD"
              />
            </span>
          </div>
          <div className="add_info_top_tight">
            <Button style={{ color: 'orange' }}>删除</Button>
          </div>
        </div>
        <div className="add_info_buttom">
          <div className="add_info_buttom_item add_info_buttom_item_title">
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
          </div>
          <div className="add_info_buttom_item add_info_buttom_item_content">
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
          </div>
          <div className="add_info_buttom_item add_info_buttom_item_title">
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
            <div>协议价格</div>
          </div>
          <div className="add_info_buttom_item add_info_buttom_item_content">
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Select
                placeholder="请选择"
                onChange={() => {}}
                style={{ width: '100%' }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Select
                placeholder="请选择"
                onChange={() => {}}
                style={{ width: '100%' }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </div>
            <div>
              <Input placeholder="请输入" />
            </div>
            <div>
              <Select
                placeholder="请选择"
                onChange={() => {}}
                style={{ width: '100%' }}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </div>
            <div>
              <DatePicker
                format="YYYY-MM-DD"
                defaultValue={dayjs('2015/01/01', 'YYYY-MM-DD')}
              />
            </div>
            <div>
              <DatePicker
                format="YYYY-MM-DD"
                defaultValue={dayjs('2015/01/01', 'YYYY-MM-DD')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contern;
