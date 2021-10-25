const celery = require('celery-node');

const client = celery.createClient(
    //"amqp://admin:secret@localhost/myvhost",
    "amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",
    "redis://localhost:6379",
    "ms_notifications"
);

const task = client.createTask("scheduled_customer");
const result = task.applyAsync([JSON.stringify({
    email: "patricio.aranguiz@zeb.mx",
    customer: {first_name: "Dan"},
    event: {worker_name: "Mario Alvarez", event_name: "Colchón Individual, Colchón Matrimonial",
        start_date: Date.parse('2021-08-25 15:30:00'),
        end_date: Date.parse('2021-08-25 17:00:00'),}
})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
