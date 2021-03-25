import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function logger(request: Request, response: Response, next: NextFunction) {
  Logger.log(`${request.method} ${request.url}`);
  next();
};
