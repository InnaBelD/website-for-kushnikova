const mongoose = require ('mongoose');
var express = require('express');
const router = require('./backend/routers/indexRouter');
const uri = "mongodb+srv://Admin:admin@cluster0.qsw7c.mongodb.net/webAnime";
var app = express();

async function start (){
    try{
        await mongoose.connect(uri,{
            useNewURLParser: true
        });
    }
    catch(error){console.log(error)}
}

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', './public/views');
app.use(express.json());
app.use('/api', router);


app.get('/', function(req, res) {
    const products = [
        { title: 'Кенмочка', price: 1000, img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
        { title: 'Бокуточка', price: 99000, img: 'https://slovnet.ru/wp-content/uploads/2018/11/23-16.jpg' },
        { title: 'Акаашик', price: 999999, img: 'https://pbs.twimg.com/media/E7DyyxdXMAsmfjC.jpg' },
        { title: 'Левочка', price: 12983, img: 'https://avatars.mds.yandex.net/i?id=f2f84c0b0e38a6bf36cfa130ba7c272a-2816445-images-thumbs&n=13&exp=1' },
        { title: 'Якутяночка', price: 1122443, img: 'https://i.pinimg.com/originals/da/15/77/da1577456e0334a0060264ed3c92fb92.jpg' },

    ];
    
    res.render('pages/index', {
        products: products
    });
});

app.get('/catalog', function(req, res) {
    const products = [
        { title: 'Кенмочка', price: 1000, img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
        { title: 'Бокуточка', price: 99000, img: 'https://slovnet.ru/wp-content/uploads/2018/11/23-16.jpg' },
        { title: 'Акаашик', price: 999999, img: 'https://pbs.twimg.com/media/E7DyyxdXMAsmfjC.jpg' },
        { title: 'Левочка', price: 12983, img: 'https://avatars.mds.yandex.net/i?id=f2f84c0b0e38a6bf36cfa130ba7c272a-2816445-images-thumbs&n=13&exp=1' },
        { title: 'Якутяночка', price: 1122443, img: 'https://i.pinimg.com/originals/da/15/77/da1577456e0334a0060264ed3c92fb92.jpg' },

    ];
    res.render('pages/catalog', {
        products: products
    });
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

app.get('/registration', function(req, res) {
    res.render('pages/registration');
});

app.get('/basket', function(req, res) {
    const products = [
        { title: 'Кенмочка', price: 1000, img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
    ];

    res.render('pages/basket', {
        products: products
    });
});
app.get('/like', function(req, res) {
    const products = [
        { title: 'Кенмочка', price: 1000, img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
    ];

    res.render('pages/like', {
        products: products
    });
});
app.get('/product', function(req, res) {
    const imges = [
        { img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { img: 'https://pm1.narvii.com/7842/c04df9b1f1f4b46031043a65be3706a5f1671f78r1-960-1200v2_hq.jpg' },
        { img: 'https://i.pinimg.com/originals/f3/41/12/f34112a0b621ede3125673279a7dc11f.jpg' },
        { img: 'https://static.zerochan.net/Kozume.Kenma.full.2626533.jpg' },

    ];
    const products = [
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
        { title: 'Левочка', price: 12983, img: 'https://avatars.mds.yandex.net/i?id=f2f84c0b0e38a6bf36cfa130ba7c272a-2816445-images-thumbs&n=13&exp=1' },
        { title: 'Якутяночка', price: 1122443, img: 'https://i.pinimg.com/originals/da/15/77/da1577456e0334a0060264ed3c92fb92.jpg' },

    ];

    res.render('pages/product', {
        imges: imges,
        products: products
    });
});

app.get('/search', function(req, res) {
    const products = [
        { title: 'Кенмочка', price: 1000, img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg' },
        { title: 'Куроочка', price: 10000, img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png' },
        { title: 'Бокуточка', price: 99000, img: 'https://slovnet.ru/wp-content/uploads/2018/11/23-16.jpg' },
        { title: 'Акаашик', price: 999999, img: 'https://pbs.twimg.com/media/E7DyyxdXMAsmfjC.jpg' },
        { title: 'Левочка', price: 12983, img: 'https://avatars.mds.yandex.net/i?id=f2f84c0b0e38a6bf36cfa130ba7c272a-2816445-images-thumbs&n=13&exp=1' },
        { title: 'Якутяночка', price: 1122443, img: 'https://i.pinimg.com/originals/da/15/77/da1577456e0334a0060264ed3c92fb92.jpg' },

    ];
    res.render('pages/search', {
        products: products
    });
});

app.get('/account', function(req, res) {
    const orders = [
        { number_order: '1', products:[{ title: 'Кенмочка', 
                                       img: 'https://static.zerochan.net/Kozume.Kenma.full.1733638.jpg',
                                       price: 1000, 
                                       count_prod:1,
                                       del_status: 'доставлено',
                                       del_data: '12.10.2021'},

                                       { title: 'Куроочка', 
                                       img: 'https://i.pinimg.com/originals/55/1b/4e/551b4ec5979ce8573f191d0185d2a36d.png',
                                       price: 10000, 
                                       count_prod:2,
                                       del_status: 'доставлено',
                                       del_data: '12.10.2021'}
                                    ], 
                                deliv_cost: 200,},
        {number_order: '2',
            products: [{
                    title: 'Бокуточка',
                    img: 'https://slovnet.ru/wp-content/uploads/2018/11/23-16.jpg',
                    price: 99000,
                    count_prod: 3,
                    del_status: 'доставляется',
                    del_data: '10.11.2021'
                },

                {
                    title: 'Акаашик',
                    img: 'https://pbs.twimg.com/media/E7DyyxdXMAsmfjC.jpg',
                    price: 999999,
                    count_prod: 1,
                    del_status: 'доставляется',
                    del_data: '10.11.2021'
                }
            ],
            deliv_cost: 200,},

    ];
    res.render('pages/account', {
        orders: orders
    });
});

app.get('/add', function(req, res) {
    res.render('pages/add');
});

start();

app.listen(8080);