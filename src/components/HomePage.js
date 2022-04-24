import React from 'react';
import { Col, Container, Card, CardText, CardTitle, CardBody, CardImg, CardSubtitle, Button} from "reactstrap";
import {Link} from "react-router-dom"


const AlbumPage = () => {
  return (
    <div>
         <Container className='d-flex justify-content-center'>
         <Card style={{width: "800px"}}>
            <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top/>
            <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>

                <Link to="/album" className='btn btn-success w-100'>
                    Click to Reach Album Page
                </Link>

            </CardBody>
        </Card>
      </Container>
    </div>
  )
}

export default AlbumPage