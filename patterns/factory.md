# Factory pattern

Este patron nos permite componer clases o objetos con comportamientos parecidos

A partir de una entidad base podemos aplicar polimorfismo tras el cual con una entidad base podremos aplicar metodos que realicen acciones concretas por clase pero tratarlas a todas por igual

```javascript
class Entity {
    updateLogic() {
        // Do something
    }
}
```
```javascript
class Boomba implements Entity {
    
}
class Koopa implements Entity {
    
}
class Goomba implements Entity {

}
```

Factory entra en el momento en que tenemos una clase que instancia, dadas diferentes condiciones de negocio, una clase de las mencionadas anterioemte, asumiento que contiene ciertos metodos que con certeza existen y se pueden ejecutar independientemente de la clase que se llame.

Factory encapsula la estrategia de creación o construcción de objetos y clases, permite el uso polimorfico de la clase.

Podemos tener varias factories para generar objetos dados ciertas condiciones esperadas 

Genera dependencias entre interfaces.