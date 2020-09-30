import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ExampleModule } from './example/example.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    AuthModule,
    ExampleModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const MONGODB_URI = configService.get<string>('MONGODB_URI');

        return {
          uri: MONGODB_URI,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {
  constructor() {
    console.log(ENV);
  }
}
