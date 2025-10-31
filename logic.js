const paragraphs = [
  "One Piece is a legendary anime and manga series created by Eiichiro Oda. It follows Monkey D. Luffy, a cheerful and determined pirate who dreams of finding the One Piece, the greatest treasure in the world, to become the Pirate King. Along his journey, Luffy forms a diverse crew known as the Straw Hat Pirates, each with their own dreams and goals. The story beautifully blends adventure, friendship, and freedom, set in a vast world filled with mysterious islands and powerful enemies. With its emotional storytelling, humor, and epic battles, One Piece teaches lessons about never giving up and chasing one’s dreams. It has inspired millions and remains one of the most beloved stories ever told.",
  "Pokemon is a beloved anime and game series that follows the adventures of Ash Ketchum and his loyal partner Pikachu. Together, they travel across different regions to become the world’s greatest Pokemon Master. Along the way, Ash meets many friends, catches new Pokemon, and faces thrilling battles against rivals and villains like Team Rocket. The world of Pokemon is filled with wonder, teamwork, and endless discovery. It teaches the importance of friendship, perseverance, and believing in yourself. With its exciting adventures and heartfelt moments, Pokemon has become a timeless series loved by fans of all ages.",
  "Jujutsu Kaisen is a dark fantasy anime and manga created by Gege Akutami. It follows Yuji Itadori, a kind-hearted teenager who becomes involved in the world of curses after swallowing a powerful cursed object Sukuna’s finger. To protect others, Yuji joins Tokyo Jujutsu High, where sorcerers learn to exorcise deadly curses born from human negativity. The series is known for its intense battles, emotional depth, and stunning animation. With powerful characters like Gojo Satoru and Megumi Fushiguro, JJK explores themes of life, death, and purpose. It stands out as one of the most thrilling and thought-provoking modern anime series.",
  "Water is one of the most essential elements of life, covering nearly three-fourths of the Earth’s surface. It is vital for all living beings, from the smallest organisms to the largest creatures. Water helps in drinking, cleaning, agriculture, and industry, making it a foundation of human survival and growth. It exists in three forms — solid, liquid, and gas, showing its amazing versatility. Water also helps regulate the Earth’s climate and maintains the balance of nature. Yet, it is important to use and conserve water wisely, as every drop counts in sustaining life on our planet.",
  "The Sun is the brightest star at the center of our solar system and the main source of light and energy for all life on Earth. It gives us warmth, daylight, and energy that supports plants, animals, and humans alike. The Sun’s energy drives the water cycle, weather, and climate, making it essential for life to exist. It rises every morning, bringing new hope and possibilities to our day. Without the Sun, Earth would be cold, dark, and lifeless. The Sun truly symbolizes power, light, and life, reminding us of the beauty and balance of nature.",
  "India is a land of diverse cultures, traditions, and languages, often called the land of unity in diversity. It is known for its rich history, from ancient civilizations to the modern democratic republic it is today. India is home to famous landmarks like the Taj Mahal, Himalayas, and the Ganges River. People of different religions and backgrounds live together in harmony, celebrating festivals like Diwali, Holi, and Eid. It is also a country of great thinkers, freedom fighters, and innovators. With its growing economy and vibrant youth, India continues to shine as a symbol of progress, peace, and cultural heritage.",
  "Ancient Rome was one of the greatest civilizations in history, known for its power, architecture, and culture. It began as a small city and grew into a vast empire that ruled much of Europe, Africa, and Asia. The Romans built magnificent structures like the Colosseum, aqueducts, and roads that still inspire the world today. They developed systems of law, government, and engineering that shaped modern society. Roman soldiers were brave and disciplined, helping expand and protect the empire. Latin, the Roman language, became the root of many modern languages. Ancient Rome’s legacy of strength, innovation, and leadership continues to influence the world even today.",
  "The French Revolution, which began in 1789, was a major turning point in world history. It started when the people of France rose against the monarchy and social inequality. The revolution aimed to bring liberty, equality, and fraternity — the core ideals that inspired future democracies. The storming of the Bastille became a powerful symbol of freedom and resistance. During this period, France saw the end of King Louis XVI’s rule and the rise of new political ideas. Though it was a time of struggle and change, the French Revolution helped shape the modern values of justice and democracy that the world follows today.",
  "The first President of the United States was George Washington, who served from 1789 to 1797. He is often called the “Father of His Country” for his vital role in founding the nation. Before becoming president, Washington was the commander-in-chief of the Continental Army during the American Revolutionary War, leading the colonies to victory over Britain. As president, he helped shape the new government and set many traditions still followed today. Washington was respected for his honesty, leadership, and dedication to democracy. He refused to seek power for himself, showing true patriotism and earning a lasting place in history.",
  "Terrorism is the use of violence and fear to achieve political, religious, or ideological goals. It targets innocent people and causes pain, destruction, and insecurity in society. Terrorist acts aim to spread fear and divide communities, often harming peace and unity. It is one of the biggest threats to global safety and humanity. Nations around the world work together to prevent terrorism and promote peace through cooperation and understanding. The fight against terrorism is not just about weapons but also about spreading education, tolerance, and compassion. Only through unity and love can the world overcome this menace.",
  "Ancient gods were worshipped by civilizations long ago, representing nature, power, and human ideals. Different cultures had their own pantheons, like the Greek gods Zeus, Athena, and Apollo, or the Egyptian gods Ra, Isis, and Osiris. People believed these gods controlled the forces of the universe, such as the sun, sea, and harvest. Temples and rituals were dedicated to honoring them and seeking their protection. Stories of these gods, known as myths, often explained natural phenomena and human behavior. Even today, ancient gods continue to inspire art, literature, and culture, leaving a lasting legacy of imagination and belief.",
  "The Indus Valley Civilization was one of the earliest urban civilizations, flourishing around 2500-1900 BCE in present-day Pakistan and northwest India. It was known for its well-planned cities like Harappa and Mohenjo-Daro, with organized streets, drainage systems, and advanced architecture. The people practiced agriculture, trade, and craft-making, showing great skill and innovation. They used script and seals for communication, though their language is still undeciphered. The civilization valued community life, cleanliness, and urban planning. It laid the foundation for culture, trade, and urban living in the Indian subcontinent, making it an important part of human history.",
  "Ancient mythology creatures are legendary beings found in the myths and stories of different cultures. These creatures often symbolized nature, power, or human fears and desires. For example, the Greek mythology has creatures like the Minotaur, Medusa, and Cerberus, while Norse mythology features the Fenrir wolf and Jormungandr, the world serpent. Many of these beings were part-human, part-animal, or had magical powers. They often appeared in stories of heroes, gods, and epic battles, teaching lessons or warning humans. Even today, these mythical creatures inspire art, literature, and popular culture, keeping ancient legends alive.",
  "Berserk is a dark fantasy manga and anime created by Kentaro Miura. It follows Guts, a lone mercenary with incredible strength, as he battles demons, corrupt humans, and his own tragic fate. The story is known for its gritty violence, deep psychological themes, and complex characters. Guts’ journey explores revenge, friendship, and the struggle against destiny, often highlighting the darkness of the human soul. Alongside him is Griffith, whose ambition and betrayal shape the epic tale. With its stunning artwork and intense storytelling, Berserk has become a legendary series that leaves a lasting impact on fans of fantasy and adventure.",
  "Adolf Hitler was the leader of Nazi Germany from 1934 to 1945 and one of history’s most infamous figures. He rose to power through extreme nationalism, propaganda, and manipulation, promoting ideas of racial superiority. Hitler’s policies led to World War II and the Holocaust, resulting in the deaths of millions of people. He established a totalitarian regime that suppressed opposition, persecuted minorities, and destroyed freedoms. His actions left a devastating impact on Europe and the world, serving as a stark reminder of the dangers of hatred, dictatorship, and intolerance. History studies Hitler to ensure such atrocities are never repeated.",
  "Google is a global technology company best known for its search engine, which helps billions of people find information online every day. Founded in 1998 by Larry Page and Sergey Brin, Google has grown into a leader in internet services, cloud computing, and AI technologies. Beyond search, it offers products like Gmail, Google Maps, YouTube, and Android, impacting how people communicate, work, and learn. Google is also known for its innovation, data-driven solutions, and user-friendly platforms. It has transformed the way the world accesses information and connects globally, making it one of the most influential companies of the modern era.",
];

const paragraphdiv = document.querySelector("#paraghraph");
const inputelem = document.querySelector("input");
const resetbtn = document.querySelector("#reset");
const timeelem = document.querySelector("#time");
const mistakeelem = document.querySelector("#mistake");
const wpmelem = document.querySelector("#wpm");
const cpmelem = document.querySelector("#cpm");

let maxtime = 60;
let timeleft = maxtime;
let timer = null;
let started = false;

function reloadparag() {
  const randindex = Math.floor(Math.random() * paragraphs.length);
  const txt = paragraphs[randindex]; /*we save rand parag in this let */
  paragraphdiv.innerHTML = "";

  for (let i = 0; i < txt.length; i++) {
    const ch = txt[i];
    const span = document.createElement("span");
    span.innerText = ch;
    paragraphdiv.appendChild(span); /*put span inside big parag*/
  }

  const first = paragraphdiv.querySelector("span");
  if (first) {
    first.classList.add("active");
    timeleft = maxtime;
    timeelem.innerText = timeleft;
    mistakeelem.innerText = 0;
    wpmelem.innerText = 0;
    cpmelem.innerText = 0;
    inputelem.value = "";
    started = false; /*player still dont playing */
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
}


function starttimer() {
  if (timer) return; /*if timer working let it working */
  timer = setInterval(() => {
    timeleft--;
    timeelem.innerHTML = timeleft;
    if (timeleft == 0) {
      clearInterval(timer); /*force stop */
      timer = null;
      inputelem.disabled = true; /*stop work input */
    }
  }, 1000);
}


function checkinput() {
  const spans = paragraphdiv.querySelectorAll("span");
  const typed = inputelem.value;
  let mistake = 0;
  let correctchars = 0;

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const expected = span.innerText; /* char correct */
    const typedchar = typed[i]; /* char type by user */
    span.classList.remove("correct", "incorrect", "active");
    if (typedchar == null) {
      // nothing
    } else if (typedchar == expected) {
      span.classList.add("correct");
      correctchars++;
    } else {
      span.classList.add("incorrect");
      mistake++;
    }
  }

  const nextindex = typed.length;
  if (spans[nextindex])
    spans[nextindex].classList.add("active"); /*next char make for it class active */
  mistakeelem.innerText = mistake;
  cpmelem.innerText = correctchars;

  const elapsed = maxtime - timeleft;
  let wpm = 0;

  if (elapsed > 0) {
    wpm = Math.round(correctchars / 5 / (elapsed / 60));
    if (!isFinite(wpm) || wpm < 0) wpm = 0;
  }

  wpmelem.innerText = wpm;

  if (typed.length >= spans.length) {
    clearInterval(timer);
    timer = null;
    inputelem.disabled = true;
  }
}

inputelem.addEventListener("input", function () {
  if (!started) {
    started = true;
    starttimer();
  }
  checkinput();
});

resetbtn.addEventListener("click", function () {
  inputelem.disabled = false;
  reloadparag();
  inputelem.focus();
});

document.addEventListener("keydown", () =>
  inputelem.focus()
); /* if user press in keyboerd we give him acces for typing*/

reloadparag();
