const celery = require('celery-node');

const client = celery.createClient(
    "amqp://admin:secret@localhost/myvhost",
    //"amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",
    "redis://localhost:6379",
    "ms_notifications"
);

const task = client.createTask("scheduled_provider");
const result = task.applyAsync([JSON.stringify({
    email: "patricio.aranguiz@zeb.mx",
    customer: {full_name: "Nicolas Sotelo"},
    event: {
        event_name: "Colchón Individual, Colchón Matrimonial",
        start_date: Date.parse('2021-08-16 17:30:00'),
        end_date: Date.parse('2021-08-16 18:30:00'),
        address: "Córdoba 24 Col. Roma, 06700. CDMX",
        indications: "Entre los Arbustos y Los Sauces",
        who_receives: "Pedro Rincon"
    }
})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
