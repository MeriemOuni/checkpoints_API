import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
    return (
        <div>

            <Image style={{marginLeft: "50px ", marginRight: "50px", marginTop:"20px", marginBottom:"50px" }}
                    
                    className="d-block w-100"
                    src="https://codematters.online/wp-content/uploads/2019/07/communication-3819836_1920.jpg"
                    alt="slide"
                    style={{height:"600px", width:"80%", border:"2px"}}
            fluid />

            <Container className="container">
                <Row style={{marginLeft:"400px"}}>
                    
                    <Col xs={6} md={4} style={{}}>
                    <Image src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" roundedCircle />
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Home;
