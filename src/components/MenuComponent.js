import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      selectedComment: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
    this.setState({ selectedComment: dish.comments})
  }

  renderComment(comments) {
    if (comments != null) {
      const listComment = comments.map((cmt) => {
        return (
          <div>
            <p>{cmt.comment}</p>
            <p>-- {cmt.author}, {cmt.date}</p>
          </div>
        )
      });

      return (
        <div>
          <h4>
            Comment
          </h4>
          {listComment}
        </div>
      );
    }
    else
      return(
        <div></div>
      );
  }



  renderDish(dish) {
    if (dish != null) {
      return (
        <div>
          <div>
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle><h4>{dish.name}</h4></CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    }
    else
      return (
        <div></div>
      );
  }


  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(this.state.selectedComment)}
          </div>
        </div>
      </div>
    );
  }
}


export default Menu;
