const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "The Hunger Games",
  },
  {
    authors: ["Heather Angel"],
    description:
      "Heather Angel, internationally known nature photographer and author, describes equipment, film, lighting, composition, and special techniques for photographing flowers in the wild and in gardens. Straightforward explanations focus on the particular challenges of taking beautiful flower photographs, such as wind, light, and problem colors. The book also includes tips on making money from nature photography. 131 color photos.",
    image:
      "http://books.google.com/books/content?id=Vrl13goK-VcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "http:books.google.com/books?id=Vrl13goK-VcC&dq=flowers+inauthor&hl=&source=gbs_api",
    title: "How to Photograph Flowers",
  },
  {
    authors: ["Gretchen Morgenson", "Campbell R. Harvey, Ph.D."],
    description:
      "An alphabetical reference containing more than 3,500 financial terms combines definitions, lucid explanations, and examples to simplify complex financial issues.",
    image:
      "http://books.google.com/books/content?id=eXHw5iOqzGYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "http://books.google.com/books?id=eXHw5iOqzGYC&dq=intitle:money&hl=&source=gbs_api",
  },
];
db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
