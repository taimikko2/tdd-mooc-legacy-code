import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0), new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-1); 
    expect(items[0].quality).to.equal(2); 
    expect(items[1].sellIn).to.equal(-1); 
    expect(items[1].quality).to.equal(50); 
  });

  it("should Backstage passes", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0), new Item("Backstage passes to a TAFKAL80ETC concert", 50, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1); 
    expect(items[0].quality).to.equal(0); 
    expect(items[1].sellIn).to.equal(49); 
    expect(items[1].quality).to.equal(50); 
  });

  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 3), new Item("foo", 60, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].quality).to.equal(1); 
    expect(items[1].sellIn).to.equal(59); 
    expect(items[1].quality).to.equal(59); 
  });

  it("should Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 3, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(3); 
    expect(items[0].quality).to.equal(3); 
  });

  it("should []", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });
  
  it("should new Item(\"\")", () => {
    const gildedRose = new Shop([new Item("", 0, 0), new Item("", 1, 50), new Item("", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0); 
    expect(items[1].sellIn).to.equal(0); 
    expect(items[1].quality).to.equal(49); 
    expect(items[2].sellIn).to.equal(-1); 
    expect(items[2].quality).to.equal(48); 
  });


  it("should handle several items", () => {
    let originalItems = [new Item("Aged Brie", 2, 50), new Item("Backstage passes to a TAFKAL80ETC concert", 3, 3), new Item("foo", 4, 4)];
    const gildedRose = new Shop(originalItems);
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(3);
  });
  
});
