import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  it("should Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
  });

  it("should Backstage passes", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
  });

  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].quality).to.equal(1); 
  });
  
  it("should []", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });
  
  it("should handle several items", () => {
    let originalItems = [new Item("Aged Brie", 2, 50), new Item("Backstage passes to a TAFKAL80ETC concert", 3, 3), new Item("foo", 4, 4)];
    const gildedRose = new Shop(originalItems);
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(3);
  });
  
});