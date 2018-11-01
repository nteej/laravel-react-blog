import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon, Dropdown, Avatar, message } from 'antd';
import { BrowserRouter as Router, Route, Link, HashRouter, Redirect, Switch } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
import { Article } from './Article/Article'
import { ArticleCreate } from './Article/ArticleCreate'
import { ArticleDetail } from './Article/ArticleDetail'
import { Tag } from './Tag/Tag'
import { Comment } from './Comment/Comment'
import { Visit } from './Visit/Visit'
import { Dashboard } from './Dashboard/Dashboard'
import { User } from './User/User'
import { Setting } from './Setting/Setting'
import styles from "./Main.css"

const avatarOnClick = function ({ key }) {
  switch (key) {
    case 'logout':
      message.info(`TODO 退出登录`);
      //TODO 退出登录
      break;
    default:
      break;
  }
};
const menu = (
  <Menu onClick={avatarOnClick}>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">支付宝</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">淘宝</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <Icon type="logout" /> 退出登录
    </Menu.Item>
  </Menu>
);



class SiderLayout extends React.Component {
  state = {
  };

  render() {
    return (
      <HashRouter>
        <Layout className="sider-layout">
          <Sider collapsible >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={this.menuAutoSelect()}>
              <Menu.Item key="dashboard">
                <Link to="/">
                  <Icon type="dashboard" />
                  <span>后台首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="articles">
                <Link to="/articles">
                  <Icon type="edit" />
                  <span>文章管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="comments">
                <Link to="/comments">
                  <Icon type="message" />
                  <span>留言管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="visits">
                <Link to="/visits">
                  <Icon type="rocket" />
                  <span>访客记录</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="users">
                <Link to="/users">
                  <Icon type="user" />
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="settings">
                <Link to="/settings">
                  <Icon type="setting" />
                  <span>网站管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="exit">
                <a href="/">
                  <Icon type="logout" />
                  <span>退出后台</span>
                </a>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <div style={{ float:'right', height:'100%', padding: '0 20px' }}>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#">
                    <Avatar icon="user" style={{ verticalAlign: 'middle' }}/>
                  </a>
                </Dropdown>
              </div>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/articles" exact component={Article}/>
                <Route path="/articles/create" exact component={ArticleCreate}/>
                <Route path="/articles/show/:id" component={ArticleDetail}/>
                <Route path="/tags" exact component={Tag}/>
                <Route path="/comments" exact component={Comment}/>
                <Route path="/visits" exact component={Visit}/>
                <Route path="/users" exact component={User}/>
                <Route path="/settings" exact component={Setting}/>
                <Redirect to="/" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
  //左侧菜单选中状态根据 url 自动转换
  menuAutoSelect() {
    let key = window.location.hash.split('/')[1];
    if (key=='' || !key) {
      key = 'dashboard';
    }
    return new Array(key);
  }
  //new function
}

if (document.getElementById('root')) {
    ReactDOM.render(<SiderLayout />, document.getElementById('root'));
}
