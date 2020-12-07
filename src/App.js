/**
 * desc：应用根组件
 * author： Qi
 * date：2020/12/7 下午9:13
 */

import React, {Component} from 'react'
import {Button, message} from 'antd';

export default class App extends Component {
    handClick = () =>{
        message.success('hello every one')
    };
    render() {
        return (
            <Button type="danger" onClick={this.handClick}>hello</Button>
        )
    }
}
