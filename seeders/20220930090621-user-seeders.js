"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          profession: "Admin Micro",
          role: "admin",
          email: "juarakoding@gmail.com",
          password: await bcrypt.hash("rahasia111", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Doe John",
          profession: "FE Dev",
          role: "student",
          email: "yein@gmail.com",
          password: await bcrypt.hash("rahasia111", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
