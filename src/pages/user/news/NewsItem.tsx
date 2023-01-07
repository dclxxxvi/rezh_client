import { useParams } from 'react-router-dom';
import { useGetNewsItemQuery } from '../../../store/api/news.api';
import Container from 'react-bootstrap/Container';

export default function NewsItem() {
    const { id } = useParams();

    const { data, isLoading } = useGetNewsItemQuery(Number(id), {skip: id === undefined});

    return <Container>NewsItem c id: {id}</Container>;
}
