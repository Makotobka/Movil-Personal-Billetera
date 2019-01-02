import { Table,PrimaryColumn, Column } from 'ionic-orm'

@Table()
export class tbIcono{
    @PrimaryColumn("int", { generated: true })  IDGR: number;        
    @Column({nullable:true})  NOMBRE: string;
    @Column({nullable:true})  URL: string;
    @Column({nullable:true})  TIPO: string;
}
