const db = require('../models/conn');

class Item {

    constructor(id, itemNum, binNum, title, vendor, vendorNum, qtyOnHand) {
        this.id = id;
        this.itemNum = itemNum;
        this.binNum = binNum;
        this.title = title;
        this.vendor = vendor;
        this.vendorNum = vendorNum;
        this.qtyOnHand = qtyOnHand;
        };
    
    static inventoryChange(itemid, qty) {
        // needs to remove/add inventory to specific item
        console.log('This is itemid: ' + itemid)
        return db.result(`
        UPDATE items
        SET qtyOnHand = qtyOnHand + ${qty}
        WHERE id=${itemid}
        `)
    };

    static getAllItems() {
        // get all items
        return db.any(`
        SELECT * FROM items
        `)
        .then(itemsData => {
            const arrayOfInstances = itemsData.map(item => new Item(item.id, item.itemNum, item.binNum, item.title, item.vendor, item.vendorNum, item.qtyOnHand));

            return arrayOfInstances;
        })
    };

}

module.exports = Item;