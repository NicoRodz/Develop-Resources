const celery = require('celery-node');

const client = celery.createClient(
    "amqp://admin:secret@localhost/myvhost",
    // "amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",
     "redis://localhost:6379",
    "notification_queue"
);

const task = client.createTask("cancel_order");
const result = task.applyAsync([JSON.stringify({"order_number": 2107074046949,"cancelled_at":"2021-06-07 21:45:10.394228"})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
