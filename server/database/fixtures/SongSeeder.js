const AbstractSeeder = require("./AbstractSeeder");

class SongSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "song", truncate: true });
  }

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

module.exports = SongSeeder;
