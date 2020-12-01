import { required, prop } from "@rxweb/reactive-form-validators";

  export class Estudiante {  
 
    private fecha_nac: string;
    private nivel: string

    @prop()
      set fechaNac(value: string){
        this.fecha_nac = value;
    }
      get fechaNac(): string{
        return this.fecha_nac;
    }

    @prop()
    set nivelEstu(value: string){
      this.nivel = value;
  }
    get nivelEstu(): string{
      return this.nivel;
  }

      @required()
      nombre: string;
      @required()
      ape_pat: string;
      @required()
      ape_mat: string;
      @prop()
      id_grado: number;

 
  }