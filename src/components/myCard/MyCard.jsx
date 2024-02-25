import styles from "./myCard.module.css"
import Card  from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import CommentArea from "../modal/CommentArea.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
const MyCard = ({img, title, category,price,book,asin}) => {

    const [isSelected,setIsSelected] = useState(false)
    const [getBook, seGetBook] = useState({...book})
    const toggleSelected = () => setIsSelected(!isSelected)

    return(
        <>
    <Card
        className={isSelected ? styles.MyCardStyle : ''}
        style={{ maxWidth: '15rem' }}>
      <Card.Img
        className={styles.cardImage} 
        variant="top" 
        src={img} 
        alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {category} - {price}
        </Card.Text>
        <Button
          onClick={toggleSelected}
          variant="primary">
          Select
        </Button>

        <Link to={`/book/${asin}`}>
          <Button>
            Dettagli
          </Button>
        </Link>

        <CommentArea
          book = {getBook}
        />

      </Card.Body>
    </Card>
        </>
    )
}
export default MyCard;