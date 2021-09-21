# Singleton 

Asegurar de que existe solo 1 instancia de una clase concreta. Es imposible instanciar mas de una instancia. De ninguna manera se podrá tener mas de una misma clase a nivel global.

Posible casos de uso, acceso a recursos que se puede proveer de manera individual, por ejemplo, acceso al fichero de log. No quieres varias instancias escribiendo en el mismo archivo. 

```javascript
truco: el constructor es privado

class Singleton {
    private static instance: Singleton

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance
    }
}
```
Desde fuera de la misma clase no se puede instanciar esta clase.

Esto complica el unic testing de manera innecesaria.
