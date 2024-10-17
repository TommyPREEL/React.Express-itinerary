import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Travel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  startPoint!: string

  @Column()
  endPoint!: string;

  @Column()
  distance!: string;

  @Column()
  time!: number;

  @Column()
  idUser!: number;
}
