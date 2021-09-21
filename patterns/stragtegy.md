# Strategy pattern (patron de comportamiento)
https://www.youtube.com/watch?v=VQ8V0ym2JSo&list=PLJkcleqxxobUJlz1Cm8WYd-F_kckkDvc8&index=4

Sirve para encapsular logica, diferentes algortmos encapsulados. Asi se puede cambiar de una logica a otra de manera elegante.

La clave está en crear objetos que representen esta estrategia que implementan una interfaz por lo cual son objetos polimorficos.

```javascript
interface AttackStrategy {
    ejecutarAtaque(battle: BattleState): BattleState
}

function computeTurn(state: BattleState, myAttack: AttackStrategy, foeAttack: AttackStrategy) {
    state = myAttack.ejecutarAtaque(state);
    state = foeAttack.ejecutarAtaque(state);
}

---

class RainStrategy implements AttackStrategy {
    ejecutarAtaque(battle: BattleState): BattleState {
        let randValue = Math.random()
        if (randValue > 0.5) {
            battle.startRain();
        }
        return battle
    }
}

class DiminishStatStrategy implements AttackStrategy {
    private stat: PokemonStat;

    constructor(stat: PokemonStat) {
        this.stat = stat
    }

    ejecutarAtaque(battle: BattleState): BattleState {
        battle.foePokemon.diminishStat(this.stat)
        return battle
    }
}

En funcion del ataque que selecciones podemos usar una u otra estrategia.
```

