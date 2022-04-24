import React from 'react'
import {Card, CardText, CardTitle, CardBody, CardImg, CardSubtitle, Button} from "reactstrap"

const CardComponent = () => {
    return (
        <div>
            <Card style={{width: "400px"}}>
            
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardComponent