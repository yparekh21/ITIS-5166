const {v4: uuidv4} = require('uuid');

const items = [
    {
        id: '1',
        name: 'Soccer Jersey',
        category: 'New England Kicks',
        description: 'A beautifully crafted soccer jersey made with the finest materials.',
        status: 'available',
        image: '/images/sportsjersey.png'
    },
    {
        id: '2',
        name: 'Soccer Cap',
        category: 'New England Kicks',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportscap.png'
    },
    {
        id: '3',
        name: 'Soccer Accessories',
        category: 'New England Kicks',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/accessories.png'
    },
    {
        id: '4',
        name: 'Basketball Jersey',
        category: 'Charlotte Hoopers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportsjersey.png'
    },
    {
        id: '5',
        name: 'Basketball Cap',
        category: 'Charlotte Hoopers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/soccer_sportscap.png'
    },
    {
        id: '6',
        name: 'Basketball Accessories',
        category: 'Charlotte Hoopers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/accessories.png'
    },
    {
        id: '7',
        name: 'Football Jersey',
        category: 'Utah Throwers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportsjersey.png'
    },
    {
        id: '8',
        name: 'Football Cap',
        category: 'Utah Throwers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportscap.png'
    },
    {
        id: '9',
        name: 'Football Accessories',
        category: 'Utah Throwers',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/accessories.png'
    },
    {
        id: '10',
        name: 'Hockey Jersey',
        category: 'New York Sticks',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportsjersey.png'
    },
    {
        id: '11',
        name: 'Hockey Cap',
        category: 'New York Sticks',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/sportscap.png'
    },
    {
        id: '12',
        name: 'Hockey Accessories',
        category: 'New York Sticks',
        description: 'blah blah blah blah blah',
        status: 'available',
        image: '/images/accessories.png'
    }
];

//exports function that returns all items
exports.find = function () {
    return items;
}

exports.findById = function (id) {
    return items.find(item => item.id === id);
};

exports.save = function (item) {
    item.id = uuidv4();
    items.push(item);
};

exports.updateById = function (id, newItem) {
    let item = items.find(item => item.id === id);
    if (item) {
        item.title = newItem.title;
        item.content = newItem.content;
        return true;
    } else {
        return false;
    }

}

exports.deleteById = function (id) {
    let index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    } else {
        return false;
    }
}