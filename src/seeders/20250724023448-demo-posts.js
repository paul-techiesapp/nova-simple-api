'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        content: "Amazing hike at sunrise! 🌅 #hiking #nature",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Homemade pasta success! 🍝 #cooking #homemade",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Coffee shop productivity ☕ #coffee #work",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Finished great book! 📚 #reading #books",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Beach day with friends! 🏖️ #beach #friends",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Late night coding win! 💻 #coding #dev",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Farmers market haul! 🍓 #local #fresh",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "LOTR marathon Sunday! 🎬 #movies #lotr",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "New guitar day! 🎸 #guitar #music",
        userId: 1,
        thumbnail: "https://picsum.photos/150/150?random=9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Homemade cookies! 🍪 #baking #cookies",
        userId: 2,
        thumbnail: "https://picsum.photos/150/150?random=10",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
