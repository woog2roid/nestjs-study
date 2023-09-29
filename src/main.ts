import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const document_config = new DocumentBuilder()
    .setTitle('Blood-Mate Server')
    .setDescription('Blood-Mate API Description')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, document_config);
  SwaggerModule.setup('docs', app, document);

  // Class Validator
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
