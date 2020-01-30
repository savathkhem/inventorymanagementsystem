-- SCHEMA: test

-- DROP SCHEMA test ;

CREATE TABLE items (
    id serial primary key,
    itemNum varchar (100),
    binNum varchar (100),
    title varchar(200),
    vendor varchar(200),
    vendorNum varchar(200),
    qtyOnHand integer
);

CREATE TABLE purchases (
    id serial primary key,
    item_id integer references items(id),
    purchase_qty integer
)