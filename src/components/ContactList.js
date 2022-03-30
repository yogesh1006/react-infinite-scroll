import React,{useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GetContactsList } from './ContactListSlice';
import { Card, Col, Navbar, Row } from 'react-bootstrap';

import './ContactList.css'

const ContactList = () =>{
    const dispatch = useDispatch()

    const [page,setPage] = useState(1)
    const cards = useSelector((state) => state.contacts.contactCollection)
    const hasMore = useSelector((state) => state.contacts.hasMore)
    
    useEffect(() => {
        dispatch(GetContactsList(1))
        setPage(prevState => prevState + 1)
    },[dispatch])

    const fetchContacts = () => {
        setPage(prevState => prevState + 1)
        setTimeout(() => {
            if(hasMore){
                dispatch(GetContactsList(page))
            }
        },1000)
    }

    const cardDetails =
        (cards ?
            <InfiniteScroll
                dataLength={cards.length}
                next={fetchContacts}
                hasMore={hasMore}
                loader={<h4 className='cardLoader'>Loading ...</h4>}>
                    {
                        <Row>
                            {
                                cards.map(card => (
                                    <Col xl={4} lg={6} md={6} key={card.login.uuid}>
                                        <Card className='box'>
                                            <Card.Body>
                                                <div className='cardDiv'>
                                                    <div className='extraDetails'>
                                                        <Card.Title>
                                                            {card.name.first} {card.name.last}
                                                        </Card.Title>
                                                    </div>
                                                    <div className='imgDiv'>
                                                        <img src={card.picture.large !== 'N/A' ? card.picture.large : null} alt="img" />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    }
                </InfiniteScroll> : <h3>No Records</h3>
                
                )


    return (
        <>
        <Navbar bg="primary" variant="dark" fixed="top" md={5}>
           <Navbar.Brand href="#home" style={{paddingLeft:"15px"}}>Infinite Scroll</Navbar.Brand>
        </Navbar>
        <Row className='cardContainer' style={{marginTop:"4rem"}}>{cardDetails}</Row>
        </>
    )
}

export default ContactList