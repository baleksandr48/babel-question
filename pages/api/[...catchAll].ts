import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { AppModule } from '../../backend/app.module';
import { NestFactory } from '@nestjs/core';
import * as http from 'http';

export default (req: NextApiRequest, res: NextApiResponse) =>
  new Promise(async (resolve) => {
    const app = await NestFactory.create(AppModule, { bodyParser: false });
    app.setGlobalPrefix('api');
    await app.init();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners('request') as NextApiHandler[];
    listener(req, res);
    res.on('finish', resolve);
  });
