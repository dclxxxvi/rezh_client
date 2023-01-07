import React from 'react';
import Container from 'react-bootstrap/Container';

function Main() {
    return (
        <Container className={'g-3 my-3'}>
            <h5>Добро пожаловать в панель админа</h5>
            <div>Перейдите на вкладку <b>обращения</b>, чтобы модерировать обращения граждан. Непринятые обращения не отображаются у депутатов</div>
            <div>Перейдите на вкладку <b>новости</b>, чтобы создавать новости</div>
        </Container>
    );
}

export default Main;