import { Route } from 'react-router-dom';
import Requests from '../pages/deputat/requests/Requests';
import Request from '../pages/deputat/requests/Request';
import Main from '../pages/deputat/Main';

export default [
    <Route key="main" index element={ <Main /> } />,
    <Route path="requests" key="requests">
        <Route index element={<Requests />}/>
        <Route path=":id" element={<Request />}/>
    </Route>,
];
