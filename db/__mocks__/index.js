const sampleResponseData = [
  {
    _id: '5d645259a5d4fd2232b763c0',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Shania Wisoky',
    date: '2017-10-19T23:44:29.329Z',
    name: 'Capicola shank ball tip, short ribs bresaola alcatra pork chop t-bone jerky shankle ribeye rump turducken',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763c1',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Lura Hickle',
    date: '2018-07-03T06:48:30.483Z',
    name: 'Beef ribs ball tip picanha, bacon salami burgdoggen capicola brisket buffalo shank cow pancetta frankfurter bresaola',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763c3',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Tiara Lebsack',
    date: '2019-04-16T01:32:25.332Z',
    name: 'Rump tail doner jerky kevin hamburger swine alcatra tri-tip andouille',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763c6',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Dalton Franecki',
    date: '2017-12-24T09:27:49.673Z',
    name: 'Capicola alcatra chuck meatball kielbasa, prosciutto jerky beef buffalo',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763ca',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Cecile Lang DDS',
    date: '2018-06-07T10:10:22.861Z',
    name: 'Tongue ham hock ball tip alcatra',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763cf',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Miss Lavonne Berge',
    date: '2018-01-03T01:23:26.226Z',
    name: 'Pig tenderloin buffalo meatloaf kielbasa cupim porchetta andouille jowl shankle pork belly landjaeger pork chop',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763d5',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Florencio Dach',
    date: '2018-09-23T09:49:01.338Z',
    name: 'Kielbasa fatback tenderloin burgdoggen, pork chop drumstick porchetta cupim sirloin pork loin chuck frankfurter sausage',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763dc',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Alexanne Littel',
    date: '2018-02-26T12:56:46.213Z',
    name: 'Bacon ham shoulder short ribs flank, frankfurter leberkas spare ribs beef ribs biltong sirloin cupim',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763e4',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Jonatan Murray',
    date: '2018-06-21T01:17:35.986Z',
    name: 'Tongue ham hock ball tip alcatra',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763ed',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Henri Murphy II',
    date: '2019-01-09T07:06:34.565Z',
    name: 'Turkey pastrami ball tip shoulder',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b763f7',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Ms. Bo Cartwright',
    date: '2019-06-14T20:35:55.057Z',
    name: 'Beef ribs ball tip picanha, bacon salami burgdoggen capicola brisket buffalo shank cow pancetta frankfurter bresaola',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76402',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Dr. Brielle Robel',
    date: '2019-01-21T22:16:11.748Z',
    name: 'Kevin pork chop pancetta porchetta, prosciutto frankfurter turducken',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b7640e',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Zena Haag',
    date: '2019-05-17T14:32:52.270Z',
    name: 'Turkey pastrami ball tip shoulder',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b7641b',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Miss Elsa Nicolas',
    date: '2019-03-14T22:35:18.062Z',
    name: 'Shankle capicola venison filet mignon, tongue rump t-bone shank',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76429',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Marcel Jast',
    date: '2018-09-28T09:10:12.790Z',
    name: 'Sausage meatloaf pork, sirloin turkey drumstick meatball bresaola',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76437',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Erich Gorczany',
    date: '2019-03-28T06:22:03.038Z',
    name: 'Sausage meatloaf pork, sirloin turkey drumstick meatball bresaola',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76446',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'London Tremblay I',
    date: '2019-01-16T05:44:51.591Z',
    name: 'Rump tail doner jerky kevin hamburger swine alcatra tri-tip andouille',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76456',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Raoul Marquardt',
    date: '2018-07-21T05:56:59.693Z',
    name: 'Capicola shank ball tip, short ribs bresaola alcatra pork chop t-bone jerky shankle ribeye rump turducken',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76467',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Porter Willms',
    date: '2018-01-18T05:28:05.130Z',
    name: 'Tongue bacon hamburger corned beef pig, pork loin bresaola meatloaf shankle andouille',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76479',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Randal Abshire',
    date: '2018-08-17T11:05:14.519Z',
    name: 'Corned beef drumstick beef tail shoulder',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b7648c',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Esteban Kertzmann',
    date: '2019-04-19T01:47:34.385Z',
    name: 'Cow pig burgdoggen meatball, pancetta meatloaf sirloin chicken',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b764a0',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Cyrus Metz',
    date: '2019-01-14T06:57:30.872Z',
    name: 'Porchetta andouille landjaeger, meatloaf filet mignon sausage pork belly drumstick shoulder tri-tip kielbasa boudin',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b764b5',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Foodspotting',
    photographer: 'Anna Fahey',
    date: '2019-01-05T09:20:44.965Z',
    name: 'Shoulder tail buffalo pig chuck andouille sirloin ham hock picanha tongue chicken frankfurter landjaeger',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b764cb',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Anika Swift',
    date: '2018-05-20T21:31:00.334Z',
    name: 'Cupim frankfurter tail alcatra turkey beef drumstick landjaeger picanha tongue kielbasa fatback',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b764e2',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Raymundo Torphy',
    date: '2017-11-03T01:05:14.034Z',
    name: 'Cow tri-tip jerky bresaola rump salami burgdoggen',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b764fa',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/2.jpeg',
    restaurantId: 'r1',
    source: 'OpenTable Diner',
    photographer: 'Vida Pfeffer',
    date: '2017-10-20T00:32:23.212Z',
    name: 'Capicola shank ball tip, short ribs bresaola alcatra pork chop t-bone jerky shankle ribeye rump turducken',
    __v: 0,
  },
  {
    _id: '5d645259a5d4fd2232b76513',
    url: 'https://lmwy-labs-ot-images.s3-us-west-1.amazonaws.com/1.jpg',
    restaurantId: 'r1',
    source: 'Restaurant',
    photographer: 'Savion Dach',
    date: '2019-03-07T23:43:21.331Z',
    name: 'Meatball ground round corned beef biltong sirloin',
    __v: 0,
  },
];

const getImages = (rid, cb) => {
  if (rid === 'willThrowError') {
    cb('Unknown error');
  }

  cb(null, sampleResponseData);
};

exports.getImages = getImages;
exports.sampleResponseData = sampleResponseData;
