import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaUpdate1718132074181 implements MigrationInterface {
  name = 'SchemaUpdate1718132074181';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" text NOT NULL, "viewed" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "deletedAt" TIMESTAMP, CONSTRAINT "UQ_cca185a31343b70bf100d51a094" UNIQUE ("value"), CONSTRAINT "PK_188149422ee2454660abf1d5ee5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "records"`);
  }
}
