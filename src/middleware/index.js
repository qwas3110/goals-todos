import checker from './checker';
import logger from './logger';
import thunk from 'redux';

import { applyMiddleware } from 'redux';


export default applyMiddleware(
    thunk,
    checker,
    logger
)


