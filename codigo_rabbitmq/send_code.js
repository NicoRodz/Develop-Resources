const celery = require('celery-node');

const client = celery.createClient(
    //"amqp://admin:secret@localhost/myvhost",
     "amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",
     "redis://localhost:6379",
    "ms_notifications"
);

const task = client.createTask("send_code");
const result = task.applyAsync([JSON.stringify({"email": "patricio.aranguiz@zeb.mx", "customer": {"code": "012398"}, "event": {}})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
