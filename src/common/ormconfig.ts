import { TYPEORM_CONFIG } from './config';

export = {
  ...TYPEORM_CONFIG,
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};
