# Observer Pattern


```javascript
interface Observable {
    attach(o: Observer);
    detach(o: Observer);
    notify(); // llamaria al update de todos los observer
}

interface Observer {
    update();
}

class YoutubeChannel implements Observable {
    private channelSubscribers = []
    private lastVideoPosted: string = null

    attach(o: Observer) {
        channelSubscribers.push(o)
    }

    detach(o: Observer) {
        // Elimina suscritor
    }

    addNewVideo(title: string) {
        this.lastVideoPosted = title
        this.notify();
        console.log("new youtube video added to channel")
    }

    lastVideoTitle() {
        return this.lastVideoPosted
    }

    notify() {
        for (let subscription of this.channelSubscribers) {
            subscription.update()
        }
    }

}

class Subscriber implements Observer {
    private observable = null

    constructor(observable: YoutubeChannel) {
        this.observable = observable
    }

    update() {
        console.log("new video")
        console.log(this.observable.lastVideoTitle())
    }
}

let channel = new YoutubeChannel()
let s1 = new Subscriber(channel)
let s2 = new Subscriber(channel)

channel.attach(s1)
channel.attach(s2)

channel.addNewVideo("test")


//  Se suscriben al canal
// Se obtiene un console log de cada suscriptor
```

Es dificil que toque implementar este patron, suele ocuparse mucho mas por detras de librerias reactivas 