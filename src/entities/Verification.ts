import { verificationTarget } from 'src/types/types';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
  } from 'typeorm';

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", enum: [PHONE, EMAIL] })
  target: verificationTarget;

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  @Column({ type: "boolean", default: false })
  verified: boolean;

  @CreateDateColumn()
  createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createKey(): void {
    if (this.target === PHONE) {
      // 랜덤 5개의 숫자 (string)
      this.key = Math.floor(Math.random() * 10000).toString();
    } else if (this.target === EMAIL) {
      // 간이 암호화
      this.key = Math.random()
        .toString(36)
        .substr(2);
    }
  }
}

export default Verification;
