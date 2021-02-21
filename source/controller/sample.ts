import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample Health Check Route Called`);
    return res.status(200).json({
        message: 'Pong'
    });
};

export default { sampleHealthCheck };
