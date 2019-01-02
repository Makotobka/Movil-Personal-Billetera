import { Table,PrimaryColumn, Column } from 'ionic-orm'

@Table()
export class tbTrans{
    @PrimaryColumn("int", { generated: true })  IDTR: number;
    @Column({nullable:true})  IDCU: number;
    @Column({nullable:true})  FECHA: number;
    @Column({nullable:true})  MONTO: number;
    @Column({nullable:true})  TIPO: boolean;    //ES INGRESO O EGRESO DE LA TRANSFERENCIA    
    @Column({nullable:true})  ESTADO: number;
}
