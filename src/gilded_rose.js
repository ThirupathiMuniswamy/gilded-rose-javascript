function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));
//items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20));



function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' &&
        items[i].name != 'Backstage passes to a TAFKAL80ETC concert' &&
        items[i].quality > 0 && items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality--
    }
    else {
      if (items[i].quality < 50) {
        items[i].quality++
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11 && items[i].quality < 50) {
            items[i].quality++
          }
          if (items[i].sell_in < 6 && items[i].quality < 50) {
            items[i].quality++
          }
          //let foo = ( bar === 'a' || bar === 'b' ) ? ( bar === 'a' ? 1 : 2 ) : 3;
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in--
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
          && items[i].quality > 0
          && items[i].name != 'Sulfuras, Hand of Ragnaros' ? items[i].quality-- : items[i].quality = 0
      }
      else {
        if (items[i].quality < 50) {
          items[i].quality ++
        }
      }
    }
  }
}
