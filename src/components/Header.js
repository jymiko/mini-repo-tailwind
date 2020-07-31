import { Layout, Menu, Breadcrumb, Dropdown, Row, Input, Button, Tabs} from 'antd';
import React from 'react';
import '../assets/main.css'
import {
  DribbbleOutlined
} from '@ant-design/icons';

const { Search } = Input;
const { TabPane } = Tabs;
const { Header} = Layout;

const menuDropdown = (
  <Menu className="mt-4">
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

class HeaderMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    
    return (
      <Layout>
      <Header className="bg-white h-16 p-0">
        <DribbbleOutlined className="text-black text-2xl float-left mt-5 ml-5"/>
        <Row className="w-10/12 float-right">
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="float-left w-1/2 border-0">
              <Search placeholder="input text here" className="w-3/4 m-4 rounded-full" size="large">

              </Search>
          </Menu>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="float-right w-1/3  border-0">
              <Menu.Item key="1">Search</Menu.Item>
              <Menu.Item key="2">Topics</Menu.Item>
              <Menu.Item key="3">Explore</Menu.Item>
              {/* <Menu.Item key="4"> */}
                <Dropdown overlay={menuDropdown} trigger={['click']} placement={"bottomRight"}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    ...
                  </a>
                </Dropdown>
              {/* </Menu.Item> */}
              <Button type="primary" className="rounded mr-6 ml-6">Submit Photo</Button>
          </Menu>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="float-right w-1/6  border-0">
              
              <Menu.Item>Login</Menu.Item>
              <Button type="primary" className="rounded  bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-700">Join Free</Button>
          </Menu>
        </Row>
        <Row className="w-full p-5">
          <Tabs defaultActiveKey="1" tabPosition={'top'} >
            {[...Array(16).keys()].map(i => (
              <TabPane tab={`Content-${i}`} key={i} className="border-0">
                Content of tab {i}
              </TabPane>
            ))}
          </Tabs>
        </Row>
      </Header>
    </Layout>
    );
  }
}

export default HeaderMenu;