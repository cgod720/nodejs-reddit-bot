const { CommentStream } = require('snoostorm')

require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
  userAgent: 'SerJaimeLannisterBotv1',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});


const streamOpts = {
  subreddit: 'oldfreefolk',
  limit: 25
};

const stream = new CommentStream(r, streamOpts);

const quotes = ['There are no men like me. Only me.',
                'People have been swinging at me for years and they always seem to miss.',
                'You all despise me. Kingslayer. Oathbreaker. A man without honor. You\'ve heard of wildfire?',
                'Three victories don\'t make you a conqueror.',
                'He said the same thing he had been saying for hours - Burn them all!',
                'Tell me, If I\'d stabbed the mad king in the belly instead of the back, would you admire me more?',
                'My life has left me uniquely unfit for constraint.',
                'Careful, I\'m the last friend you\'ve got',
                'Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding.',
                'The Lannisters send their regards.',
                'The gods won\'t mind. They\'ve spilled more blood than all of us combined.',
                'If I was a father to any of my children they would be stoned in the streets.',
                'I\'ll go to war with him if I have to. They can write a ballad about us, "The War For Cersei\'s C-nt"',
                'As long as I\'m better than everyone else, I suppose it doesn\'t matter.',
                'The King shits and the Hand wipes',
                'Everything they\'ve taken from us we\'re going to take back and more',
                'By what right does the wolf judge the lion? By what right?',
                'It\'s a strange thing, the first time you cut a man. You realize we\'re nothing but sacks of meat and blood, and some bone to keep it all together.',
                'I\'ve never been with a woman but Cersei. So in my own way, I have more honor than poor old dead Ned',
                'You look lovely tonight Lady Stark. Widowhood becomes you. Your bed must be lonely. Is that why you came?',
                'You\'re much uglier in daylight',
                'You have proof? Or do you want to trade gossip like a couple of fishwives?',
                'My father always said I was a slow learner',
                'My bloody honor is beyond repair',
                'This room was silent as a crypt. Except for the screams, of course.',
                'I\'ve been a member of the Kingsguard since before you were born.',
                'I don\'t need my right hand to kill you',
                'Did I give you the impression that this was a negotiation?',
                'I don\'t intend to be the first Lannister to die in a bathtub.',
                'How should we treat people who tear us apart?',
                'So many vows, they make you swear and swear..',
                'The more you own, the more it weighs you down.',
                'Have you grown fond of me Stark? Is that it?',
                'We don\'t get to choose who we love',
                'I\'ve never slept with a knight before..',
                'I crossed a thousand leagues to come to you, and lost the best part of me along the way. Don\'t tell me to leave.',
                'He wasn\'t fit to rule over anything more important than a twelve course meal.',
                'Cersei once called me "the stupidest Lannister".',
                'Let me thank you ahead of time for guarding us all from the perils beyond the wall.',
                'The dark is coming for all of us. Why cry about it?',
                'If your Gods are real and if they are just, why is the world so full of injustice?',
                'I\'ll send for your baby boy. And I\'ll launch him into Riverrun with a catapult. Because you don\'t matter to me.',
                'How can I protect the King when I can hardly wipe my own arse?',
                'There are always lessons in failures',
                'As I said, the siege is under my command. If that\'s not to your liking, go home.',
                'Now let\'s say I threatened to hit you unless you shut your mouth, but you kept talking. What do you think I\'d do?',
                'My training has proved that I can\'t beat a stable boy with my left hand.',
                'If you were to marry Cersei, she\'d murder you in your sleep.',
                'Threaten? As in "I\'m going to open your lord from balls to brains and see what Starks are made of?"']

stream.on('item', comment => {
  if(comment.body.toLowerCase().includes('kingslayer')){
    comment.reply(quotes[Math.floor(Math.random() * quotes.length)])
    console.log(comment.body);
  }
})
