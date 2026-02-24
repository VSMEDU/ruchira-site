const menuItems = [
  { id: 'babycorn-manchurian', name: "Babycorn Manchurian", price: null, category: "Appetizers", spice: 'None', veg: true, tags: ["Manchurian"], description: "" },
  { id: 'chicken-manchurian', name: "Chicken Manchurian", price: 1099, category: "Appetizers", spice: 'None', veg: false, tags: ["Manchurian"], description: "" },
  { id: 'gobi-manchurian', name: "Gobi Manchurian", price: null, category: "Appetizers", spice: 'None', veg: true, tags: ["Manchurian"], description: "" },
  { id: 'kodi-vepudu', name: "Kodi Vepudu", price: 1099, category: "Appetizers", spice: 'None', veg: false, tags: ["Manchurian"], description: "" },
  { id: 'paneer-manchurian', name: "Paneer Manchurian", price: null, category: "Appetizers", spice: 'None', veg: true, tags: ["Manchurian"], description: "" },
  { id: 'karampodi-chkn', name: "Karampodi Chkn", price: null, category: "Appetizers", spice: 'None', veg: false, tags: ["Manchurian"], description: "" },
  { id: 'veg-manchurian', name: "Veg Manchurian", price: 1099, category: "Appetizers", spice: 'None', veg: true, tags: ["Manchurian"], description: "" },
  { id: 'goat-pepper-fry', name: "Goat pepper Fry", price: 1799, category: "Appetizers", spice: 'None', veg: false, tags: ["Manchurian"], description: "" },
  { id: 'chili-baby-corn', name: "Chili Baby Corn", price: 1099, category: "Appetizers", spice: 'None', veg: true, tags: ["Chili"], description: "" },
  { id: 'chili-chicken', name: "Chili Chicken", price: 1399, category: "Appetizers", spice: 'None', veg: false, tags: ["Chili"], description: "" },
  { id: 'chili-gobi', name: "Chili Gobi", price: null, category: "Appetizers", spice: 'None', veg: true, tags: ["Chili"], description: "" },
  { id: 'goat-sukha-4pcs-goat-chops', name: "Goat Sukha ( 4pcs) Goat chops", price: 1099, category: "Appetizers", spice: 'None', veg: false, tags: ["Chili"], description: "" },
  { id: 'chili-paneer', name: "Chili Paneer", price: 1599, category: "Appetizers", spice: 'None', veg: true, tags: ["Chili"], description: "" },
  { id: 'paneer-65', name: "Paneer 65", price: 1499, category: "Appetizers", spice: 'None', veg: true, tags: ["65"], description: "" },
  { id: 'chicken-65', name: "Chicken 65", price: 1399, category: "Appetizers", spice: 'None', veg: false, tags: ["65"], description: "" },
  { id: 'jalapeno-paneer', name: "Jalapeno Paneer", price: null, category: "Appetizers", spice: 'None', veg: true, tags: ["Kebabs"], description: "" },
  { id: 'jalapeno-chicken', name: "Jalapeno Chicken", price: 1399, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'chicken-tikka-kabab', name: "Chicken Tikka Kabab", price: 999, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'hariyali-kabab', name: "Hariyali Kabab", price: 999, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'chili-garlic-chicken', name: "Chili Garlic Chicken", price: 1399, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'goat-ghee-roast', name: "Goat Ghee Roast", price: 1799, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'tandoori-chicken', name: "Tandoori chicken", price: null, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'kodi-vepudu-bone-in', name: "Kodi vepudu ( Bone In)", price: null, category: "Appetizers", spice: 'None', veg: false, tags: ["Kebabs"], description: "" },
  { id: 'pappu-rasam-sambar', name: "Pappu/Rasam/Sambar", price: null, category: "Curry Couple Pack", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'pappu-rasam-sambar-2', name: "Pappu/Rasam/Sambar", price: null, category: "Curry Couple Pack", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'chapati', name: "Chapati", price: null, category: "Curry Couple Pack", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'chapati-2', name: "Chapati", price: null, category: "Curry Couple Pack", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'roti-pachidi', name: "Roti Pachidi", price: null, category: "Curry Couple Pack", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'roti-pachidi-2', name: "Roti Pachidi", price: null, category: "Curry Couple Pack", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'veg-curry', name: "Veg Curry", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'chicken-curry', name: "Chicken Curry", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'veg-fry', name: "Veg Fry", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'rasam', name: "Rasam", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'rasam-2', name: "Rasam", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'sambar', name: "Sambar", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'sambar-2', name: "Sambar", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'pappu', name: "Pappu", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'pappu-2', name: "Pappu", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'pachidi', name: "Pachidi", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'roti-pachidi-3', name: "Roti Pachidi", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'dessert', name: "Dessert", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'dessert-2', name: "Dessert", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'white-rice', name: "White Rice", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'white-rice-2', name: "White Rice", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'chapati-3', name: "Chapati", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'chapati-4', name: "Chapati", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'fryums', name: "Fryums", price: null, category: "Thali", spice: 'None', veg: false, tags: ["comes with"], description: "" },
  { id: 'fryums-2', name: "Fryums", price: null, category: "Thali", spice: 'None', veg: true, tags: ["comes with"], description: "" },
  { id: 'chapati-5', name: "Chapati", price: null, category: "Breads", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'butter-naan', name: "Butter Naan ?", price: null, category: "Breads", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'garlic-naan', name: "Garlic Naan ?", price: null, category: "Breads", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'plain-naan', name: "Plain Naan ?", price: null, category: "Breads", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'perugu-charu', name: "Perugu Charu", price: 599, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'curd-rice-with-pickel', name: "Curd Rice with pickel", price: 699, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'goat-curry-bone-in', name: "Goat Curry Bone In", price: 1499, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'sambar-rasam', name: "Sambar/Rasam", price: 599, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'gongura-goat-curry-bone-in', name: "Gongura Goat Curry Bone In", price: 399, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'malai-kofta', name: "Malai Kofta", price: 1199, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'shrimp-fry', name: "Shrimp Fry", price: 1299, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'paneer-butter-masala', name: "Paneer Butter Masala", price: 1299, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'butter-chicken', name: "Butter Chicken", price: 1199, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'paneer-tikka-masala', name: "Paneer Tikka Masala", price: 1299, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'mutton-keema-fry', name: "Mutton Keema Fry", price: 1499, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'phool-makhani-butter-masala', name: "Phool Makhani Butter Masala", price: 1099, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'chicken-keema-fry', name: "Chicken Keema Fry", price: 1099, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'kadai-paneer', name: "Kadai paneer", price: null, category: "Rice Curries (White - Basmati)", spice: 'None', veg: true, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'chicken-tikka-masala', name: "Chicken Tikka Masala", price: 1299, category: "Rice Curries (White - Basmati)", spice: 'None', veg: false, tags: ["(Order to make) Ala Carte"], description: "" },
  { id: 'gutti-vankaya-biryani', name: "Gutti Vankaya Biryani", price: 1399, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'andhra-chicken-biryani', name: "Andhra Chicken Biryani", price: 1499, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'gongura-paneer-biryani', name: "Gongura Paneer Biryani", price: 1799, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-fry-piece-biryani', name: "Chicken Fry Piece Biryani", price: 1499, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-biryani', name: "Paneer Biryani", price: 1599, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-handi-biryani', name: "Chicken Handi Biryani", price: 1499, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-pepper-roast-biryani', name: "Paneer Pepper Roast Biryani", price: 1599, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-keema-biryani', name: "Chicken Keema Biryani", price: 1499, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'jalapeno-paneer-biryani', name: "Jalapeno Paneer Biryani", price: 1599, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-tikka-boneless-biryani', name: "Chicken Tikka Boneless Biryani", price: 1499, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'veg-keema-biryani-soya', name: "Veg Keema Biryani (Soya)", price: 1399, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'vijayawada-boneless-chicken-biryani', name: "Vijayawada Boneless Chicken Biryani", price: 1599, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'veg-handi-biryani', name: "Veg Handi Biryani", price: 1299, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mutton-keema-biryani', name: "Mutton Keema Biryani", price: 1799, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'goat-ghee-roast-biryani', name: "Goat Ghee Roast Biryani", price: 1799, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'goat-pepper-roast-biryani', name: "Goat Pepper Roast Biryani", price: 1799, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'masakali-chicken-biryani-boneless', name: "Masakali chicken biryani ( Boneless)", price: null, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'shrimp-biryani', name: "Shrimp Biryani", price: 1799, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'egg-biryani', name: "Egg Biryani", price: 1399, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'goat-handi-biryani', name: "Goat Handi Biryani", price: null, category: "Biryanis (Gongura/Avakaya/Ulavacharu)", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-pulav', name: "Paneer Pulav", price: 1699, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'andhra-chicken-pulav', name: "Andhra Chicken Pulav", price: 1499, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'gutti-vankaya-pulav', name: "Gutti Vankaya Pulav", price: null, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'raju-gari-kodi-pulav-bone-in', name: "Raju Gari Kodi Pulav (Bone in)", price: 1399, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'veg-keema-pulav-soya', name: "Veg Keema Pulav (Soya)", price: 1399, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-keema-pulav', name: "Chicken Keema Pulav", price: 1499, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'bagara-rice', name: "Bagara Rice", price: 1199, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-tikka-pulav-boneless', name: "Chicken Tikka Pulav (Boneless)", price: 1499, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'bagara-rice-family-pack', name: "Bagara Rice Family Pack", price: 3499, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'goat-ghee-roast-pulav-bone-in', name: "Goat Ghee Roast Pulav (Bone in)", price: 1799, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-pulav-family-pack', name: "Paneer Pulav Family Pack", price: 4499, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'goat-pepper-roast-pulav', name: "Goat Pepper Roast Pulav", price: 1799, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'gutti-vankaya-pulav-family-pack', name: "Gutti Vankaya Pulav Family Pack", price: 3999, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mutton-keema-pulav', name: "Mutton Keema Pulav", price: 1799, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'veg-keema-pulav-soya-family-pack', name: "Veg Keema Pulav (Soya) Family Pack", price: 3999, category: "Pulav", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'raju-gari-shrimp-pulav', name: "Raju Gari Shrimp Pulav", price: 1699, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'andhra-chicken-pulav-family-pack', name: "Andhra Chicken Pulav Family Pack", price: 4399, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'raju-gari-kodi-pulav-bone-in-family-pack', name: "Raju Gari Kodi Pulav (Bone in) Family Pack", price: null, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'chicken-keema-pulav-family-pack', name: "Chicken Keema Pulav Family Pack", price: 4399, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'chicken-tikka-pulav-boneless-family-pack', name: "Chicken Tikka Pulav (Boneless) Family Pack", price: 4199, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'goat-ghee-roast-pulav-bone-in-family-pack', name: "Goat Ghee Roast Pulav (Bone in) Family Pack", price: 4999, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'goat-pepper-roast-pulav-family-pack', name: "Goat Pepper Roast Pulav Family Pack", price: 4999, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'mutton-keema-pulav-family-pack', name: "Mutton Keema Pulav Family Pack", price: 4999, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'raju-gari-shrimp-pulav-family-pack', name: "Raju Gari Shrimp Pulav Family Pack", price: 4599, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'vijayawada-boneless-chicken-pulav-family-pack', name: "Vijayawada Boneless Chicken Pulav Family Pack", price: 4399, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'add-jumbo-packs', name: "Add jumbo packs", price: null, category: "Pulav", spice: 'None', veg: false, tags: [], description: "" },
  { id: '12-ozveg-curry', name: "12 ozVeg Curry", price: null, category: "Family Packs", spice: 'None', veg: true, tags: [], description: "" },
  { id: '12ozchicken-curry', name: "12ozChicken Curry", price: null, category: "Family Packs", spice: 'None', veg: false, tags: [], description: "" },
  { id: '12ozveg-fry', name: "12ozVeg Fry", price: null, category: "Family Packs", spice: 'None', veg: true, tags: [], description: "" },
  { id: '12ozkodi-vepudu', name: "12ozKodi Vepudu", price: null, category: "Family Packs", spice: 'None', veg: false, tags: [], description: "" },
  { id: '12oz-sambar', name: "12oz Sambar", price: null, category: "Family Packs", spice: 'None', veg: true, tags: [], description: "" },
  { id: '12ozsambar', name: "12ozSambar", price: null, category: "Family Packs", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'single-biryani-38oz', name: "Single Biryani ( 38oz)", price: null, category: "Budget Biryanis", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'family-pack-38-oz-38-oz', name: "Family pack 38 oz + 38 oz", price: null, category: "Budget Biryanis", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'jumbo-biryani-3-singles-biryanis', name: "Jumbo Biryani - 3 Singles biryanis", price: null, category: "Budget Biryanis", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'veg-fried-rice', name: "Veg Fried Rice", price: 1299, category: "Fried Rice", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-fried-rice', name: "Chicken Fried Rice", price: 1399, category: "Fried Rice", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-fried-rice', name: "Paneer Fried Rice", price: 1299, category: "Fried Rice", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-keema-fried-rice', name: "Chicken Keema Fried Rice", price: 1399, category: "Fried Rice", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'egg-fried-rice', name: "Egg Fried Rice", price: 1299, category: "Fried Rice", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'mutton-keema-fried-rive', name: "Mutton Keema Fried Rive", price: 1599, category: "Fried Rice", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'vijayawada-boneless-chicken-fried-rice', name: "Vijayawada Boneless Chicken Fried Rice", price: 1499, category: "Fried Rice", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'jeera-rice', name: "Jeera Rice", price: null, category: "Rice Specials", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'curd-rice', name: "Curd Rice", price: null, category: "Rice Specials", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'bagara-rice-with-chicken-curry', name: "Bagara rice with chicken curry", price: null, category: "Rice Specials", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'bagara', name: "Bagara", price: null, category: "Rice Specials", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'veg-noodles', name: "Veg Noodles", price: 999, category: "Noodles", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-noodles', name: "Chicken Noodles", price: 1199, category: "Noodles", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-noodes', name: "Paneer Noodes", price: 1299, category: "Noodles", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'egg-noodles', name: "Egg Noodles", price: 1099, category: "Noodles", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'paneer-veg-keema-manchuria-mandis', name: "Paneer/veg keema/ Manchuria Mandis", price: null, category: "Mandi Biryani", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chicken-leg-piece-chkn-tikka-hariyali', name: "Chicken leg piece / Chkn tikka/ Hariyali", price: null, category: "Mandi Biryani", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'single-piece', name: "Single Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'single-piece-2', name: "Single Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'double-piece', name: "Double Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'double-piece-2', name: "Double Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'triple-piece', name: "Triple Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'triple-piece-2', name: "Triple Piece", price: null, category: "Mandi Biryani", spice: 'None', veg: false, tags: [], description: "" },
  { id: 'gulab-jamun', name: "Gulab Jamun", price: 499, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'rasmalai-regular-mango', name: "Rasmalai Regular/Mango", price: 599, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'carrot-halwa', name: "Carrot Halwa", price: null, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'rice-kheer', name: "Rice Kheer", price: null, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'pineapple-mango-sira', name: "Pineapple / Mango Sira", price: null, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'kadhu-ka-kheer', name: "Kadhu Ka Kheer", price: null, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mango-lassi', name: "Mango Lassi", price: 399, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'badam-milk', name: "Badam milk", price: 499, category: "Desserts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'idli', name: "Idli", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'vada', name: "Vada", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'dosa', name: "Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'masala-dosa', name: "Masala Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'onion-dosa', name: "Onion Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'paneer-dosa', name: "Paneer Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'cheese-dosa', name: "Cheese Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'ghee-karam-dosa', name: "Ghee Karam Dosa", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'pesarattu', name: "Pesarattu", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'plain-uttapam', name: "Plain Uttapam", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'onion-uttapam', name: "Onion Uttapam", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mysore-bonda', name: "Mysore Bonda", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'poori-w-aloo-curry', name: "Poori w/ Aloo Curry", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'pongal', name: "Pongal", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'upma', name: "Upma", price: null, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-idly-vada', name: "Combo ( Idly, Vada)", price: 699, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-idly-vada-oz-pongal', name: "Combo ( Idly, Vada, oz Pongal)", price: 999, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-idly-vada-oz-upma', name: "Combo ( Idly, Vada, oz Upma)", price: 999, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-idly-vada-mini-dosa', name: "Combo ( Idly, Vada, Mini Dosa)", price: 949, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-idly-vada-poori', name: "Combo ( Idly, Vada, Poori)", price: 949, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'combo-vada-mysore-bonda', name: "Combo ( Vada, Mysore Bonda)", price: 949, category: "Breakfast Items", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'cut-mirchi', name: "Cut Mirchi", price: 499, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mirchi-bajji-5pcs', name: "Mirchi bajji (5pcs)", price: 599, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'stuffed-mirchi-bajji-5pcs', name: "Stuffed mirchi bajji ( 5pcs)", price: 499, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'punugulu-10-pcs', name: "Punugulu (10 Pcs)", price: 499, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'onion-pakoda', name: "Onion Pakoda", price: 449, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'masala-vada-4-pcs', name: "Masala Vada (4 Pcs)", price: 599, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'aloo-samosa-2-pcs', name: "Aloo Samosa (2 Pcs)", price: 299, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'onion-samosa-6-pcs', name: "Onion Samosa (6 Pcs)", price: 399, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'aloo-bajji', name: "Aloo bajji", price: 499, category: "Evening Snacks", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'rava-laddu-4p', name: "Rava Laddu 4p", price: 499, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'sunundulu-4p', name: "Sunundulu 4p", price: 499, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'boondi-laddu', name: "Boondi Laddu", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'karapusa-thin', name: "Karapusa - Thin", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'karapusa-thick', name: "Karapusa - Thick", price: 499, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'fryums-3', name: "Fryums", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'murukulu', name: "Murukulu", price: 599, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'masala-peanuts', name: "Masala Peanuts", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'pali-chekki', name: "Pali Chekki", price: 699, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'pappu-chekkulu', name: "Pappu Chekkulu", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'bellam-gavalu', name: "Bellam Gavalu?", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'ribbon-pakoda', name: "Ribbon pakoda", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'badusha', name: "Badusha", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'madatha-kaja', name: "Madatha Kaja", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'boondi-mixture', name: "Boondi Mixture", price: 499, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'mysore-pak', name: "Mysore Pak", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'jalebi', name: "Jalebi", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'chegodilu', name: "Chegodilu", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'poornalu', name: "Poornalu", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'bobbatlu', name: "Bobbatlu", price: null, category: "Snacks (Hot & Sweet)", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'hormone-free-yogurt-braums-milk', name: "Hormone Free Yogurt (Braums Milk)", price: 599, category: "Batters/Yogurts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'dosa-batter-2lb', name: "Dosa Batter 2lb", price: 649, category: "Batters/Yogurts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'idly-batter-2lb', name: "Idly Batter 2lb", price: 649, category: "Batters/Yogurts", spice: 'None', veg: true, tags: [], description: "" },
  { id: 'organic-youghart', name: "Organic Youghart", price: 699, category: "Batters/Yogurts", spice: 'None', veg: true, tags: [], description: "" },
];

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

const TAX_RATE = 0.05;
const cart = {};
const menuMap = new Map(menuItems.map((item) => [item.id, item]));

const els = {
  menuGrid: document.getElementById('menu-grid'),
  categoryTabs: document.getElementById('category-tabs'),
  cartItems: document.getElementById('cart-items'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartTax: document.getElementById('cart-tax'),
  cartTotal: document.getElementById('cart-total'),
  cartCount: document.getElementById('cart-count'),
  addressField: document.getElementById('address-field'),
  toast: document.getElementById('toast')
};

function formatMoney(value) {
  return '$???';
}

function applyCurryDistrictTheme() {
  const style = document.createElement('style');
  style.setAttribute('data-theme', 'curry-district');
  style.textContent = `
    :root{
      --cd-bg:#0f0f0f;
      --cd-surface:#161616;
      --cd-surface-2:#1f1f1f;
      --cd-border:#2a2a2a;
      --cd-text:#f5f1e6;
      --cd-muted:#c9c1b3;
      --cd-gold:#d6a332;
      --cd-gold-2:#b8860b;
      --cd-danger:#d24b3a;
    }

    html, body{ background:var(--cd-bg) !important; color:var(--cd-text) !important; }

    .container, .page, main{ color:var(--cd-text); }

    .menu-card{
      background:var(--cd-surface) !important;
      border:1px solid var(--cd-border) !important;
      box-shadow:none !important;
    }
    .menu-card h3{ color:var(--cd-text) !important; }
    .lede, .small, .cart-meta{ color:var(--cd-muted) !important; }

    .price{ color:var(--cd-gold) !important; font-weight:700; }

    button, .small-button{
      border:1px solid var(--cd-border) !important;
      background:var(--cd-surface-2) !important;
      color:var(--cd-text) !important;
    }
    button:hover, .small-button:hover{
      border-color:var(--cd-gold) !important;
      color:var(--cd-gold) !important;
    }

    .primary, .primary-button, #place-whatsapp{
      background:var(--cd-gold) !important;
      border-color:var(--cd-gold) !important;
      color:#121212 !important;
      font-weight:700;
    }
    .primary:hover, .primary-button:hover, #place-whatsapp:hover{
      background:var(--cd-gold-2) !important;
      border-color:var(--cd-gold-2) !important;
    }

    .category-button{
      background:transparent !important;
      color:var(--cd-muted) !important;
      border:1px solid var(--cd-border) !important;
    }
    .category-button.active{
      background:var(--cd-surface-2) !important;
      border-color:var(--cd-gold) !important;
      color:var(--cd-gold) !important;
    }

    .tag{
      background:rgba(214,163,50,.12) !important;
      border:1px solid rgba(214,163,50,.25) !important;
      color:var(--cd-gold) !important;
    }
    .tag.veg{
      background:rgba(102,187,106,.12) !important;
      border-color:rgba(102,187,106,.25) !important;
      color:#66bb6a !important;
    }

    .cart-row{
      border-bottom:1px solid var(--cd-border) !important;
    }

    #toast{
      background:var(--cd-surface-2) !important;
      border:1px solid var(--cd-border) !important;
      color:var(--cd-text) !important;
    }

    input, textarea, select{
      background:var(--cd-surface) !important;
      border:1px solid var(--cd-border) !important;
      color:var(--cd-text) !important;
    }
    input::placeholder, textarea::placeholder{ color:rgba(201,193,179,.7) !important; }
    input:focus, textarea:focus, select:focus{
      outline:none !important;
      border-color:var(--cd-gold) !important;
      box-shadow:0 0 0 3px rgba(214,163,50,.12) !important;
    }

    a{ color:var(--cd-gold) !important; }
    a:hover{ color:var(--cd-gold-2) !important; }
  `;

  document.head.querySelector('style[data-theme="curry-district"]')?.remove();
  document.head.appendChild(style);
}

function renderCategories() {
  if (!els.categoryTabs) return;
  const categories = ['All', ...new Set(menuItems.map((m) => m.category))];
  els.categoryTabs.innerHTML = categories
    .map(
      (c, idx) =>
        `<button class="category-button${idx === 0 ? ' active' : ''}" data-category="${c}">${c}</button>`
    )
    .join('');
}

function renderMenu(category = 'All') {
  if (!els.menuGrid) return;
  const filtered =
    category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);

  els.menuGrid.innerHTML = filtered
    .map(
      (item) => `
      <article class="menu-card">
        <div class="tag-row">
          <span class="tag ${item.veg ? 'veg' : ''}">${item.veg ? 'Veg' : 'Non-veg'}</span>
          <span class="tag">${item.spice} spice</span>
          <span class="tag">${item.category}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="lede small">${item.description}</p>
        <div class="price-row">
          <span class="price">${formatMoney(item.price)}</span>
          <button class="small-button" data-add="${item.id}">Add</button>
        </div>
        <div class="tag-row">
          ${item.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </article>;
    `
    )
    .join('');
}

function addToCart(id) {
  if (!menuMap.has(id)) return;
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast('Added to cart');
}

function updateQuantity(id, delta) {
  if (!cart[id]) return;
  cart[id] += delta;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  renderCart();
}

function clearCart() {
  Object.keys(cart).forEach((key) => delete cart[key]);
  renderCart();
  showToast('Cart cleared');
}

function calculateTotals() {
  const items = Object.entries(cart);
  const subtotal = items.reduce((sum, [id, qty]) => {
    const item = menuMap.get(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const tax = subtotal * TAX_RATE;
  return {
    subtotal,
    tax,
    total: subtotal + tax,
    count: items.reduce((acc, [, qty]) => acc + qty, 0)
  };
}

function renderCart() {
  if (
    !els.cartItems ||
    !els.cartSubtotal ||
    !els.cartTax ||
    !els.cartTotal ||
    !els.cartCount
  ) {
    return;
  }
  const entries = Object.entries(cart);
  if (!entries.length) {
    els.cartItems.innerHTML = `<p class="lede small">Your cart is empty. Add some curries or biryani!</p>`;
    els.cartSubtotal.textContent = formatMoney(0);
    els.cartTax.textContent = formatMoney(0);
    els.cartTotal.textContent = formatMoney(0);
    els.cartCount.textContent = '0';
    return;
  }

  els.cartItems.innerHTML = entries
    .map(([id, qty]) => {
      const item = menuMap.get(id);
      if (!item) return '';
      return `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <div class="cart-meta">
              <span>${item.veg ? 'Veg' : 'Non-veg'}</span>
              <span>·</span>
              <span>${item.spice}</span>
            </div>
          </div>
          <div class="qty">
            <button data-qty-delta="-1" data-id="${id}">−</button>
            <span>${qty}</span>
            <button data-qty-delta="1" data-id="${id}">+</button>
            <span>${formatMoney(item.price * qty)}</span>
          </div>
        </div>
      `;
    })
    .join('');

  const totals = calculateTotals();
  els.cartSubtotal.textContent = formatMoney(totals.subtotal);
  els.cartTax.textContent = formatMoney(totals.tax);
  els.cartTotal.textContent = formatMoney(totals.total);
  els.cartCount.textContent = totals.count.toString();
}

function showToast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  requestAnimationFrame(() => {
    els.toast.classList.add('show');
  });
  setTimeout(() => {
    els.toast.classList.remove('show');
  }, 2000);
}

function setActiveCategory(category) {
  document
    .querySelectorAll('.category-button')
    .forEach((btn) => btn.classList.toggle('active', btn.dataset.category === category));
  renderMenu(category);
}

function toggleAddressField(type) {
  if (!els.addressField) return;
  els.addressField.classList.toggle('hidden', type !== 'delivery');
}

function buildOrderSummary() {
  const name = document.getElementById('customer-name')?.value.trim() || '';
  const phone = document.getElementById('customer-phone')?.value.trim() || '';
  const address = document.getElementById('customer-address')?.value.trim() || '';
  const timePref = document.getElementById('customer-time')?.value.trim() || '';
  const notes = document.getElementById('customer-notes')?.value.trim() || '';
  const type = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';

  const totals = calculateTotals();

  if (!Object.keys(cart).length) {
    showToast('Add at least one item to cart');
    return null;
  }
  if (!name || !phone) {
    showToast('Please add your name and phone');
    return null;
  }

  const lines = [
    'Ruchira Indian Curry Point order',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Order type: ${type}`,
    type === 'delivery' ? `Address: ${address || 'Share address on call'}` : 'Pickup/ dine-in',
    timePref ? `Preferred time: ${timePref}` : '',
    '',
    'Items:'
  ].filter(Boolean);

  Object.entries(cart).forEach(([id, qty], idx) => {
    const item = menuMap.get(id);
    if (!item) return;
    lines.push(`${idx + 1}. ${item.name} x${qty} — ${formatMoney(item.price * qty)}`);
  });

  lines.push(
    '',
    `Subtotal: ${formatMoney(totals.subtotal)}`,
    `GST (5%): ${formatMoney(totals.tax)}`,
    `Total: ${formatMoney(totals.total)}`,
    notes ? `Notes: ${notes}` : 'Notes: -',
    '',
    'Thank you! Team Ruchira.'
  );

  return lines.join('\n');
}

function buildCheckoutPayload() {
  const name = document.getElementById('customer-name')?.value.trim() || '';
  const phone = document.getElementById('customer-phone')?.value.trim() || '';
  const address = document.getElementById('customer-address')?.value.trim() || '';
  const timePref = document.getElementById('customer-time')?.value.trim() || '';
  const notes = document.getElementById('customer-notes')?.value.trim() || '';
  const type = document.querySelector('input[name="orderType"]:checked')?.value || 'pickup';

  if (!Object.keys(cart).length) {
    showToast('Add at least one item to cart');
    return null;
  }
  if (!name || !phone) {
    showToast('Please add your name and phone');
    return null;
  }

  const items = Object.entries(cart).map(([id, qty]) => ({ id, qty }));
  const invalid = items.find(({ id }) => {
    const item = menuMap.get(id);
    return !item || typeof item.price !== 'number';
  });
  if (invalid) {
    showToast('One or more items are missing a price');
    return null;
  }

  return {
    items,
    orderType: type,
    customer: {
      name,
      phone,
      address,
      timePref,
      notes
    }
  };
}

async function payNow() {
  const payload = buildCheckoutPayload();
  if (!payload) return;

  const button = document.getElementById('pay-now');
  if (button) {
    button.disabled = true;
    button.textContent = 'Redirecting...';
  }

  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (parseError) {
      throw new Error(text || 'Payment failed');
    }
    if (!response.ok || !data?.url) {
      throw new Error(data?.error || 'Payment failed');
    }
    window.location.href = data.url;
  } catch (error) {
    showToast(error.message || 'Payment failed');
    if (button) {
      button.disabled = false;
      button.textContent = 'Pay now';
    }
  }
}

function showCheckoutStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('success')) {
    showToast('Payment successful. We will confirm your order.');
  } else if (params.has('canceled')) {
    showToast('Payment canceled.');
  }
}

function copyOrder() {
  const summary = buildOrderSummary();
  if (!summary) return;
  if (!navigator.clipboard) {
    showToast('Copy not supported here');
    return;
  }
  navigator.clipboard
    .writeText(summary)
    .then(() => showToast('Order summary copied'))
    .catch(() => showToast('Copy failed'));
}

function handleClicks(event) {
  const addBtn = event.target.closest('[data-add]');
  if (addBtn) {
    const id = addBtn.dataset.add;
    addToCart(id);
    return;
  }

  const catBtn = event.target.closest('[data-category]');
  if (catBtn) {
    setActiveCategory(catBtn.dataset.category);
    return;
  }

  const qtyBtn = event.target.closest('[data-qty-delta]');
  if (qtyBtn) {
    const delta = Number(qtyBtn.dataset.qtyDelta);
    const id = qtyBtn.dataset.id;
    updateQuantity(id, delta);
  }
}

function init() {
  applyCurryDistrictTheme();
  const hasMenu = !!(els.menuGrid && els.categoryTabs);
  const hasCart = !!(els.cartItems && els.cartSubtotal && els.cartTax && els.cartTotal && els.cartCount);

  if (hasMenu) {
    renderCategories();
    renderMenu();
  }

  if (hasCart) {
    renderCart();
  }

  showCheckoutStatus();

  document.body.addEventListener('click', handleClicks);

  document.querySelectorAll('input[name="orderType"]').forEach((input) => {
    input.addEventListener('change', () => toggleAddressField(input.value));
  });

  document.getElementById('pay-now')?.addEventListener('click', payNow);
  document.getElementById('copy-order')?.addEventListener('click', copyOrder);
  document.getElementById('clear-cart')?.addEventListener('click', clearCart);
}

document.addEventListener('DOMContentLoaded', init);
