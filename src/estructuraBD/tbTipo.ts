import { Table,PrimaryColumn, Column } from 'ionic-orm'
@Table()
export class tbTipo{
    @PrimaryColumn("int", { generated: true })  IDTP: number;
    @Column({nullable:true})  IDGR: string;
    @Column({nullable:true})  NOMBRE: string;
    @Column({nullable:true})  OBSERVACION: string;
    @Column({nullable:true})  ESTADO: boolean;
}
