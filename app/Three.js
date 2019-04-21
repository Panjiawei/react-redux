/**
 *  Class: six
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList,Image} from 'react-native';

export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    /**
     * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
     * （不能够使用setState()来改变属性 多次调用）
     */
    shouldComponentUpdate() {

    }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {

    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {


    }



    _renderItem=({item})=>{

       return (

           <View style={{flex: 1, flexDirection: 'column'}}>
               <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image style={{width: 30, height: 30}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                   <Text>{item.key}</Text>

               </View>

               <View style={{flex:1,height:1,backgroundColor:'#222222'}}/>
               <View style={{flex: 1, flexDirection: 'row'}}>
                   <Image style={{width: 30, height: 30}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                   <Text>谢谢您的建议，我们将认真考虑您的建议</Text>

               </View>


           </View>

       );

    };


    // 渲染
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={this._renderItem}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    style_1: {}

});