const quotes = {
  "- Captain Jack Sparrow (Pirates of the Caribbean)": '"The problem is not the problem. The problem is your attitude about the problem."',
  "- Captain Jack Sparrow (Pirates of the Caribbean)": '"Not all treasure\'s silver and gold."',
  "- Thanos (Avengers)": '"The hardest choices require the strongest wills."',
  "- Tony Stark (Avengers)": '"It\'s not about how much we Lost. It\'s about how much we have left."',
  "- Black Widow (Avengers)": '"At some point, we all have to choose, between what the world wants you to be, and who you are."',
  "- Professor X (X-Men)": '"Just because someone stumbles and loses their path, doesn\'t mean they\'re lost forever"',
  "- Uncle Ben (Spiderman)": '"With Great Power, Comes Great Responsibility."',
  "- Anton Ego (Ratatouille)": '"Not everyone can become a great artist, but a great artist can come from anywhere."',
  "- Merida (Brave)": '"Our fate lives within us. You only have to be brave enough to see it."',
  "- Captain McCrea (Wall-E)": '"I don\'t want to survive. I wanna live."',
  "- Tiana (Princess and the Frog)": '"Fairy tales can come true. You gotta make them happen, it all depends on you."',
  "- Barry Allen (The Flash)": '"Life doesn\'t give us a purpose. We give life purpose."',
  "- The Blue Fairy (Pinocchio)": '"Always let your conscience be your guide."',
  "- Sophie (Howl's Moving Castle)": '"They say the best blaze burns the brightest when the circumstances are at their worst."',
  "- Patrick Star (SpongeBob SquarePants)": '"Sometimes we have to go deep inside ourselves to solve our problems."',
  "- Iroh (Avatar: The last Airbender)": '"In the darkest times, hope is something you give yourself. That is the meaning of inner strength."',
  "- The Emperor of China (Mulan)": '"The flower that blooms in adversity is the rarest and beautiful of all."',
  "- Ralph (Wreck-It Ralph)": '"I\'m bad, and that\'s good. I will never be good, and that\'s not bad. There\'s no one I\'d rather be than me."',
  "- Chef G (Ratatouille)": '"You must not let anyone define your limits because of where you come from. Your only limit is your soul."',
  "- Zeus (Hercules)": '"A true hero isn\'t measured by the size of his strength, but by the strength of his heart."',
  "- Rafiki (The Lion King)": '"Oh yes, the past can hurt. But, you can either run from it or learn from it."',
  "- Elastigirl (The Incredibles)": '"Your identity is your most valuable possession. Protect it."',
  "- Gerald Johanssen (Hey Arnold!)": '"It\'s real life. And in real life, you can\'t always win."',
  "- Phineas (Phineas and Ferb)": '"The only thing that is impossible is impossibility."',
  "- BMO (Adventure Time)": '"When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find a light."',
  "- Rapunzel (Tangled)": '"Venture outside your comfort zone. The rewards are worth it."',
  "- Master Splinter (Ninja Turtles)": '"There is not a monster more dangerous than a lack of compassion."',
  "- Quasimodo (The Hunchback of Notre Dame)": '"Today is a good day to try."',
  "- Mickey Mouse (Mickey Mouse)": '"To laugh at yourself is to love yourself."',
  "- Jack (Samurai Jack)": '"The shell of an oyster only hides the pearl inside."',
  "- Master Shifu (Kungfu Panda)": '"Anything is possible when you have inner peace."',
  "- Martian Manhunter (Justice League)": '"The future is worth it. All the pain. All the tears. The future is worth the fight."',
  "- Eeyore (Winnie the Pooh)": '"A little consideration, a little thought for others, makes all the difference."',
  "- Kazim (Aladdin)": '"Do not be fooled by commonplace appearance. Like so many things, it is not what outside, but what is inside that counts."',
  "- Ping (Kungfu Panda)": '"There is no secret ingredient. It\'s just you."',
  "- Lewis (Meet the Robinsons)": '"You just focused on the bad stuff when all you had to do was let go of the past and keep moving forward."',
  "- Nani Pelekai (Lilo & Stitch)": '"Sometimes you try your hardest, but things don\'t work out the way you want them to."',
  "- Max Goof (A Goofy Movie)": '"Admit defeat, and defeat will surely admit you into permanent custody."',
  "- Dumbo (Dumbo)": '"The very things that hold you down are going to lift you up."',
  "- Chicken Little (Chicken Little)": '"Though at times it may feel like the sky is falling around you, never give up, for every day is a new day."',
  "- Grandmother Willow (Pocahontas)": '"Sometimes the right path is not the easiest one."',
  "- Coco (Coco)": '"We may have our differences, but nothing\'s more important than family."',
  "- The Emperor of China (Mulan)": '"No matter how the wind howls, the mountain cannot bow to it."',
  "- Henry (The Good Dinosaur)": '"Sometimes you gotta get through your fear to see the beauty on the other side."',
  "- Hiro (Big Hero 6)": '"The only limit is your imagination."',
  "- Moana (Moana)": '"Sometimes our strengths lie beneath the surface."',
  "- Olaf (Frozen)": '"Love is putting someone else\'s needs before yours."',
  "- Christopher Robin (Winnie the Pooh)": '"You are braver than you believe, stronger than you seem and smarter than you think."',
  "- Rafiki (The Lion King)": '"It\'s important to always look where you’re headed rather than where you were."',
  "- Mike Wazowski (Monsters, Inc.)": '"Nothing is more important than our friendship."',
  "- Tiana (Princess and the Frog)": '"The only way to get what you want in this world is through hard work."'
};

document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate(){
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function(){
  generate()
}
