# Abstract Factory
https://www.youtube.com/watch?v=CVlpjFJN17U&list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8&index=3

Super mario maker es un buen ejemplo para este patron.

Patron de diseño que provee una interficíe para crear familias de objetos relacionados o dependientes sin espcificar su clase concreta.

Los objetos estan relacionados por temas, ojo en que no se especifica su clase concreta. Siempre dependes de una clase abstracta

* Se trabaja de forma independiente a la implementacion concreta de cada clase, ademas permite crear relaciones entre objetos de manera que no se puedan usar de manera indiscriminada. 

## Como funciona? 
En vez de tener una factoria con un metodo de crear cierto objeto, se tiene una factoria abstracta con varios metodos de crear objetos 


```javascript
interface AbstractFactory {
    createMoneda(): Moneda;
    createBloqueInterrogante(): BloqueInterrogante;
}

class GameBoyItemFactory implements AbstractFactory {
    createMoneda(): Moneda {
        return new GameBoyMoneda()
    }
    createBloqueInterrogante(): BloqueInterrogante {
        return new GameBoyBloqueInterrogante()
    }
}
class NintendoDSyItemFactory implements AbstractFactory {
    createMoneda(): Moneda {
        return new NintendoDSyMoneda()
    }
    createBloqueInterrogante(): BloqueInterrogante {
        return new NintendoDSyBloqueInterrogante()
    }
}
```

Se instancia la clase concreta del factory.