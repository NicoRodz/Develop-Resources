# Composite
https://www.youtube.com/watch?v=ES3DnAPted0&list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8&index=9

En entornos graficos o video juegos. 

Cada elemento es una entidad, este patron permite formar entidades de entidades como si fueran un arbol

```javascript
class BigOctopusEnemy implements Entity {
    enemyParts: Entity[]

    constructor() {
        this.enemyParts.push(new FireLeftLeg())
        this.enemyParts.push(new MainBody())
        this.enemyParts.push(new FireRightLeg())
    }

    logic() {
        for (let part of this.enemyParts) {
            part.logic()
        }
    }
}

let mainOctopusEnemy = new BigOctopusEnemy()

function mainLogic() {
    mainOctopusEnemy.logic()
}
```