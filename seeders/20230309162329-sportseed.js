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
        description: "The NBA is a top professional basketball league with 30 teams in Northern America. As one of the major pro sports leagues in the US and Canada, it's widely considered the premier men's pro basketball league globally.",
        image: 'https://vbsports.es/wp-content/uploads/2018/08/nba-banner.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'NFL',
        description: "The National Football League is a professional American football league that consists of 32 teams, divided equally between the American Football Conference and the National Football Conference.",
        image: 'https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'NHL',
        description: "The NHL, a pro ice hockey league in North America, has 32 teams with 25 in the US and 7 in Canada. It's a top-ranked global league and one of the four major pro sports leagues in the US and Canada.",
        image: 'https://images.squarespace-cdn.com/content/v1/59619e059de4bb7b8d0c4f02/1547248047581-6I98F85P8O3RRR0O0CJP/NHL-Banner.png?format=2500w',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'MLB',
        description: "Major League Baseball is a pro baseball organization and the world's oldest pro sports league, with 30 teams split evenly between the National and American Leagues, and 29 located in the US and 1 in Canada.",
        image: 'https://www.sgclark.com/blog/wp-content/uploads/2022/05/mlb_mlb_logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'MLS',
        description: "MLS is a top-level men's pro soccer league sanctioned by the US Soccer Federation, comprising 29 teams (26 in US, 3 in Canada) since 2023 season. HQ in Midtown Manhattan.",
        image: 'https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/mls-mia-prd/cslhobzgkmpvuwue9wgx.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'Premier League',
        description: "The Premier League, the top tier of the English football league system for men, consists of 20 clubs and follows a promotion and relegation system with the English Football League. Each season, from August to May, every team plays 38 matches.",
        image: 'https://blog.frapapa.com/wp-content/uploads/2022/12/Worst-Premier-League-Player-Ever.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'Champions League',
        description: "UEFA Champions League is an annual football contest among top European clubs. Teams play in a group stage and progress to double-legged knockout matches, culminating in a single-leg final to determine the winner. Organized by UEFA.",
        image: 'https://t2.tudocdn.net/620371?w=1920&h=1440',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'Bundesliga',
        description: "The Bundesliga, sometimes referred to as the Fußball-Bundesliga or 1. Bundesliga, is a professional association football league in Germany. At the top of the German football league system, the Bundesliga is Germany's primary football competition.",
        image: 'https://getlogo.net/wp-content/uploads/2021/09/bundesliga-logo-vector.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'LaLiga',
        description: "LaLiga, Spain's top men's pro football division, is known as Primera División locally and as La Liga globally. It's sponsored by Santander and comprises the country's best teams.",
        image: 'https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'Ligue 1',
        description: "Officially known as Ligue 1 Uber Eats for sponsorship reasons, is a French professional league for men's association football clubs. At the top of the French football league system, it is the country's primary football competition.",
        image: 'https://1000logos.net/wp-content/uploads/2019/01/French-Ligue-1-Logo.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'Serie A',
        description: "The Serie A, also called Serie A TIM for national sponsorship with TIM, is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia",
        image: 'https://www.ragucommunication.com/site/assets/files/1515/ragu_sereia_logo_01.1280x0p50x50.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        leagueName: 'UFC',
        description: "Based in Las Vegas, UFC is the world's largest MMA promotion company as of 2011. Owned by Zuffa, a subsidiary of Endeavor Group Holdings, it's an American mixed martial arts organization that operates worldwide.",
        image: 'https://www.wkbn.com/wp-content/uploads/sites/48/2020/07/UFC-logo.jpg?w=1280',
        createdAt: new Date(),
        updatedAt: new Date()
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
