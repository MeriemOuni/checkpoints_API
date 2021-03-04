import React from 'react'
import {Card} from 'react-bootstrap'


const Admin = () => {
  return (
      <Card className="bg-dark text-white">
          <Card.Img src="https://exigotech.com.au/wordpress/wp-content/uploads/2018/10/Workplace-Automation.jpg" alt="Card image" style={{width:"100%"}}/>
          <Card.ImgOverlay>
            <Card.Title style={{marginTop:"100px"}}>Admin Page</Card.Title>
            <Card.Text style={{marginTop:"300px"}}>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
      </Card>
  )
}

export default Admin