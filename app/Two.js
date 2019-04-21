/**
 *  Class: six
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,NativeModules} from 'react-native';
import {Actions} from "react-native-router-flux";

export default class Two extends Component {

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

    _toast(){
        NativeModules.ToastModule.show('toast', NativeModules.ToastModule.SHORT,(success)=>{alert(success)},(error)=>{alert(error)})
    }
    // 渲染
    render() {
       // const keys = this.props.keys || 'No Data';


        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <Text style={styles.welcome} onPress={()=>Actions.loginLightbox({inputType:'clockTip'})}>我是Page Two </Text>
                <Text onPress={this._toast} style={styles.welcome}>ReactNative</Text>

                <Text onPress={()=>{Actions.pop(),Actions.refresh({keys: "12345"})}} style={styles.welcome}>back</Text>
                <Text style={{height: 20, width: 100,marginTop:50, backgroundColor: "#399999"}}
                      onPress={() => Actions.pop({refresh: {data: '从 three 回到 two'}})}>点击</Text>
                <Text onPress={()=>Actions.Three()} style={styles.welcome}>three</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    style_1: {},
    welcome:{
        fontSize:40,
        fontWeight: 'bold',
        height:60,
        width:200,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        marginLeft:70,
        marginTop:30,
        backgroundColor:'powderblue'}


});