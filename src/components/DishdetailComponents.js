import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);

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

  render(){
    const dish = this.state.selectedDish;
    return(
      <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComment(dish.comments)}
          </div>
        </div>
    )
  }
}
export default DishDetail;