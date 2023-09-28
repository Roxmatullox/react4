import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Cart from '../components/card/card'

export class Mens extends Component {
  state = {
    products:[],
    sorting:false
  }
  async  getProducts() {
    try {
      let {data} = await axios.get(`https://fakestoreapi.com/products/category/men's clothing?sort=${this.state.sorting?"desc":"asc"}`)
      this.setState({products:data})
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount(){
    this.getProducts()
  }

  render() {
    const {products, sorting} = this.state
    const AscDesc = () =>{
      this.setState({sorting:!sorting})
      this.getProducts()
    }
    return (
      <Fragment >
        <div className="container">
          <div className="electronic-title">
            <h1>Mens products</h1>
            <button onClick={AscDesc}>asc/desc</button>
          </div>
          <div className="all-products">
            {
              products.map((el)=>(
                <Cart key={el.id} {...el} />
              ))
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Mens