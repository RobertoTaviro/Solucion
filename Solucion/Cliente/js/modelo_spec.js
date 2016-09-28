describe("El juego niveles inicialmente tiene", function() {
  var juego;
  var n1;
  var usuario;
  beforeEach(function(){
  		juego=new Juego();
  		n1 = new Nivel(00);
  		usuario = new Usuario("Rober");
  });
  it("una coleccion de niveles y usuarios", function() {
    expect(juego.niveles.length).toEqual(0);
    expect(juego.usuarios.length).toEqual(0);
  });

  it("nivel incial del usuario",function(){
  	expect(usuario.nivel).toEqual(undefined);
  });

  it("añadir nivel al usuario", function() {

  	
  	usuario.agregarNivel(n1);
	expect(usuario.nivel).toEqual(n1);
    
  });



});