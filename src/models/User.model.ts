import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('increment', {
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({
    name: 'age',
    type: 'integer',
  })
  age: number;
}
