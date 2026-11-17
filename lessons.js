/* English do Lorenzo · conteúdo das aulas (gerado e atualizado pelo Claude) */
/* ---------- CONTENT: month 1, week 1 ---------- */
var LESSONS = [
 {id:1, title:"Hello!", pt:"Cumprimentos", icon:"👋", words:[
   ["Hello","Olá","👋"],["Good morning","Bom dia","🌅"],["Good night","Boa noite","🌙"],
   ["Thank you","Obrigado","🙏"],["Yes","Sim","👍"],["No","Não","👎"]],
   talk:{q:"Hello! What's your name?", qpt:"Olá! Qual é o seu nome?", opts:["My name is Lorenzo.","I am a banana.","Good night!"], a:0}},
 {id:2, title:"Colors", pt:"Cores", icon:"🎨", words:[
   ["Red","Vermelho","🔴"],["Blue","Azul","🔵"],["Green","Verde","🟢"],
   ["Yellow","Amarelo","🟡"],["Orange","Laranja","🟠"],["Purple","Roxo","🟣"]],
   talk:{q:"What color is the sun?", qpt:"Qual é a cor do sol?", opts:["It is blue.","It is yellow.","It is purple."], a:1}},
 {id:3, title:"Animals", pt:"Animais", icon:"🐶", words:[
   ["Dog","Cachorro","🐶"],["Cat","Gato","🐱"],["Fish","Peixe","🐟"],
   ["Bird","Pássaro","🐦"],["Horse","Cavalo","🐴"],["Cow","Vaca","🐮"]],
   talk:{q:"Do you like dogs?", qpt:"Você gosta de cachorros?", opts:["Yes, I like dogs!","It is red.","Good morning."], a:0}},
 {id:4, title:"Numbers", pt:"Números 1 a 6", icon:"🔢", words:[
   ["One","Um","1️⃣"],["Two","Dois","2️⃣"],["Three","Três","3️⃣"],
   ["Four","Quatro","4️⃣"],["Five","Cinco","5️⃣"],["Six","Seis","6️⃣"]],
   talk:{q:"How old are you?", qpt:"Quantos anos você tem?", opts:["I am a cat.","I am eight.","Thank you."], a:1}},
 {id:5, title:"My family", pt:"Família", icon:"🏠", words:[
   ["Mom","Mãe","👩"],["Dad","Pai","👨"],["Brother","Irmão","👦"],
   ["Sister","Irmã","👧"],["Baby","Bebê","👶"],["Grandma","Vovó","👵"]],
   talk:{q:"Do you have a brother?", qpt:"Você tem um irmão?", opts:["No, it is green.","Yes, I have a brother.","Hello, fish!"], a:1}},
 {id:6, title:"Food", pt:"Comida", icon:"🍎", words:[
   ["Apple","Maçã","🍎"],["Banana","Banana","🍌"],["Bread","Pão","🍞"],
   ["Milk","Leite","🥛"],["Water","Água","💧"],["Pizza","Pizza","🍕"]],
   talk:{q:"What do you want?", qpt:"O que você quer?", opts:["I want pizza, please.","I am a horse.","Good night, mom."], a:0}},
 {id:7, title:"Super review", pt:"Revisão da semana", icon:"🏆", review:true,
   talk:{q:"Hello! How are you?", qpt:"Olá! Como você está?", opts:["I am fine, thank you!","It is a cow.","Six bananas."], a:0}},
];
// weeks 2-4: "English|Português|emoji;..."  talk: [question, pergunta, [right, wrong, wrong]]
const MORE=[
 ["My body","Corpo","👂","Eye|Olho|👁️;Nose|Nariz|👃;Mouth|Boca|👄;Ear|Orelha|👂;Hand|Mão|✋;Foot|Pé|🦶",["Where is your nose?","Onde está o seu nariz?",["Here is my nose!","It is a pizza.","I am six."]]],
 ["Toys","Brinquedos","🧸","Ball|Bola|⚽;Teddy bear|Ursinho|🧸;Kite|Pipa|🪁;Robot|Robô|🤖;Puzzle|Quebra-cabeça|🧩;Video game|Videogame|🎮",["What is your favorite toy?","Qual é o seu brinquedo favorito?",["My favorite toy is a ball.","Yes, please.","It is blue water."]]],
 ["Clothes","Roupas","👕","Shirt|Camiseta|👕;Pants|Calça|👖;Shoes|Tênis|👟;Cap|Boné|🧢;Socks|Meias|🧦;Jacket|Jaqueta|🧥",["What are you wearing?","O que você está vestindo?",["I am wearing a shirt.","I am a fish.","Good night, dad."]]],
 ["Feelings","Sentimentos","😄","Happy|Feliz|😄;Sad|Triste|😢;Angry|Bravo|😠;Tired|Cansado|😴;Scared|Com medo|😱;Surprised|Surpreso|😮",["How do you feel today?","Como você se sente hoje?",["I feel happy!","I feel a banana.","It is six."]]],
 ["Numbers 7-12","Números 7 a 12","🔟","Seven|Sete|7️⃣;Eight|Oito|8️⃣;Nine|Nove|9️⃣;Ten|Dez|🔟;Eleven|Onze|11;Twelve|Doze|12",["How many fingers do you have?","Quantos dedos você tem?",["I have ten fingers.","I have a red cat.","Hello, mom!"]]],
 ["Wild animals","Animais selvagens","🦁","Lion|Leão|🦁;Monkey|Macaco|🐵;Elephant|Elefante|🐘;Tiger|Tigre|🐯;Bear|Urso|🐻;Snake|Cobra|🐍",["What animal is big and gray?","Que animal é grande e cinza?",["The elephant!","The fish is small.","Thank you, grandma."]]],
 ["Super review","Revisão da semana 2","🏆",null,["What do you like to play?","Do que você gosta de brincar?",["I like to play ball.","I am tired, cow.","It is a shirt."]]],
 ["Vehicles","Veículos","🚗","Car|Carro|🚗;Bus|Ônibus|🚌;Bike|Bicicleta|🚲;Plane|Avião|✈️;Boat|Barco|⛵;Train|Trem|🚆",["How do you go to school?","Como você vai para a escola?",["I go by car.","I go by pizza.","I am a train."]]],
 ["Fruits","Frutas","🍓","Strawberry|Morango|🍓;Grapes|Uvas|🍇;Watermelon|Melancia|🍉;Pineapple|Abacaxi|🍍;Cherry|Cereja|🍒;Lemon|Limão|🍋",["Do you like grapes?","Você gosta de uvas?",["Yes, I love grapes!","It is a bus.","Good morning, lion."]]],
 ["Shapes","Formas","🔺","Circle|Círculo|⚪;Square|Quadrado|🟦;Triangle|Triângulo|🔺;Star|Estrela|⭐;Heart|Coração|❤️;Diamond|Losango|🔷",["What shape do you like?","De qual forma você gosta?",["I like the heart.","I like to sleep, robot.","It is ten dogs."]]],
 ["Nature","Natureza","🌳","Tree|Árvore|🌳;Flower|Flor|🌸;Leaf|Folha|🍃;Mountain|Montanha|⛰️;Sea|Mar|🌊;Sun|Sol|☀️",["What do you see in the park?","O que você vê no parque?",["I see a big tree.","I see a lemon car.","I am a mountain."]]],
 ["Sports","Esportes","🏀","Soccer|Futebol|⚽;Basketball|Basquete|🏀;Swimming|Natação|🏊;Tennis|Tênis|🎾;Running|Corrida|🏃;Volleyball|Vôlei|🏐",["What sport do you like?","De qual esporte você gosta?",["I like soccer!","I like the moon, sister.","Thank you, plane."]]],
 ["Party time","Festa","🎈","Cake|Bolo|🎂;Gift|Presente|🎁;Balloon|Balão|🎈;Candy|Bala|🍬;Music|Música|🎵;Friends|Amigos|🧑‍🤝‍🧑",["Happy birthday! How old are you?","Feliz aniversário! Quantos anos você tem?",["I am nine today!","I am a balloon.","No, it is a square."]]],
 ["Super review","Revisão da semana 3","🏆",null,["Do you want some cake?","Você quer bolo?",["Yes, please!","It is a bike.","I am a tiger."]]],
 ["Bugs","Insetos","🦋","Bee|Abelha|🐝;Ant|Formiga|🐜;Butterfly|Borboleta|🦋;Spider|Aranha|🕷️;Ladybug|Joaninha|🐞;Snail|Caracol|🐌",["Is the butterfly pretty?","A borboleta é bonita?",["Yes, it is very pretty!","No, it is a bus.","I am hungry, snail."]]],
 ["Under the sea","Fundo do mar","🐳","Shark|Tubarão|🦈;Whale|Baleia|🐳;Octopus|Polvo|🐙;Crab|Caranguejo|🦀;Turtle|Tartaruga|🐢;Dolphin|Golfinho|🐬",["Can a dolphin swim?","O golfinho sabe nadar?",["Yes, it can swim.","No, it is a cake.","Good night, crab."]]],
 ["Places","Lugares","🏫","House|Casa|🏠;School|Escola|🏫;Park|Parque|🏞️;Beach|Praia|🏖️;Hospital|Hospital|🏥;Store|Loja|🏪",["Where do you study?","Onde você estuda?",["I study at school.","I study at the beach, shark.","It is a red hat."]]],
 ["Weather","Clima","🌦️","Sunny|Ensolarado|☀️;Rainy|Chuvoso|🌧️;Cloudy|Nublado|☁️;Snowy|Com neve|❄️;Windy|Ventando|💨;Cold|Frio|🥶",["How is the weather today?","Como está o tempo hoje?",["It is sunny today.","It is a spider.","I am a house."]]],
 ["Jobs","Profissões","🧑‍⚕️","Doctor|Médico|🧑‍⚕️;Teacher|Professor|🧑‍🏫;Police officer|Policial|👮;Firefighter|Bombeiro|🧑‍🚒;Cook|Cozinheiro|🧑‍🍳;Farmer|Fazendeiro|🧑‍🌾",["What do you want to be?","O que você quer ser?",["I want to be a doctor.","I want to be a lemon.","It is rainy, dad."]]],
 ["Music","Música","🎸","Guitar|Violão|🎸;Drum|Tambor|🥁;Piano|Piano|🎹;Trumpet|Trompete|🎺;Violin|Violino|🎻;Song|Canção|🎶",["Can you play the drum?","Você sabe tocar tambor?",["Yes, I can play the drum!","No, I am a whale.","It is cold, teacher."]]],
 ["Big review","Grande revisão do Mês 1","👑",null,["Hello, Lorenzo! Do you like English?","Olá, Lorenzo! Você gosta de inglês?",["Yes, I love English!","No, I am a guitar.","It is a snowy cake."]]],
];
MORE.forEach((m,i)=>LESSONS.push({id:8+i,title:m[0],pt:m[1],icon:m[2],review:!m[3],words:m[3]?m[3].split(";").map(x=>x.split("|")):null,talk:{q:m[4][0],qpt:m[4][1],opts:m[4][2],a:0}}));
/* ---------- CONTENT: month 2 · Eu e minha casa (escrita + frases + fala de frase) ---------- */
var M2=[
 ["Rooms","Cômodos da casa","🏠","Bedroom|Quarto|🛏️;Kitchen|Cozinha|🍳;Bathroom|Banheiro|🛁;Living room|Sala|🛋️;Garden|Jardim|🌷;Garage|Garagem|🚙",["Where do you sleep?","Onde você dorme?",["I sleep in my bedroom.","I sleep in the kitchen, fork.","It is a green garage."]],"This is the _."],
 ["My bedroom","Meu quarto","🛏️","Bed|Cama|🛏️;Door|Porta|🚪;Clock|Relógio|⏰;Light|Luz|💡;Picture|Quadro|🖼️;Candle|Vela|🕯️",["What is in your bedroom?","O que tem no seu quarto?",["There is a bed in my bedroom.","There is a shark in my bed.","My bedroom is a banana."]],"This is my _."],
 ["Kitchen","Cozinha","🍳","Plate|Prato|🍽️;Cup|Xícara|☕;Spoon|Colher|🥄;Fork|Garfo|🍴;Knife|Faca|🔪;Bowl|Tigela|🥣",["What do you use to eat soup?","O que você usa para tomar sopa?",["I use a spoon.","I use a door.","I am a cup."]],"I need a _."],
 ["Bathroom","Banheiro","🛁","Soap|Sabonete|🧼;Toilet|Vaso sanitário|🚽;Shower|Chuveiro|🚿;Bathtub|Banheira|🛁;Sponge|Esponja|🧽;Duck|Patinho|🦆",["What do you use to wash your hands?","O que você usa para lavar as mãos?",["I use soap and water.","I use a pizza.","It is a toilet, mom."]],"Where is the _?"],
 ["Living room","Sala","🛋️","Sofa|Sofá|🛋️;TV|TV|📺;Chair|Cadeira|🪑;Book|Livro|📖;Phone|Celular|📱;Radio|Rádio|📻",["Where do you watch TV?","Onde você assiste TV?",["I watch TV in the living room.","I watch TV in the bathtub.","The TV is a dog."]],"I like the _."],
 ["Garden","Jardim","🌷","Grass|Grama|🌱;Rose|Rosa|🌹;Sunflower|Girassol|🌻;Mushroom|Cogumelo|🍄;Tulip|Tulipa|🌷;Rabbit|Coelho|🐰",["What color is the sunflower?","De que cor é o girassol?",["It is yellow.","It is a rabbit.","I am in the shower."]],"Look at the _!"],
 ["Super review","Revisão da semana 5","🏆",null,["Is your house big or small?","Sua casa é grande ou pequena?",["My house is big.","My house is a spoon.","Yes, I am a candle."]]],
 ["My things","Minhas coisas","🎒","Backpack|Mochila|🎒;Pencil|Lápis|✏️;Glasses|Óculos|👓;Key|Chave|🔑;Umbrella|Guarda-chuva|☂️;Watch|Relógio de pulso|⌚",["Is this your backpack?","Esta é a sua mochila?",["Yes, this is my backpack.","No, I am an umbrella.","It is in the toilet."]],"This is my _."],
 ["Breakfast","Café da manhã","🥚","Egg|Ovo|🥚;Cheese|Queijo|🧀;Juice|Suco|🧃;Butter|Manteiga|🧈;Coffee|Café|☕;Honey|Mel|🍯",["What do you eat for breakfast?","O que você come no café da manhã?",["I eat bread and cheese.","I eat my backpack.","I sleep in the garden."]],"Can I have the _?"],
 ["Big and small","Tamanhos e jeitos","📏","Big|Grande|🐘;Small|Pequeno|🐜;Hot|Quente|🔥;Clean|Limpo|✨;New|Novo|🆕;Old|Velho|👴",["Is an elephant big or small?","O elefante é grande ou pequeno?",["An elephant is big.","An elephant is a cup.","It is my glasses."]],"My room is _."],
 ["Pets","Bichinhos de estimação","🐹","Hamster|Hamster|🐹;Parrot|Papagaio|🦜;Puppy|Filhote de cachorro|🐶;Kitten|Gatinho|🐱;Goldfish|Peixinho|🐠;Frog|Sapo|🐸",["Do you have a pet?","Você tem um bichinho de estimação?",["Yes, I have a puppy.","Yes, I have a hot window.","No, it is a key."]],"This is my _."],
 ["Gadgets","Eletrônicos","💻","Computer|Computador|💻;Headphones|Fones de ouvido|🎧;Camera|Câmera|📷;Keyboard|Teclado|⌨️;Battery|Bateria|🔋;Microphone|Microfone|🎤",["What do you use to play English?","O que você usa para jogar o inglês?",["I use the computer.","I use a frog.","I am a battery."]],"I use the _."],
 ["Family 2","Família 2","👨‍👩‍👦","Grandpa|Vovô|👴;Uncle|Tio|🧔;Aunt|Tia|👩‍🦰;Cousin|Primo|🧒;Friend|Amigo|🤝;Family|Família|👨‍👩‍👦",["Who is your brother?","Quem é o seu irmão?",["My brother is Lucca.","My brother is a camera.","He is a kitchen."]],"This is my _."],
 ["Super review","Revisão da semana 6","🏆",null,["Do you love your family?","Você ama sua família?",["Yes, I love my family!","No, I am a hamster.","It is a new coffee."]]],
 ["Numbers 13-20","Números 13 a 20","🔢","Thirteen|Treze|13;Fourteen|Catorze|14;Fifteen|Quinze|15;Sixteen|Dezesseis|16;Eighteen|Dezoito|18;Twenty|Vinte|20",["How many books do you have?","Quantos livros você tem?",["I have fifteen books.","I have a sad sofa.","Fifteen is my uncle."]],"I have _ books."],
 ["Colors 2","Cores 2","🎨","Pink|Rosa|🌸;Black|Preto|⚫;White|Branco|⚪;Brown|Marrom|🟤;Gray|Cinza|☁️;Gold|Dourado|🥇",["What color is your door?","De que cor é a sua porta?",["My door is white.","My door is a parrot.","I have twenty doors, cat."]],"My door is _."],
 ["Outside my house","Fora de casa","🏡","House|Casa|🏡;Apartment|Apartamento|🏢;Roof|Telhado|🏠;Mailbox|Caixa de correio|📫;Doorbell|Campainha|🔔;Street|Rua|🛣️",["Where do you live?","Onde você mora?",["I live in Bauru.","I live in a sandwich.","It is a doorbell, aunt."]],"Look at the _!"],
 ["Cleaning","Limpeza","🧹","Broom|Vassoura|🧹;Trash|Lixo|🗑️;Basket|Cesto|🧺;Gloves|Luvas|🧤;Box|Caixa|📦;Bag|Sacola|🛍️",["Can you help me clean the house?","Você pode me ajudar a limpar a casa?",["Yes, I can help you!","No, I am a broom.","The trash is my cousin."]],"Where is the _?"],
 ["Dinner","Jantar","🍽️","Rice|Arroz|🍚;Pasta|Macarrão|🍝;Meat|Carne|🥩;Chicken|Frango|🍗;Salad|Salada|🥗;Soup|Sopa|🍲",["What do you eat for dinner?","O que você come no jantar?",["I eat rice and chicken.","I eat the doorbell.","It is a gray TV."]],"I like _."],
 ["Games","Jogos","🎲","Cards|Cartas|🃏;Dice|Dado|🎲;Chess|Xadrez|♟️;Bowling|Boliche|🎳;Darts|Dardos|🎯;Blocks|Blocos|🧱",["Do you want to play cards?","Você quer jogar cartas?",["Yes, let's play!","No, I am a dice.","It is a white chicken."]],"I love _!"],
 ["Super review","Revisão da semana 7","🏆",null,["How many people are in your family?","Quantas pessoas há na sua família?",["There are four people in my family.","There are fifteen bananas in my nose.","My family is a game."]]],
 ["At home","Em casa","🏠","Sleep|Dormir|😴;Eat|Comer|🍽️;Drink|Beber|🥤;Read|Ler|📖;Play|Brincar|🎮;Wash|Lavar|🧼",["What do you do at home?","O que você faz em casa?",["I play and read at home.","I am a kitchen at home.","The home is pink, uncle."]],"I _ at home."],
 ["My desk","Minha mesa de estudo","✏️","Pen|Caneta|🖊️;Paper|Papel|📄;Scissors|Tesoura|✂️;Ruler|Régua|📏;Crayon|Giz de cera|🖍️;Notebook|Caderno|📓",["What do you need to write?","O que você precisa para escrever?",["I need a pencil and paper.","I need a rabbit.","It is a black onion."]],"I need the _."],
 ["Snacks","Lanchinhos","🍿","Cookie|Biscoito|🍪;Popcorn|Pipoca|🍿;Chocolate|Chocolate|🍫;Ice cream|Sorvete|🍦;Sandwich|Sanduíche|🥪;Donut|Rosquinha|🍩",["What is your favorite snack?","Qual é o seu lanche favorito?",["My favorite snack is popcorn.","My favorite snack is a chair.","I am a donut, dad."]],"Can I have the _?"],
 ["Vegetables","Legumes e verduras","🥕","Carrot|Cenoura|🥕;Tomato|Tomate|🍅;Potato|Batata|🥔;Corn|Milho|🌽;Broccoli|Brócolis|🥦;Onion|Cebola|🧅",["Do you eat vegetables?","Você come legumes e verduras?",["Yes, I eat carrots and corn.","Yes, I eat my shoes.","No, it is a bathroom."]],"Where is the _?"],
 ["Directions","Direções","⬆️","Up|Para cima|⬆️;Down|Para baixo|⬇️;Left|Esquerda|⬅️;Right|Direita|➡️;Stop|Pare|🛑;Go|Vá|🟢",["Where is the door?","Onde está a porta?",["The door is on the left.","The door is a potato.","I am fifteen doors."]],"_, please!"],
 ["Weekend","Fim de semana","🎬","Movie|Filme|🎬;Party|Festa|🥳;Pool|Piscina|🏊;Barbecue|Churrasco|🍖;Picnic|Piquenique|🧺;Game|Jogo|🎮",["What do you do on the weekend?","O que você faz no fim de semana?",["I watch a movie with my family.","I eat the pool.","The weekend is a brown cup."]],"I like the _."],
 ["Big review","Grande revisão do Mês 2","👑",null,["Hello, Lorenzo! Can you show me your house?","Olá, Lorenzo! Você pode me mostrar sua casa?",["Yes! This is my house. Come in!","No, I am a kitchen.","My house is a sandwich."]]],
];
M2.forEach((m,i)=>LESSONS.push({id:29+i,title:m[0],pt:m[1],icon:m[2],review:!m[3],words:m[3]?m[3].split(";").map(x=>x.split("|")):null,frame:m[5]||null,talk:{q:m[4][0],qpt:m[4][1],opts:m[4][2],a:0}}));

/* ---------- MESES SEGUINTES ----------
   Cada mês novo: addMonth(N, [ ...28 linhas no formato do M2... ]) e MONTHS_OPEN = N.
   Linha: [titulo, pt, icone, "Word|Palavra|emoji;..." ou null (revisão), [pergunta, pergunta_pt, [3 opções, a 1ª é a certa]], frase_modelo_opcional_com_"_"]
*/
function addMonth(n,rows){rows.forEach((m,i)=>LESSONS.push({id:(n-1)*28+1+i,title:m[0],pt:m[1],icon:m[2],review:!m[3],words:m[3]?m[3].split(";").map(x=>x.split("|")):null,frame:m[5]||null,talk:{q:m[4][0],qpt:m[4][1],opts:m[4][2],a:0}}))}
var MONTHS_OPEN=2;
/* Trilha depois do Mês 12 (Temporada 2 em diante): ["Mês 13","tema"], ... */
var ROADMAP_EXTRA=[];
/* @@NOVOS_MESES@@ */
