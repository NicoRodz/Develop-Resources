const celery = require('celery-node');

const client = celery.createClient(
    //"amqp://admin:secret@localhost/myvhost",
    "amqp://ekhyrhwd:J4sGAaBSDky6MQ96YDz6wavBAnBXlDte@donkey.rmq.cloudamqp.com/ekhyrhwd",    
    "redis://localhost:6379",
    "ms_notifications"
);

const task = client.createTask("cancel_sale");
const result = task.applyAsync([JSON.stringify({
    	email: "patricio.aranguiz@zeb.mx",
	customer: {full_name: "Patricio Aranguiz", first_name: "Patricio"},
    	event: {event_name: "Colchón Individual, Colchón Matrimonial", date: "10 de agosto 2021, 13:00 hrs", address: "",}
})]);
// client.disconnect();
/*result.get().then(data => {
    console.log(data);
    client.disconnect();
});*/
