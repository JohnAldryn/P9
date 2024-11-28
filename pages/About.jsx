import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import home from '../assets/miks.jpg';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
    return (
        <>
            <h1>About Me</h1>
            <Container>
                {/* Display the image with alignment to the left */}
                <Row className="justify-content-start">
                    <Col xs={6} md={4}>
                        <Image src={home} roundedCircle width="200" height="200" />
                    </Col>
                </Row>
            </Container>

            {/* List of details */}
            <ListGroup>
                <ListGroup.Item><strong>Name:</strong>Mikkie B. Perfecto</ListGroup.Item>
                <ListGroup.Item><strong>Birth Date:</strong>April 25, 2005</ListGroup.Item>
                <ListGroup.Item><strong>Age:</strong>19</ListGroup.Item>
                <ListGroup.Item><strong>Gender:</strong>Male</ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item><strong>My Skill:</strong></ListGroup.Item>
            </ListGroup>
           
        </>
    );
}

export default About;
