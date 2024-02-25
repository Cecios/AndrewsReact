import { Container,Row,Col } from "react-bootstrap";
import LoadingSpinner from '../loadingSpinner/LoadingSpinner.jsx'
import { useState,useEffect } from "react";
import {fetchDefault} from '../../data/fetchDefault.js'
import { nanoid } from 'nanoid'

const AllTheBooks = ()=>{
    const [loading, setLoading] = useState(false)
    const [books,setBooks] = useState(null)
    const urlBooks = 'https://striveschool-api.herokuapp.com/books'
    const key = 'WBCin4nNXSKsreaoccxmci9ZP7PG2l71tn6V4TvZPuIKMfogJHBossuc'
    console.log(books);

    const getData = async () => {
        setLoading(true);
        const data = await fetchDefault(key,urlBooks,"GET");
        setBooks(data)
        setLoading(false);
    }
    useEffect(()=>{
        getData()
        return ()=> {
            //quello che scrivo qui sarà eseguito all'unmount del componente
        }
    },[])
    return(
        <>
            <Container>
                <Row>
                    {loading &&(<LoadingSpinner/>)}
                    {books && books.map((book)=>{
                        return(
                            <>
                                <Col
                                    xs={6} md={4} 
                                    key={nanoid()}    
                                >
                                    <p>{book.asin}</p>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
export default AllTheBooks;