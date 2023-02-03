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
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
      new Item("Backstage passes to a TAFKAL80ETC concert", 50, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 6, 6),
      new Item("Backstage passes to a TAFKAL80ETC concert", 11, 11),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 5),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
    expect(items[1].sellIn).to.equal(49);
    expect(items[1].quality).to.equal(50);
    expect(items[2].sellIn).to.equal(5);
    expect(items[2].quality).to.equal(8);
    expect(items[3].sellIn).to.equal(10);
    expect(items[3].quality).to.equal(12);
    expect(items[4].sellIn).to.equal(3);
    expect(items[4].quality).to.equal(8);
    expect(items[5].sellIn).to.equal(4);
    expect(items[5].quality).to.equal(50);
  });

  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 3), new Item("foo", 60, 60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].quality).to.equal(1);
    expect(items[1].sellIn).to.equal(59);
    expect(items[1].quality).to.equal(50);
  });

  it("should Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 3, 3),
      new Item("Sulfuras, Hand of Ragnaros", -1, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(3);
    expect(items[0].quality).to.equal(80);
    expect(items[1].sellIn).to.equal(-1);
    expect(items[1].quality).to.equal(80);
  });

  it("should []", () => {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
  });

  it('should new Item("")', () => {
    const gildedRose = new Shop([new Item("", 0, 0), new Item("", 1, 50), new Item("", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
    expect(items[1].sellIn).to.equal(0);
    expect(items[1].quality).to.equal(49);
    expect(items[2].sellIn).to.equal(-1);
    expect(items[2].quality).to.equal(48);
  });

  it("should handle several items", () => {
    let originalItems = [
      new Item("Aged Brie", 2, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 3),
      new Item("foo", 4, 4),
    ];
    const gildedRose = new Shop(originalItems);
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(3);
  });

  it ("should hanle Conjured items", () => {
    const gildedRose = new Shop([new Item("Conjured items", 0, -5), new Item("Conjured items", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured items");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
    expect(items[1].sellIn).to.equal(4);
    expect(items[1].quality).to.equal(8);
  });
});
