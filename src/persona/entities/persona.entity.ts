import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'persona' })
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombres: string;

  @Column({ length: 50 })
  p_apellido: string;

  @Column({ length: 50, nullable: true })
  s_apellido?: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ length: 20, unique: true })
  ci: string;

  @Column({ length: 10 })
  genero: string;

  @Column({ default: true })
  estado: boolean;

  @Column()
  id_user_create: number;

  @Column({ nullable: true })
  id_user_update?: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
