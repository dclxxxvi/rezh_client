import React from 'react';
import Container from 'react-bootstrap/Container';

function Main() {
    return (
        <Container className={'g-3 my-3'}>
            <h5>Добро пожаловать в панель депутата</h5>
            <div>Перейдите на вкладку <b>обращения</b>, чтобы отвечать на обращения граждан</div>
        </Container>
    );
}

export default Main;