import { Operaciones } from './operaciones';

describe('Test para operaciones', () => {

  describe('Test para Sumar', () => {
    it("Suma 2 numeros", () => {
      let operaciones = new Operaciones();
      expect(operaciones.sumar(3,6)).toEqual(9);
    });
  });
  
  describe('Test para Restar', () => {
    it("Resta 2 numeros", () => {
      let operaciones = new Operaciones();
      expect(operaciones.restar(8,5)).toEqual(3);
    });
  })

  describe('Test para Multiplicar', () => {
    it("Multiplica 2 numeros", () => {
      let operaciones = new Operaciones();
      expect(operaciones.multiplicar(2,7)).toEqual(14);
    });
  })

  describe('Test para Dividir', () => {
    it("Divide 2 numeros", () => {
      let operaciones = new Operaciones();
      expect(operaciones.dividir(30,3)).toEqual(10);
    });
  })

});
