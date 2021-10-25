
const celery = require('celery-node');

const client = celery.createClient(
    "amqp://admin:secret@localhost/myvhost",
  //"amqp://iuroaofo:VTGCtGixy8QUI60l-37d4OjOfNRM4hCx@shrimp.rmq.cloudamqp.com/iuroaofo",
    "redis://localhost:6379/0",
    "notification_queue"
);

const task = client.createTask("new_order");
const result = task.applyAsync([JSON.stringify({
    "user": {
        "id": 171868,
        "first_name": "Nicolas",
        "last_name": "Sotelo",
        "email": "patricioj.aranguiz@gmail.com",
        "phone_number": 5213338234
    },
    "order": {
        "order_number": 2107074046948,
        "currency": "MXN",
        "products": [
            {
                "sku": "SLIM-INDI",
                "product_name": "Servicio de Limpieza Colchón Matri/Queen",
                "quantity": 1,
                "list_price": 1160.0,
                "special_price": 890.0
            },
            {
                "sku": "SLIM-INDI-O-SUB",
                "product_name": "Servicio de Limpieza Colchón Matri/Queen",
                "quantity": 1,
                "list_price": 1160.0,
                "special_price": 890.0
            },
            {
                "sku": "SLIM-INDI-SUB",
                "product_name": "Servicio de Limpieza Colchón Matri/Queen",
                "quantity": 1,
                "list_price": 1160.0,
                "special_price": 890.0
            }

        ],
        "grand_total": 890.0,
        "discounts": {
            "coupon_discount": 0.0,
            "other_discount": 270.0,
            "total_discount": 270.0
        },
        "channel": {
            "id": 3,
            "name": "Amazon"
        }
    },
    "created_at": "2021-07-07 17:47:07.966243"
})]);
// client.disconnect();
result.get().then(data => {
    console.log(data);
    client.disconnect();
})
