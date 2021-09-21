# Decorator
https://www.youtube.com/watch?v=Ab9HxiPLryg&list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8&index=7
https://github.com/martincrb/decorator-design-pattern

Permite definir atributos especiales para una clase de manera dinamica sin tener que definirla en interfaces estaticas, las interfaces estaticas tenderian a crecer infinitamente en la medida que se le puedan asignar mas atributos a una clase principal.

Composición vs herencia. Strategy generaria una gran cantidad de clases ya que nos obligaria a generar muchas clases.

Comportamiento base es un enemigo sin ni un extra, luego queremos decoradores como armadura o casco para integrarlo en enemigos.

Un decorador es a su vez un componente, un enemigo base debe tener polimorfismo y comportarse igual que un enemigo con casco. 

```javascript
class Enemy {
    createDamage(receivedAttack): number
}

class ConcreteEnemy extends Enemy {
    computeDamage(receivedAttack): number {
        return 100;
    }
}

class EnemyDecorator extends Enemy {
    decoratedEnemy: Enemy;
    
    constructor(enemyToDecorate: Enemy) {
        this.decoratedEnemy = enemyToDecorate
    }

    computeDamage(receivedAttack): number { }
}

class ConcreteEnemyDecorator extends EnemyDecorator {
    computeDamage(receivedAttack): number {
        this.decoratedEnemy.computeDamage(receivedAttack)
    }
}
```