import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({props}) {
    console.log("2");
    if(props.dish!=null){
    console.log("3");
    return(
        <div>
                    <Card>
                        <CardImg top src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
        </div>
    );
    }
    else
    {
        return (
            <div>None!</div>
        )
    }
}

const DishDetail = (props) => {
    console.log("1")
    return (
        <div key= {props.id} class="container">
        <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    < hr/>
                </div>
        </div>
        <div className="row">
            <RenderDish props = {props.dish}/>
        </div>
        </div>
    );
}

export default DishDetail;