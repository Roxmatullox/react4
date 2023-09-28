import axios from 'axios'
import React, { Component, Fragment } from 'react'
import Cart from '../components/card/card'

export class All extends Component {
  state = {
    products:[],
    sorting:false
  }
  async  getProducts() {
    try {
      let {data} = await axios.get(`https://fakestoreapi.com/products?sort=${this.state.sorting?"desc":"asc"}`)
      this.setState({products:data})
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount(){
    this.getProducts()
  }
  render() {
    const {products , sorting} = this.state
    const AscDesc = () =>{
      this.setState({sorting:!sorting})
      this.getProducts()
    }
    return (
      <Fragment >
        <section>
          <div className="container">
            <div className="all-title">
              <h1>All products</h1>
              <button onClick={AscDesc}>asc/desc</button>
            </div>
            <div className="all-products">
              {products.map((el)=>(
                <Cart key={el.id} {...el} />
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default All