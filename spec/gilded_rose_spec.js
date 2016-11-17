
describe("Gilded Rose", function() {
  it('validates the quality ans sell in',() => {
    update_quality()

    var vest = items[0]
    expect(vest.quality).toEqual(19)
    expect(vest.sell_in).toEqual(9)

    var aged = items[1]
    expect(aged.quality).toEqual(1)
    expect(aged.sell_in).toEqual(1)

    var elixir = items[2]
    expect(elixir.quality).toEqual(6)
    expect(elixir.sell_in).toEqual(4)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(21)
    expect(backstage.sell_in).toEqual(14)

  //   var conjured = items[5]
  //   expect(conjured.sell_in).toEqual(2)
  //   expect(conjured.quality).toEqual(5)
  })

  it('validates the quality ans sell in for second update',() => {
    update_quality()

    var vest = items[0]
    expect(vest.quality).toEqual(18)
    expect(vest.sell_in).toEqual(8)

    var aged = items[1]
    expect(aged.quality).toEqual(2)
    expect(aged.sell_in).toEqual(0)

    var elixir = items[2]
    expect(elixir.quality).toEqual(5)
    expect(elixir.sell_in).toEqual(3)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(22)
    expect(backstage.sell_in).toEqual(13)

  //   var conjured = items[5]
  //   expect(conjured.sell_in).toEqual(2)
  //   expect(conjured.quality).toEqual(5)
  })

  it('validates the quality ans sell in for fourth update',() => {
    update_quality()
    update_quality()
    var vest = items[0]
    expect(vest.quality).toEqual(16)
    expect(vest.sell_in).toEqual(6)

    var aged = items[1]
    expect(aged.quality).toEqual(6)
    expect(aged.sell_in).toEqual(-2)

    var elixir = items[2]
    expect(elixir.quality).toEqual(3)
    expect(elixir.sell_in).toEqual(1)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(24)
    expect(backstage.sell_in).toEqual(11)

    //   var conjured = items[5]
    //   expect(conjured.sell_in).toEqual(2)
    //   expect(conjured.quality).toEqual(5)
  })

  it('validates the quality ans sell in for sixth update',() => {
    update_quality()
    update_quality()
    var vest = items[0]
    expect(vest.quality).toEqual(14)
    expect(vest.sell_in).toEqual(4)

    var aged = items[1]
    expect(aged.quality).toEqual(10)
    expect(aged.sell_in).toEqual(-4)

    var elixir = items[2]
    expect(elixir.quality).toEqual(0)
    expect(elixir.sell_in).toEqual(-1)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(27)
    expect(backstage.sell_in).toEqual(9)

    //   var conjured = items[5]
    //   expect(conjured.sell_in).toEqual(2)
    //   expect(conjured.quality).toEqual(5)
  })
  it('validates the quality ans sell in for Eighth update',() => {
    update_quality()
    update_quality()
    var vest = items[0]
    expect(vest.quality).toEqual(12)
    expect(vest.sell_in).toEqual(2)

    var aged = items[1]
    expect(aged.quality).toEqual(14)
    expect(aged.sell_in).toEqual(-6)

    var elixir = items[2]
    expect(elixir.quality).toEqual(0)
    expect(elixir.sell_in).toEqual(-3)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(31)
    expect(backstage.sell_in).toEqual(7)

    //   var conjured = items[5]
    //   expect(conjured.sell_in).toEqual(2)
    //   expect(conjured.quality).toEqual(5)
  })
  it('validates the quality ans sell in for Tenth update',() => {
    update_quality()
    update_quality()
    var vest = items[0]
    expect(vest.quality).toEqual(10)
    expect(vest.sell_in).toEqual(0)

    var aged = items[1]
    expect(aged.quality).toEqual(18)
    expect(aged.sell_in).toEqual(-8)

    var elixir = items[2]
    expect(elixir.quality).toEqual(0)
    expect(elixir.sell_in).toEqual(-5)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(35)
    expect(backstage.sell_in).toEqual(5)

    //   var conjured = items[5]
    //   expect(conjured.sell_in).toEqual(2)
    //   expect(conjured.quality).toEqual(5)
  })
  it('validates the quality ans sell in for Fifteenth update',() => {
    update_quality()
    update_quality()
    update_quality()
    update_quality()
    update_quality()

    var vest = items[0]
    expect(vest.quality).toEqual(0)
    expect(vest.sell_in).toEqual(-5)

    var aged = items[1]
    expect(aged.quality).toEqual(28)
    expect(aged.sell_in).toEqual(-13)

    var elixir = items[2]
    expect(elixir.quality).toEqual(0)
    expect(elixir.sell_in).toEqual(-10)

    var sulfaras = items[3]
    expect(sulfaras.quality).toEqual(80)
    expect(sulfaras.sell_in).toEqual(0)

    var backstage = items[4]
    expect(backstage.quality).toEqual(50)
    expect(backstage.sell_in).toEqual(0)

    //   var conjured = items[5]
    //   expect(conjured.sell_in).toEqual(2)
    //   expect(conjured.quality).toEqual(5)
  })





});
