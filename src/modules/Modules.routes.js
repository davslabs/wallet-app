import {extendWith} from 'lodash';
import Dashboard from './dashboard/Dashboard.routes';

const routes = extendWith({}, Dashboard);

export default routes;