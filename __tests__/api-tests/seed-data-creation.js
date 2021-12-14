const { v4: uuid } = require('uuid');
const knex = require('../../database/connection');

const stakeholderOne = Object.freeze({
  id: 5000000,
  type: 'type',
  org_name: 'name',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  // pwd_reset_required: true,
  website: 'website',
  // wallet: 'wallet@@#',
  // password: 'password',
  // salt: 'salt',
  // active_contract_id: 10,
  // offering_pay_to_plant: true,
  // tree_validation_contract_id: 11,
  logo_url: 'url',
  map: 'ma,e',
  stakeholder_uuid: uuid(),
});
const stakeholderTwo = Object.freeze({
  id: 5000001,
  type: 'type',
  org_name: 'name',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  // pwd_reset_required: true,
  website: 'website',
  // wallet: 'wallet@!#',
  // password: 'password',
  // salt: 'salt',
  // active_contract_id: 10,
  // offering_pay_to_plant: true,
  // tree_validation_contract_id: 11,
  logo_url: 'url',
  map: 'ma,e',
  stakeholder_uuid: uuid(),
});

before(async () => {
  await knex('stakeholder').insert([stakeholderOne, stakeholderTwo]);
});

// after(async () => {
//   await knex.raw(`
//     DELETE FROM stakeholder
//     WHERE password = '${stakeholderTwo.password}';
//   `);
// });

after(async () => {
  await knex.raw(`
    DELETE FROM stakeholder
    WHERE id = '${5000000}' OR id = '${5000001}';
  `);
});

module.exports = {
  stakeholderOne,
  stakeholderTwo,
};
