const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    id: 1,
    name: "Lar das meninas",
    lat: "-27.2200772",
    lng: "-49.6482579",
    about: "Presta assistência a criaças de 6 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "4432423",
    images: [
      "https://images.unsplash.com/flagged/photo-1576028246561-d6e04a34adbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário das visitas 8h as 18h",
    open_on_weekends: "1"
  })

  // consultar dados na tabela
  const selectOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectOrphanages);
  
  // consultar um dado especifico na tabela
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  console.log(await db.run('DELETE FROM orphanages WHERE id="1"'));
});
