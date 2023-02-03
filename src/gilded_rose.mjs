export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  addQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality += 1;
    }
  }

  lessQuality(i) {
    if (this.items[i].quality > 0) {
      this.items[i].quality -= 1;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      this.items[i].sellIn -= 1;
      if (this.items[i].name == "Aged Brie") {
        this.addQuality(i);
        if (this.items[i].sellIn < 0) {
          this.addQuality(i);
        }
      } else if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
        } else {
          this.addQuality(i);
          if (this.items[i].sellIn < 10) {
            this.addQuality(i);
          }
          if (this.items[i].sellIn < 5) {
            this.addQuality(i);
          }
        }
      } else {
        this.lessQuality(i);
        if (this.items[i].sellIn < 0) {
          this.lessQuality(i);
        }
      }
      if (this.items[i].name == "Conjured items") {
        this.lessQuality(i);
        if (this.items[i].sellIn < 0) {
          this.lessQuality(i);
        }
      } 
    }

    return this.items;
  }
}
