-- Add New Items to Inventory
INSERT into items(itemNum, binNum, title, vendor, vendorNum, qtyOnHand)
VALUES ('00007', 'A135', 'LIMIT SWITCH', 'EECO', 'MSBZE62RN2', '10'),
('00008', 'A136', 'KJH', 'EECO', 'MSBZE62RN2', '100'),
('00009', 'A137', 'OIUOI', 'EECO', 'MSBZE62JHG', '110'),
('000010', 'A138', 'DSA', 'EECO', 'MSBZEJKGH', '210');

-- Add more qty
INSERT into purchases(item_id, purchase_qty)
VALUES (1, 5)

