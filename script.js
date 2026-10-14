// ========== IDIOM DATABASE ==========
const idiomsDatabase = [
  {
    english: "break the ice",
    hindi: "बर्फ तोड़ना",
    romanized: "Barf todna",
    englishMeaning:
      "To initiate conversation and overcome initial shyness or awkwardness",
    hindiMeaning: "शुरुआत में शर्माहट को दूर करना और बातचीत शुरू करना",
    category: "action",
    usage:
      "When meeting someone new, you should try to break the ice with a friendly greeting.",
  },
  {
    english: "piece of cake",
    hindi: "खेल समझना",
    romanized: "Khel samjhna",
    englishMeaning: "Something very easy to do",
    hindiMeaning: "कुछ ऐसा जो करना बहुत आसान हो",
    category: "food",
    usage:
      "For an experienced programmer, solving this problem is a piece of cake.",
  },
  {
    english: "hit the nail on the head",
    hindi: "सही तीर मारना",
    romanized: "Sahi teer marna",
    englishMeaning: "To identify the exact issue or find the perfect solution",
    hindiMeaning: "समस्या की सही पहचान करना या सही समाधान खोजना",
    category: "action",
    usage:
      "Your analysis hit the nail on the head regarding the project's failure.",
  },
  {
    english: "raining cats and dogs",
    hindi: "धाराप्रवाह बारिश",
    romanized: "Dharapravah barish",
    englishMeaning: "Heavy rainfall, downpour",
    hindiMeaning: "तेज बारिश, मूसलाधार वर्षा",
    category: "nature",
    usage: "It was raining cats and dogs, so we decided to stay home.",
  },
  {
    english: "heart of gold",
    hindi: "दिल सोने का",
    romanized: "Dil sone ka",
    englishMeaning: "A kind and generous person with good nature",
    hindiMeaning: "एक दयालु और उदार व्यक्ति जिसका दिल अच्छा हो",
    category: "emotion",
    usage: "She has a heart of gold; she always helps those in need.",
  },
  {
    english: "head over heels",
    hindi: "दिल की बातें",
    romanized: "Dil ki baatein",
    englishMeaning: "Deeply in love or completely involved",
    hindiMeaning: "पूरी तरह प्यार में पड़ना या पूरी तरह शामिल होना",
    category: "emotion",
    usage: "He is head over heels in love with her.",
  },
  {
    english: "under the weather",
    hindi: "बीमार होना",
    romanized: "Beemar hona",
    englishMeaning: "Feeling sick or unwell",
    hindiMeaning: "बीमार महसूस करना या अस्वस्थ होना",
    category: "emotion",
    usage: "I'm feeling under the weather today, so I won't go to the office.",
  },
  {
    english: "bite the dust",
    hindi: "हार मानना",
    romanized: "Haar manna",
    englishMeaning: "To fail or come to an end",
    hindiMeaning: "असफल होना या समाप्त होना",
    category: "action",
    usage: "After three years, the business finally bit the dust.",
  },
  {
    english: "spill the beans",
    hindi: "राज खोलना",
    romanized: "Raj kholna",
    englishMeaning: "To reveal a secret or tell the truth",
    hindiMeaning: "किसी राज को उजागर करना या सच बताना",
    category: "action",
    usage: "Don't spill the beans about the surprise party!",
  },
  {
    english: "cost an arm and a leg",
    hindi: "बहुत महंगा होना",
    romanized: "Bahut mehnga hona",
    englishMeaning: "To be very expensive",
    hindiMeaning: "किसी चीज की कीमत बहुत अधिक होना",
    category: "emotion",
    usage: "That luxury car costs an arm and a leg.",
  },
  {
    english: "once in a blue moon",
    hindi: "बहुत कम बार",
    romanized: "Bahut kam baar",
    englishMeaning: "Something that happens rarely",
    hindiMeaning: "कोई बात जो बहुत कम बार होती है",
    category: "nature",
    usage: "I see him once in a blue moon since he moved away.",
  },
  {
    english: "call it a day",
    hindi: "काम समाप्त करना",
    romanized: "Kaam samapt karna",
    englishMeaning: "To stop working and end the day",
    hindiMeaning: "काम को रोक देना और दिन को समाप्त करना",
    category: "action",
    usage: "We've worked hard enough; let's call it a day.",
  },
  {
    english: "level playing field",
    hindi: "समान अवसर",
    romanized: "Saman avasar",
    englishMeaning: "Equal opportunities for everyone",
    hindiMeaning: "सभी के लिए समान अवसर",
    category: "action",
    usage: "The new policy ensures a level playing field for all competitors.",
  },
  {
    english: "icing on the cake",
    hindi: "सोने पर सुहागा",
    romanized: "Sone par suhaga",
    englishMeaning: "An additional benefit that makes something even better",
    hindiMeaning: "एक अतिरिक्त लाभ जो किसी चीज को और भी बेहतर बनाता है",
    category: "food",
    usage:
      "The free dessert was the icing on the cake of our wonderful dinner.",
  },
  {
    english: "cry over spilled milk",
    hindi: "फिर रोना रोना",
    romanized: "Phir rona rona",
    englishMeaning: "To regret something that cannot be changed",
    hindiMeaning: "उस बात के लिए अफसोस करना जो बदली नहीं जा सकती",
    category: "food",
    usage: "It's no use crying over spilled milk; let's focus on the future.",
  },
  {
    english: "better half",
    hindi: "बेहतर आधा",
    romanized: "Behtar aadha",
    englishMeaning: "One's spouse, usually referring to wife",
    hindiMeaning: "किसी का जीवन साथी, आमतौर पर पत्नी",
    category: "emotion",
    usage: "I'd like to introduce you to my better half, Sarah.",
  },
  {
    english: "get the ball rolling",
    hindi: "शुरुआत करना",
    romanized: "Shuruaat karna",
    englishMeaning: "To start something or initiate a process",
    hindiMeaning: "कुछ शुरू करना या प्रक्रिया को आरंभ करना",
    category: "action",
    usage: "Let's get the ball rolling with the new project.",
  },
  {
    english: "go the extra mile",
    hindi: "अतिरिक्त प्रयास करना",
    romanized: "Atirikt prayaas karna",
    englishMeaning: "To make extra efforts beyond what's expected",
    hindiMeaning: "अपेक्षा से अधिक प्रयास करना",
    category: "action",
    usage: "She always goes the extra mile to help her team.",
  },
  {
    english: "take it with a grain of salt",
    hindi: "संदेह के साथ सुनना",
    romanized: "Sandeh ke saath sunna",
    englishMeaning: "To not believe something completely; be skeptical",
    hindiMeaning: "किसी बात को पूरी तरह न मानना; संदेहपूर्ण रहना",
    category: "food",
    usage: "You should take his claims with a grain of salt.",
  },
  {
    english: "sweet tooth",
    hindi: "मीठा खाने का शौकीन",
    romanized: "Meetha khane ka shaukin",
    englishMeaning: "A person who likes to eat sweet things",
    hindiMeaning: "जो व्यक्ति मीठी चीजें खाना पसंद करता है",
    category: "food",
    usage: "My daughter has a sweet tooth; she loves chocolate.",
  },
  {
    english: "burn bridges",
    hindi: "रिश्ते खराब करना",
    romanized: "Rishte kharab karna",
    englishMeaning: "To destroy relationships or damage connections",
    hindiMeaning: "रिश्तों को नष्ट करना या संबंधों को नुकसान पहुंचाना",
    category: "action",
    usage: "Don't burn bridges with your former employer.",
  },
  {
    english: "elephant in the room",
    hindi: "स्पष्ट समस्या",
    romanized: "Stasht samasya",
    englishMeaning: "An obvious problem that no one wants to discuss",
    hindiMeaning: "एक स्पष्ट समस्या जिसे कोई चर्चा नहीं करना चाहता",
    category: "emotion",
    usage: "The debt is the elephant in the room we need to address.",
  },
  {
    english: "every cloud has a silver lining",
    hindi: "बुराई में भी अच्छाई है",
    romanized: "Burai mein bhi acchai hai",
    englishMeaning: "Every difficult situation has a positive aspect",
    hindiMeaning: "हर मुश्किल परिस्थिति का कोई सकारात्मक पहलू होता है",
    category: "nature",
    usage: "Even though you lost your job, every cloud has a silver lining.",
  },
  {
    english: "fish out of water",
    hindi: "अजनबी माहौल में",
    romanized: "Ajnabi mahol mein",
    englishMeaning: "A person out of their natural environment",
    hindiMeaning: "अपने प्राकृतिक वातावरण से बाहर कोई व्यक्ति",
    category: "nature",
    usage: "Moving to a new country, I felt like a fish out of water.",
  },
  {
    english: "let the cat out of the bag",
    hindi: "भेद खुल जाना",
    romanized: "Bhed khul jana",
    englishMeaning: "To reveal a secret accidentally",
    hindiMeaning: "गलती से किसी राज को उजागर करना",
    category: "action",
    usage: "She let the cat out of the bag about the engagement.",
  },
  {
    english: "back against the wall",
    hindi: "कठिन परिस्थिति में",
    romanized: "Kathin paristhiti mein",
    englishMeaning: "In a difficult situation with limited options",
    hindiMeaning: "कठिन परिस्थिति में सीमित विकल्प के साथ",
    category: "action",
    usage: "With our back against the wall, we had to make difficult choices.",
  },
  {
    english: "barking up the wrong tree",
    hindi: "गलत रास्ते पर जाना",
    romanized: "Galat rasste par jana",
    englishMeaning: "Pursuing an incorrect course of action",
    hindiMeaning: "गलत कार्रवाई का पीछा करना",
    category: "action",
    usage: "If you think I stole it, you're barking up the wrong tree.",
  },
  {
    english: "beat a dead horse",
    hindi: "व्यर्थ प्रयास करना",
    romanized: "Vyarth prayaas karna",
    englishMeaning: "To persist with something that is no longer relevant",
    hindiMeaning: "ऐसी चीज पर जोर देना जो अब प्रासंगिक नहीं है",
    category: "action",
    usage: "Stop beating a dead horse; the project is cancelled.",
  },
  {
    english: "beat around the bush",
    hindi: "घुमा फिराकर बात करना",
    romanized: "Ghuma firakr baat karna",
    englishMeaning: "To avoid discussing the main point directly",
    hindiMeaning: "मुख्य बिंदु की सीधी चर्चा से बचना",
    category: "action",
    usage: "Just tell me the truth; don't beat around the bush.",
  },
  {
    english: "bear in mind",
    hindi: "ध्यान रखना",
    romanized: "Dhyan rakhna",
    englishMeaning: "To remember or keep in consideration",
    hindiMeaning: "याद रखना या विचार में रखना",
    category: "emotion",
    usage: "Bear in mind that the deadline is next Friday.",
  },
  {
    english: "beat the bushes",
    hindi: "तलाश करना",
    romanized: "Talash karna",
    englishMeaning: "To search thoroughly",
    hindiMeaning: "अच्छी तरह से खोज करना",
    category: "action",
    usage: "We beat the bushes to find the lost child.",
  },
  {
    english: "bite the bullet",
    hindi: "दांत भींचना",
    romanized: "Dant bhincna",
    englishMeaning: "To face a difficult situation bravely",
    hindiMeaning: "कठिन परिस्थिति का साहस से सामना करना",
    category: "action",
    usage: "I decided to bite the bullet and quit my job.",
  },
  {
    english: "blood is thicker than water",
    hindi: "रक्त रिश्ते मजबूत होते हैं",
    romanized: "Rakt rishte majbut hote hain",
    englishMeaning:
      "Family relationships are stronger than other relationships",
    hindiMeaning: "पारिवारिक संबंध अन्य संबंधों से मजबूत होते हैं",
    category: "emotion",
    usage: "Blood is thicker than water; family comes first.",
  },
  {
    english: "blow off steam",
    hindi: "गुस्सा निकालना",
    romanized: "Gussa nikalna",
    englishMeaning: "To release stress or anger",
    hindiMeaning: "तनाव या गुस्सा कम करना",
    category: "action",
    usage: "After a stressful day, I went to the gym to blow off steam.",
  },
  {
    english: "blue in the face",
    hindi: "बार-बार कहना",
    romanized: "Bar-bar kehna",
    englishMeaning: "To say something repeatedly without success",
    hindiMeaning: "कुछ बार-बार कहना लेकिन सफलता न मिलना",
    category: "emotion",
    usage: "I told him blue in the face to study, but he didn't listen.",
  },
  {
    english: "boils down to",
    hindi: "मूल बात यह है",
    romanized: "Mul baat yeh hai",
    englishMeaning: "The essential point is",
    hindiMeaning: "मूल या सार बात यह है",
    category: "emotion",
    usage: "It boils down to whether you want to succeed or not.",
  },
  {
    english: "break a leg",
    hindi: "शुभकामनाएं",
    romanized: "Shubhkamnaein",
    englishMeaning: "Good luck (especially in theater)",
    hindiMeaning: "शुभकामनाएं (विशेष रूप से नाटक में)",
    category: "action",
    usage: "Good luck for your presentation—break a leg!",
  },
  {
    english: "break the bank",
    hindi: "बहुत पैसा खर्च करना",
    romanized: "Bahut paisa kharch karna",
    englishMeaning: "To spend a lot of money",
    hindiMeaning: "बहुत सारा पैसा खर्च करना",
    category: "emotion",
    usage: "That vacation would break the bank.",
  },
  {
    english: "brick and mortar",
    hindi: "ईंट और सीमेंट",
    romanized: "Eent aur seement",
    englishMeaning: "Physical/traditional business (not online)",
    hindiMeaning: "परंपरागत व्यवसाय (ऑनलाइन नहीं)",
    category: "action",
    usage: "This brick and mortar store has been here for 50 years.",
  },
  {
    english: "bring to the table",
    hindi: "प्रस्ताव रखना",
    romanized: "Prstaav rakhna",
    englishMeaning: "To contribute or offer something",
    hindiMeaning: "कुछ योगदान देना या प्रस्ताव देना",
    category: "action",
    usage: "What new ideas will you bring to the table?",
  },
  {
    english: "broken record",
    hindi: "बार-बार एक ही बात",
    romanized: "Bar-bar ek hi baat",
    englishMeaning: "Someone who repeats the same thing constantly",
    hindiMeaning: "कोई जो लगातार एक ही बात दोहराता है",
    category: "emotion",
    usage: "You sound like a broken record about the mistakes.",
  },
  {
    english: "bull in a china shop",
    hindi: "अनाड़ी व्यक्ति",
    romanized: "Anadi vyakti",
    englishMeaning: "A clumsy or reckless person",
    hindiMeaning: "एक अनाड़ी या लापरवाह व्यक्ति",
    category: "action",
    usage: "He's a bull in a china shop when it comes to relationships.",
  },
  {
    english: "bump into",
    hindi: "अचानक मिलना",
    romanized: "Achanak milna",
    englishMeaning: "To meet someone unexpectedly",
    hindiMeaning: "किसी से अचानक मिलना",
    category: "action",
    usage: "I bumped into an old friend at the grocery store.",
  },
  {
    english: "burn the midnight oil",
    hindi: "रात भर काम करना",
    romanized: "Rat bhar kaam karna",
    englishMeaning: "To work late into the night",
    hindiMeaning: "रात भर काम करना",
    category: "action",
    usage: "She's been burning the midnight oil to finish the project.",
  },
  {
    english: "butt heads",
    hindi: "झगड़ा करना",
    romanized: "Jhagda karna",
    englishMeaning: "To disagree or conflict",
    hindiMeaning: "असहमत होना या विरोध करना",
    category: "emotion",
    usage: "The two managers often butt heads over budget decisions.",
  },
  {
    english: "by the skin of one's teeth",
    hindi: "बाल-बाल बचना",
    romanized: "Bal-bal bachna",
    englishMeaning: "To narrowly escape or succeed",
    hindiMeaning: "मुश्किल से बचना या सफल होना",
    category: "action",
    usage: "I passed the exam by the skin of my teeth.",
  },
  {
    english: "call the shots",
    hindi: "फैसले लेना",
    romanized: "Faisale lena",
    englishMeaning: "To make decisions or be in control",
    hindiMeaning: "फैसले लेना या नियंत्रण में होना",
    category: "action",
    usage: "In this company, the CEO calls the shots.",
  },
  {
    english: "can of worms",
    hindi: "जटिल समस्या",
    romanized: "Jatil samasya",
    englishMeaning: "A complicated problem with many issues",
    hindiMeaning: "कई मुद्दों के साथ एक जटिल समस्या",
    category: "emotion",
    usage: "Opening that subject would be opening a can of worms.",
  },
  {
    english: "caught red-handed",
    hindi: "हाथ में पकड़ा जाना",
    romanized: "Hath mein pakda jana",
    englishMeaning: "Caught in the act of doing something wrong",
    hindiMeaning: "गलत काम करते हुए पकड़ा जाना",
    category: "action",
    usage: "He was caught red-handed stealing from the store.",
  },
  {
    english: "get on my nerves",
    hindi: "परेशान करना",
    romanized: "Pareshaan karna",
    englishMeaning: "To annoy or irritate someone",
    hindiMeaning: "किसी को परेशान या कष्टप्रद करना",
    category: "emotion",
    usage: "His constant complaining gets on my nerves.",
  },
  {
    english: "give and take",
    hindi: "समझौता करना",
    romanized: "Samjhota karna",
    englishMeaning: "Mutual compromise and cooperation",
    hindiMeaning: "परस्पर समझौता और सहयोग",
    category: "emotion",
    usage: "A successful relationship requires give and take.",
  },
  {
    english: "give the cold shoulder",
    hindi: "उपेक्षा करना",
    romanized: "Upeksha karna",
    englishMeaning: "To deliberately ignore someone",
    hindiMeaning: "किसी को जानबूझकर नजरअंदाज करना",
    category: "emotion",
    usage: "He gave me the cold shoulder after our argument.",
  },
  {
    english: "glimmer of hope",
    hindi: "उम्मीद की किरण",
    romanized: "Ummid ki kiran",
    englishMeaning: "A small sign of hope",
    hindiMeaning: "आशा का एक छोटा संकेत",
    category: "emotion",
    usage: "After months of hardship, there's a glimmer of hope.",
  },
  {
    english: "go for broke",
    hindi: "सब कुछ दांव पर लगाना",
    romanized: "Sab kuch danv par lagna",
    englishMeaning: "To risk everything to achieve a goal",
    hindiMeaning: "लक्ष्य प्राप्त करने के लिए सब कुछ दांव पर लगाना",
    category: "action",
    usage: "In the final match, the team decided to go for broke.",
  },
  {
    english: "If you tell the truth you don't have to remember anything.",
    hindi: "अगर आप सच बोलते हैं, तो आपको कुछ भी याद रखने की जरूरत नहीं है",
    romanized:
      "Agar aap sach bolte hain, to aapko kuchh bhi yaad rakhne ki zaroorat nahin hai",
    englishMeaning:
      "If you tell the truth you don't have to remember anything.",
    hindiMeaning:
      "अगर आप सच बोलते हैं, तो आपको कुछ भी याद रखने की जरूरत नहीं है",
    category: "quotes",
    usage:
      "Honesty reduces stress and prevents the need to track deceptive stories",
  },
  {
    english: "The journey of a thousand miles begins with one step.",
    hindi: "हजारों मील की यात्रा एक कदम से शुरू होती है",
    romanized: "Hazaron meel ki yatra ek kadam se shuru hoti hai",
    englishMeaning: "The journey of a thousand miles begins with one step.",
    hindiMeaning: "हजारों मील की यात्रा एक कदम से शुरू होती है",
    category: "quotes",
    usage:
      "Even the largest tasks require taking the first, small action to begin",
  },
  {
    english:
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
    hindi: "तीन चीज़ें ज़्यादा देर तक छुपी नहीं रह सकतीं: सूरज, चाँद और सत्य",
    romanized:
      "Teen cheezein zyada der tak chupi nahi reh sakti: Suraj, Chand aur Satya",
    englishMeaning:
      "Three things cannot be long hidden: the sun, the moon, and the truth",
    hindiMeaning:
      "तीन चीज़ें ज़्यादा देर तक छुपी नहीं रह सकतीं: सूरज, चाँद और सत्य",
    category: "quotes",
    usage:
      "Honesty, and justice will eventually prevail over deception, secrets, or ignorance",
  },
  {
    english:
      "We have two lives, and the second begins when we realise we only have one.",
    hindi:
      "हमारे दो जीवन होते हैं, और दूसरा तब शुरू होता है जब हमें एहसास होता है कि हमारे पास केवल एक ही है",
    romanized:
      "Hamare do jeevan hote hain, aur doosra tab shuru hota hai jab hamein ehsaas hota hai ki hamare paas keval ek hi hai.",
    englishMeaning:
      "We have two lives, and the second begins when we realise we only have one.",
    hindiMeaning:
      "हमारे दो जीवन होते हैं, और दूसरा तब शुरू होता है जब हमें एहसास होता है कि हमारे पास केवल एक ही है",
    category: "quotes",
    usage: "I finally left that dead-end job to start my own business",
  },
  {
    english: "I have an infinite amount of chances as long as I am breathing",
    hindi: "जब तक मैं साँस ले रहा हूँ, मेरे पास अनगिनत मौके हैं",
    romanized: "Jab tak main saans le raha hoon, mere paas anagint mauke hain. ",
    englishMeaning: "as long as a person is alive, they always have opportunities to improve, change their life, or achieve their goals.",
    hindiMeaning: "जब तक इंसान ज़िंदा है , तब तक उसके पास जीवन में दोबारा कोशिश करने, नए अवसर पाने के अनगिनत मौके होते हैं",
    category: "quotes",
    usage: "“Whenever he feels discouraged, he reminds himself that he still has chances as long as he’s alive.”",
  },{
    english:"",
    hindi:"",
    romanized:"",
    englishMeaning:"",
    hindiMeaning:"",
    category:"",
    usage:"",
  }

//   {
//     english: "Fall seven times, stand up eight",
//     hindi: "सात बार गिरो, आठ बार उठो",
//     romanized: "Saat baar giro, aath baar utho.",
//     englishMeaning: "Fall seven times, stand up eight. ",
//     hindiMeaning:
//       "जीवन में कितनी भी बार असफलता (गिरना) आए, आपको हर बार उठना (प्रयास करना) चाहिए ",
//     category: "quotes",
//     usage: "Athletes live by the idea of fall seven times, stand up eight.",
//   },
];

// ========== FILTER BY CATEGORY ==========
function filterByCategory(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  displayIdioms(category);
}

// ========== DISPLAY IDIOMS GRID ==========
function displayIdioms(category = "all") {
  const grid = document.getElementById("idiomsGrid");
  grid.innerHTML = "";

  let filteredIdioms = idiomsDatabase;
  if (category !== "all") {
    filteredIdioms = idiomsDatabase.filter(
      (idiom) => idiom.category === category
    );
  }

  filteredIdioms.forEach((idiom) => {
    const card = document.createElement("div");
    card.className = "idiom-card";
    card.innerHTML = `
            <div class="idiom-english">${idiom.english}</div>
            <div class="idiom-hindi">${idiom.hindi}</div>
            <div class="idiom-meaning">${idiom.englishMeaning}</div>
            <span class="idiom-category">${idiom.category.toUpperCase()}</span>
        `;
    card.onclick = () => selectIdiom(idiom.english);
    grid.appendChild(card);
  });
}

// ========== SEARCH AND TRANSLATE ==========
function translateIdiom() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const resultContainer = document.getElementById("resultContainer");
  const noResultContainer = document.getElementById("noResultContainer");
  const suggestionsDropdown = document.getElementById("suggestions");

  if (!searchInput) {
    showToast("Please enter an idiom to translate");
    return;
  }

  const foundIdiom = idiomsDatabase.find(
    (idiom) => idiom.english.toLowerCase() === searchInput
  );

  suggestionsDropdown.style.display = "none";

  if (foundIdiom) {
    displayResult(foundIdiom);
    resultContainer.style.display = "block";
    noResultContainer.style.display = "none";
  } else {
    resultContainer.style.display = "none";
    noResultContainer.style.display = "block";
  }
}

// ========== SELECT IDIOM FROM BROWSE ==========
function selectIdiom(english) {
  document.getElementById("searchInput").value = english;
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => translateIdiom(), 500);
}

// ========== DISPLAY RESULT ==========
function displayResult(idiom) {
  document.getElementById("englishIdiom").textContent = idiom.english;
  document.getElementById("hindiDevanagari").textContent = idiom.hindi;
  document.getElementById(
    "hindiRomanized"
  ).textContent = `(${idiom.romanized})`;
  document.getElementById("englishMeaning").textContent = idiom.englishMeaning;
  document.getElementById("hindiMeaning").textContent = idiom.hindiMeaning;
  document.getElementById(
    "category"
  ).textContent = `📌 ${idiom.category.toUpperCase()}`;
  document.getElementById("usage").textContent = `"${idiom.usage}"`;
  document.getElementById("matchIndicator").textContent = "✓ FOUND";

  // Store current idiom for actions
  window.currentIdiom = idiom;
}

// ========== SEARCH SUGGESTIONS ==========
document.getElementById("searchInput").addEventListener("input", function () {
  const input = this.value.toLowerCase().trim();
  const suggestionsDropdown = document.getElementById("suggestions");

  if (input.length === 0) {
    suggestionsDropdown.style.display = "none";
    return;
  }

  const matches = idiomsDatabase.filter((idiom) =>
    idiom.english.toLowerCase().includes(input)
  );

  if (matches.length > 0) {
    suggestionsDropdown.innerHTML = "";
    matches.slice(0, 8).forEach((idiom) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = idiom.english;
      item.onclick = () => {
        document.getElementById("searchInput").value = idiom.english;
        suggestionsDropdown.style.display = "none";
        translateIdiom();
      };
      suggestionsDropdown.appendChild(item);
    });
    suggestionsDropdown.style.display = "block";
  } else {
    suggestionsDropdown.style.display = "none";
  }
});

// ========== KEY PRESS HANDLING ==========
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      translateIdiom();
    }
  });

// ========== COPY TRANSLATION ==========
function copyTranslation() {
  if (!window.currentIdiom) return;

  const text = `${window.currentIdiom.hindi} (${window.currentIdiom.romanized})`;
  navigator.clipboard.writeText(text).then(() => {
    showToast("✓ Copied to clipboard!");
  });
}

// ========== SHARE TRANSLATION ==========
function shareTranslation() {
  if (!window.currentIdiom) return;

  const idiom = window.currentIdiom;
  const text = `Check out this translation:\n"${idiom.english}" → "${idiom.hindi}" (${idiom.romanized})\n\nLearn more idioms at Hinglish Translator!`;

  if (navigator.share) {
    navigator.share({
      title: "Hinglish Translator",
      text: text,
    });
  } else {
    navigator.clipboard.writeText(text);
    showToast("✓ Copied to clipboard!");
  }
}

// ========== PRONOUNCE HINDI ==========
function pronounceHindi() {
  if (!window.currentIdiom) return;

  const text = window.currentIdiom.hindi;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "hi-IN";
  utterance.rate = 0.8;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// ========== ADD TO FAVORITES ==========
function addToFavorites() {
  if (!window.currentIdiom) return;

  let favorites = JSON.parse(localStorage.getItem("favoriteIdioms")) || [];

  const exists = favorites.some(
    (f) => f.english === window.currentIdiom.english
  );
  if (!exists) {
    favorites.push(window.currentIdiom);
    localStorage.setItem("favoriteIdioms", JSON.stringify(favorites));
    showToast("❤️ Added to favorites!");
  } else {
    showToast("Already in favorites!");
  }
}

// ========== RANDOM IDIOM ==========
function getRandomIdiom() {
  const randomIdiom =
    idiomsDatabase[Math.floor(Math.random() * idiomsDatabase.length)];
  document.getElementById("searchInput").value = randomIdiom.english;
  displayResult(randomIdiom);
  document.getElementById("resultContainer").style.display = "block";
  document.getElementById("noResultContainer").style.display = "none";

  setTimeout(() => {
    document
      .getElementById("translator")
      .scrollIntoView({ behavior: "smooth" });
  }, 300);
}

// ========== TOAST NOTIFICATION ==========
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ========== INITIALIZE ==========
displayIdioms();

  // Disable right click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Optional: Disable some shortcut keys
  document.addEventListener("keydown", function (e) {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
      (e.ctrlKey && e.key === "u")
    ) {
      e.preventDefault();
    }
  });