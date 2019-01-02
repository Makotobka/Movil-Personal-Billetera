import { Table,PrimaryColumn, Column } from 'ionic-orm'
@Table()
export class tbCuenta{
    @PrimaryColumn("int", { generated: true })  IDCU: number;    
    @Column({nullable:true})  IDGR: number;
    @Column({nullable:true})  NOMBRE: string;
    @Column({nullable:true})  DESCRIPCION: string;
    @Column({nullable:true})  SALDO: number;
    @Column({nullable:true})  FECHA: Date;
    @Column({nullable:true})  ESTADO: boolean;
}
