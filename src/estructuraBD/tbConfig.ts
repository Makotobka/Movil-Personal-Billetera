import { Table,PrimaryColumn, Column } from 'ionic-orm'
@Table()
export class tbConfig{
    @PrimaryColumn("int", { generated: true })    IDCF: number;  
    @Column({nullable:true})    TIPO: number;  
    @Column({nullable:true})    ESTADO: boolean;  
    @Column({nullable:true})    VALOR: number;  
    @Column({nullable:true})    OBJETO: any;
}