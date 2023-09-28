import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export class Cart extends Component {
  render() {
    const {id,title,price,description,image,category} = this.props
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{id}.{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Title>Price:{price}</Card.Title>
        <Button variant="primary">{category}</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default Cart