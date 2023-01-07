import Modal from 'react-bootstrap/esm/Modal';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Container } from 'react-bootstrap';

interface RequestCreatedInfoModalProps {
    open: boolean;
    handleClose: () => void;
    requestId?: number;
}

export default function RequestCreatedInfoModal({ open, handleClose, requestId }: RequestCreatedInfoModalProps) {
    const navigate = useNavigate();

    const navigateTo = (to: string) => () => {
        handleClose();
        navigate(to);
    };

    return (
        <Modal show={ open } onHide={ handleClose }>
            <Modal.Header closeButton>
                <Modal.Title>Обращение успешно создано</Modal.Title>
            </Modal.Header>
            <Modal.Body className={ 'd-flex flex-column gap-3' }>
                <Alert variant={ 'info' } className={ 'd-flex flex-column gap-2' }>
                    <div>Вы можете найти обращение и отследить его статус на странице <b>Мои обращения</b>, если вы
                        авторизованы
                    </div>
                    <div>А также на странице <b>Поиск по номеру</b>, если не авторизованы</div>
                    <h5>Номер обращения: { requestId }</h5>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Container className={ 'd-flex flex-column align-items-center gap-2' }>
                    <Button
                        onClick={ handleClose }
                        variant={ 'dark' }
                        type={ 'submit' }>
                        Ок
                    </Button>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}
