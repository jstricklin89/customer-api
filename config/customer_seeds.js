var crypto = require("crypto");

module.exports = [
  {
    name: "Jonathan Stricklin",
    address: "2256 CR 211 Alvarado, TX 76009",
    phoneNumber: 1234567890,
    emailAddress: "jstri@gmail.com",
    birthDate: 12345678,
    id: "6a9294a68fe8477fd5dc347fba5e3a058d63818f"
  },
  {
    name: "Jane Doe",
    address: "673 Pheasant Drive Mays Landing, NJ 08330",
    phoneNumber: 1238903453,
    emailAddress: "jadoe@gmail.com",
    birthDate: 23456756,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "John Doe",
    address: "21 Pennington Court Dearborn, MI 48124",
    phoneNumber: 4568902347,
    emailAddress: "jodoe@gmail.com",
    birthDate: 87349856,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "John Snow",
    address: "100 East Essex Lane Falls Church, VA 22041",
    phoneNumber: 4320985431,
    emailAddress: "jsnow@gmail.com",
    birthDate: 76762365,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "Queen Elizabeth",
    address: "166 Birchwood Ave. Acworth, GA 30101",
    phoneNumber: 9872345678,
    emailAddress: "qeliza@gmail.com",
    birthDate: 87873434,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "Bill Gates",
    address: "1 Summit Ave. Dallas, GA 30132",
    phoneNumber: 8734765698,
    emailAddress: "bgates@gmail.com",
    birthDate: 43786589,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "Marc Andressen",
    address: "612 Hall Ave. Wilkes Barre, PA 18702",
    phoneNumber: 9876547654,
    emailAddress: "mandressen@gmail.com",
    birthDate: 87349856,
    id: crypto.randomBytes(20).toString("hex")
  },
  {
    name: "Sam Harris",
    address: "1234 Random Universe Ave. Saturn, CA 12367",
    phoneNumber: 8768768761,
    emailAddress: "sharris@gmail.com",
    birthDate: 87349856,
    id: crypto.randomBytes(20).toString("hex")
  }
];
