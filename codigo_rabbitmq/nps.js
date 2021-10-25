const celery = require('celery-node');

const client = celery.createClient(
    //"amqp://admin:secret@localhost/myvhost",
    "amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",
    "redis://localhost:6379/0",
    "ms_notifications"
);

const task = client.createTask("nps");
const result = task.applyAsync([JSON.stringify({
    email: "eric.zepeda.matus@icloud.com",
    customer: {full_name: 'Eric Zepeda'},
    event: {}
})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
