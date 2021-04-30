
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        { firstname: 'Bob', lastname: 'Jones' },
        { firstname: 'Airmen', lastname: 'Snuffy' }
      ])
    })
    .then(() => {
      return knex('books').del()
    })
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 101, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 202, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 303, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 404, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 505, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 606, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 707, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 808, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 909, checkedout: false },
        { title: 'The Silmarillion', author: 'J. R. R. Tolkien', isbn: 100, checkedout: false },
      ]);
    })
};    
