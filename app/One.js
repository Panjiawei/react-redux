/**
 *  Class: six
 *  Author: pan
 *  Date: 2018/11/19.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
import {store}from'./store/TestStore'
import connect from "react-redux/es/connect/connect";

 class One extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart:[],
            products:{}
        }
       // 可以手动订阅更新，也可以事件绑定到视图层。
        store.subscribe(() =>{

            console.log(store.getState());
           let {products,shoppingCart} =store.getState();
           // let cart=store.getState().products.cart;
            let {cart}=products
                 console.log(...cart);
           // alert(...cart)

        } )
      //  this._gets = this._gets.bind(this);


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
    // componentWillReceiveProps() {
    //
    // }

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


    componentWillReceiveProps(nextProps) {

      console.log("qwe",nextProps.keys);

      alert(nextProps.keys);
    }




    // _gets(){
    //     this.props.dispatch(addToCart('Coffee 500gm', 1, 250))
    // }

    // 渲染
    render() {
        const keys = this.props.keys || "null";
        const data = this.props.data || "null";
        const {  fs } = this.props;

        return (
            <View style={{flex: 1, flexDirection: "column"}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <Text style={{height: 20, width: 100, backgroundColor: "#399999"}}
                      onPress={() => Actions.Two()}> 我是Page One</Text>

                <Text style={{height: 20, width: 100,marginTop:50, backgroundColor: "#399999"}}
                      onPress={() =>  store.dispatch(addToCart('Coffee 500gm', 1, 250))}>dispatch</Text>


                <Text style={{height: 20, width: 100,marginTop:50, backgroundColor: "#399999"}}
                      onPress={fs}>dispatch2</Text>


                <Text style={{height: 20, width: 100,marginTop:50, backgroundColor: "#399999"}}
                      onPress={() => Actions.Two()}> {keys}</Text>

                <Text style={{height: 20, width: 100,marginTop:50, backgroundColor: "#399999"}}
                > {data}</Text>

            </View>
        );
    }
}

//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        fs: () => dispatch(addToCart('Coffee 500gm', 1, 250))
    }
}


//映射Redux state到组件的属性
function mapStateToProps(state) {
   console.log("wwww",state.toString());
    return {

    }
}


//连接组件
export default connect(mapStateToProps,mapDispatchToProps)(One)


const ADD_TO_CART = 'ADD_TO_CART';

function addToCart(product, quantity, unitCost) {

    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}





const styles = StyleSheet.create({

    style_1: {}

});