import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';

@Entity({ name: 'user' })
export class Usuario{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Persona, { eager: true })
  @JoinColumn({ name: 'id_persona' })
  persona: Persona;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  id_user_create: number;

  @Column({ nullable: true })
  id_user_update?: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
