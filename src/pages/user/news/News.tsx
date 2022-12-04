import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import NewsItem from '../../../components/news/NewsItem';
import { INews } from '../../../store/models/INews';

export default function News() {
    const newsMocks: INews[] = [
        {
            id: 1,
            title: 'Новость1',
            content: 'В свердловской области убили негра айайайай',
            image: 'https://www.meme-arsenal.com/memes/80b8106804cb0b04d4acb86fa4b88633.jpg',
            created_by: 1,
        },
        {
            id: 2,
            title: 'Новость2',
            content: 'В свердловской области убили негра айайайай',
            image: 'https://www.meme-arsenal.com/memes/80b8106804cb0b04d4acb86fa4b88633.jpg',
            created_by: 1,
        },
        {
            id: 3,
            title: 'Новость3',
            content: 'В свердловской области убили негра айайайай',
            image: 'https://www.meme-arsenal.com/memes/80b8106804cb0b04d4acb86fa4b88633.jpg',
            created_by: 1,
        },
        {
            id: 4,
            title: 'Новость4',
            content: 'В свердловской области убили негра айайайай',
            image: 'https://www.meme-arsenal.com/memes/80b8106804cb0b04d4acb86fa4b88633.jpg',
            created_by: 1,
        },
        {
            id: 5,
            title: 'Новость5',
            content: 'В свердловской области убили негра айайайай',
            image: 'https://www.meme-arsenal.com/memes/80b8106804cb0b04d4acb86fa4b88633.jpg',
            created_by: 1,
        }
    ];

    function SearchButton() {
        return(
            <>
                <InputGroup className = "mb-3">
                    <Form.Control
                        placeholder = "Введите текст.."
                        aria-label = "Введите текст.."
                        aria-describedby="basic-addon2"
                        className='w-50'
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Поиск
                    </Button>
                </InputGroup>
            </>
        )
    }

    function SelectSort() {
        return(
            <>
                <Form.Select aria-label="Default select example" className="mb-3">
                    <option>Сортировать</option>
                    <option value="1">По заголовку</option>
                    <option value="2">По дате</option>
                    <option value="3">По номеру</option>
                </Form.Select>
            </>
        )
    }

    return (
        <div>
            <div className="page-header ms-3">
                <h1>Новости</h1>
            </div>
            <div>
                <Container className="justify-content-md-center">
                    <Row>
                        <Col><SearchButton/></Col>
                    </Row>
                    <Row>
                        <Col><SelectSort/></Col>
                        <Col><Button variant="outline-primary" className="mb-3">Очистить фильтры</Button>{' '}</Col>
                    </Row>
                </Container>
            </div>
            <div>
                {newsMocks.map((newsItem: INews) => {
                    return <NewsItem news={newsItem} key={newsItem.id} />;
                })}
            </div>
        </div>
    );
}
