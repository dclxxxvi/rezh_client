import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NewsItem from '../../../components/news/NewsItem';
import { INewsQuery } from '../../../store/models/INews';
import { useGetNewsQuery } from '../../../store/api/news.api';
import { PAGE_LIMIT } from '../../../helpers/consts';
import React, { useState } from 'react';
import Pagination, { OnChangeEventType } from '../../../components/common/Pagination';
import BreadcrumbGroup from '../../../components/common/Breadcrumbs/BreadcrumbGroup';
import BreadcrumbItem from '../../../components/common/Breadcrumbs/BreadcrumbItem';
import NewsFilters from '../../../components/news/NewsFilters';
import { getTotalPages } from '../../../helpers/pagination.helper';
import { Spinner } from 'react-bootstrap';

export default function News() {

    const [page, setPage] = useState(0);
    const handleChangePage = (event: OnChangeEventType) => {
        setPage(event.target.value);
    };

    const [filters, setFilters] = useState<INewsQuery>({});

    const { data: news, ...newsMeta } = useGetNewsQuery({
        limit: PAGE_LIMIT,
        page: page,
        query: filters,
    });

    return (
        <Container className={ 'py-3 d-flex flex-column gap-3' }>
            <Row>
                <BreadcrumbGroup>
                    <BreadcrumbItem to={ '/admin' } label={ 'Главная' } />
                    <BreadcrumbItem to={ '/admin/news' } label={ 'Новости' } isActive={ true } />
                </BreadcrumbGroup>
            </Row>
            <Row className={ 'justify-content-between' }>
                <h3>Новости</h3>
            </Row>
            <Row>
                <hr />
            </Row>
            <Row className={ 'd-flex flex-column gap-3' }>
                <Row>
                    <NewsFilters filters={ filters } setFilters={ setFilters } />
                </Row>
                <Row>{ (newsMeta?.isLoading || newsMeta?.isFetching) && <Spinner /> }</Row>
                <Row>
                    { news?.rows?.map((newsItem) => {
                        return <NewsItem news={ newsItem } key={ newsItem.id } />;
                    }) }
                    { !news?.rows?.length && !!newsMeta?.isLoading && <h5>Ничего не найдено</h5> }
                </Row>
                <Row>
                    { !!news?.rows?.length &&
                    <Pagination onChange={ handleChangePage } aroundCurrent={ 1 }
                                totalPages={ getTotalPages(news?.count) } value={ page } />
                    }
                </Row>
            </Row>
        </Container>
    );
}
