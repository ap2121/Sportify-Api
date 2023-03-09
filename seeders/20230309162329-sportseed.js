'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
    'sports',
    [
      {
        leagueName: 'NBA',
        description: "The National Basketball Association is a professional basketball league in Northern America composed of 30 teams. It is one of the major professional sports leagues in the United States and Canada and is considered the premier men's professional basketball league in the world.",
        image: 'https://vbsports.es/wp-content/uploads/2018/08/nba-banner.jpg',
      },
      {
        leagueName: 'NFL',
        description: "The National Football League is a professional American football league that consists of 32 teams, divided equally between the American Football Conference and the National Football Conference.",
        image: 'https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg',
      },
      {
        leagueName: 'NHL',
        description: "The National Hockey League is a professional ice hockey league in North America comprising 32 teams—25 in the United States and 7 in Canada. It is considered to be the top ranked professional ice hockey league in the world, and is one of the four major professional sports leagues in the United States and Canada.",
        image: 'https://images.squarespace-cdn.com/content/v1/59619e059de4bb7b8d0c4f02/1547248047581-6I98F85P8O3RRR0O0CJP/NHL-Banner.png?format=2500w',
      },
      {
        leagueName: 'MLB',
        description: "Major League Baseball is a professional baseball organization and the oldest major professional sports league in the world. MLB is composed of 30 total teams, divided equally between the National League and the American League, with 29 in the United States and 1 in Canada",
        image: 'https://www.sgclark.com/blog/wp-content/uploads/2022/05/mlb_mlb_logo.png',
      },
      {
        leagueName: 'MLS',
        description: "Major League Soccer is a men's professional soccer league sanctioned by the United States Soccer Federation, which represents the sport's highest level in the United States. The league comprises 29 teams—26 in the U.S. and 3 in Canada—since the 2023 season. The league is headquartered in Midtown Manhattan.",
        image: 'https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls-mia-prd/cslhobzgkmpvuwue9wgx.png',
      },
      {
        leagueName: 'Premier League',
        description: "The Premier League is the highest level of the men's English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League. Seasons typically run from August to May with each team playing 38 matches.",
        image: 'https://blog.frapapa.com/wp-content/uploads/2022/12/Worst-Premier-League-Player-Ever.jpg',
      },
      {
        leagueName: 'Champions League',
        description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a round robin group stage to qualify for a double-legged knockout format, and a single leg final.",
        image: 'https://t2.tudocdn.net/620371?w=1920&h=1440',
      },
      {
        leagueName: 'Bundesliga',
        description: "The Bundesliga, sometimes referred to as the Fußball-Bundesliga or 1. Bundesliga, is a professional association football league in Germany. At the top of the German football league system, the Bundesliga is Germany's primary football competition.",
        image: 'https://getlogo.net/wp-content/uploads/2021/09/bundesliga-logo-vector.png',
      },
      {
        leagueName: 'LaLiga',
        description: "The Campeonato Nacional de Liga de Primera División, commonly known simply as Primera División in Spain, and as La Liga in English-speaking countries and officially as LaLiga Santander for sponsorship reasons, stylized as LaLiga, is the men's top professional football division of the Spanish football league system.",
        image: 'https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos5.jpg',
      },
      {
        leagueName: 'Ligue 1',
        description: "Officially known as Ligue 1 Uber Eats for sponsorship reasons, is a French professional league for men's association football clubs. At the top of the French football league system, it is the country's primary football competition.",
        image: 'https://1000logos.net/wp-content/uploads/2019/01/French-Ligue-1-Logo.png',
      },
      {
        leagueName: 'Serie A',
        description: "The Serie A, also called Serie A TIM for national sponsorship with TIM, is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia",
        image: 'https://www.ragucommunication.com/site/assets/files/1515/ragu_sereia_logo_01.1280x0p50x50.jpg',
      },
      {
        leagueName: 'UFC',
        description: "The Ultimate Fighting Championship is an American mixed martial arts promotion company based in Las Vegas, Nevada. It is owned and operated by Zuffa, a wholly owned subsidiary of Endeavor Group Holdings. It is the largest MMA promotion company in the world as of 2011.",
        image: 'https://www.wkbn.com/wp-content/uploads/sites/48/2020/07/UFC-logo.jpg?w=1280',
      },
    ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('sports', null, {})
  }
};
