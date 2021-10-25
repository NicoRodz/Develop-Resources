
const TASK_NAME = "insert_new_task_in_zecore"
const QUEUE_NAME = "zecore_async_queue"
const ARGS = {
    "name": "create_new_order",
    "quotation_id": 12
}

const celery = require('celery-node');


async function sleep() {
    return new Promise(() => {
        process.exit()
    }, 3500)
}

(async () => {
    const client = celery.createClient(
        "amqp://guest:guest@localhost:5672",
        "redis://localhost:6379/0",
        QUEUE_NAME
    );
    
    const task = client.createTask(TASK_NAME);
    try {
        const result = await task.applyAsync([JSON.stringify(ARGS)])
        result.get().then(data => {
            console.log(data);
            client.disconnect();
          });
    } catch(e) {
        console.log(e)
    }
})()

// result.get().then(data => {
//     console.log(data);
//     client.disconnect();
// })
// .catch((e) => console.log(e))
