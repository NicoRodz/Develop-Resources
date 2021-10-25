
const TASK_NAME = ""
const QUEUE_NAME = ""
const ARGS = {}

const celery = require('celery-node');

const client = celery.createClient(
    "amqp://guest:guest@localhost:5672",
    "redis://localhost:6379/0",
    QUEUE_NAME
);

const task = client.createTask(TASK_NAME);
const result = task.applyAsync([JSON.stringify(ARGS)]);

result.get().then(data => {
    console.log(data);
    client.disconnect();
})
