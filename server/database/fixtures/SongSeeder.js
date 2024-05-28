const AbstractSeeder = require("./AbstractSeeder");

class SongSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "song", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    for (let i = 0; i < 50; i += 1) {
      const fakeSong = {
        title: this.faker.music.songName(),
        genre: this.faker.music.genre(),
      };
      this.insert(fakeSong);
    }
  }
}

// Export the SongSeeder class
module.exports = SongSeeder;
