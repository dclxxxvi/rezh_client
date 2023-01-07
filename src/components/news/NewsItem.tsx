import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { INews } from '../../store/models/INews';
import { getFileURL } from '../../helpers/url.helper';
import { useNavigate } from 'react-router-dom';

interface NewsItemProps {
    news: INews;
}

export default function NewsItem({ news }: NewsItemProps) {
    const navigate = useNavigate();

    return (
        <Card className="mb-3">
            <Card.Img variant="top" width={ 200 } height={ 200 } src={ getFileURL(news.image) } />
            <Card.Body>
                <Card.Title>{ news.title }</Card.Title>
                <Card.Text>{ news.content }</Card.Text>
                <Button variant="primary" onClick={() => navigate(`${ news.id }`)}>Читать далее</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Дата создания: { news.created_by }</Card.Footer>
        </Card>
    );

}
