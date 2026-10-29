/* Carte centralisée à partir des informations communiquées par le restaurant. */
window.restaurantMenu = [
  { id: 'entrees', label: 'Pour commencer', title: 'Les entrées', items: [
    ['Poêlée d’escargots à l’ail', '12 pièces', '12,00 €'], ['Ardoise de saumon fumé et ses toasts', '', '12,00 €'], ['Cuisses de grenouilles à l’ail', '', '14,00 €'], ['Croquettes de crevettes grises', '2 pièces', '14,00 €']
  ]},
  { id: 'plats', label: 'Les plats', title: 'Pour continuer', items: [
    ['Welsh', '', '18,50 €'], ['Poisson du jour, risotto et légumes', 'Selon arrivage', '23,00 €'], ['Foie de veau aux échalotes, écrasé de pommes de terre', '', '21,00 €'], ['Fish and chips de cabillaud', '120 g / 240 g', '17,00 €'], ['Croquettes de crevettes grises', '3 pièces · sauce tartare', '24,00 €'], ['Émincés de bœuf et volaille marinés aux épices', 'Sauce tartare', '19,50 €'], ['Filet de poulet sauce au choix', '', '18,00 €'], ['Tartare de bœuf traditionnel ou à l’italienne', '200 g / 400 g', '19,00 €'], ['Bavette d’aloyau de bœuf', '', '20,50 €'], ['Pavé de bœuf', '', '21,00 €'], ['Entrecôte', '', '28,00 €'], ['Côte à l’os à partager', 'Pour 2 personnes · 1 kg', '75,00 €']
  ]},
  { id: 'enfant', label: 'Menu enfant', title: 'Les petits gourmands', note: 'Menu enfant (-10 ans) · 13,00 € · Plat seul : 11,00 €', items: [
    ['Sirop', 'Grenadine, menthe ou citron', ''], ['Steak haché de bœuf', '', ''], ['Omelette', '', ''], ['Nuggets de volaille', '', ''], ['Petit pot de glace ou petite mousse au chocolat', 'Au choix', '']
  ]},
  { id: 'desserts', label: 'Les desserts', title: 'Pour bien finir', items: [
    ['Mousse au chocolat', '', '8,00 €'], ['Crème brûlée', '', '8,00 €'], ['Gaufre légère choco / chantilly', '', '8,00 €'], ['Pain perdu et sa boule de glace', '', '8,50 €'], ['Dame blanche', '', '8,00 €'], ['Coupe de sorbet', '', '6,50 €'], ['Café gourmand', '', '8,50 €'], ['Thé gourmand', '', '9,00 €'], ['Le Colonel', 'Citron', '9,50 €'], ['Le Capitaine', 'Pomme', '9,50 €'], ['Le Général', 'Fruit de la passion', '9,50 €']
  ]},
  { id: 'aperitifs', label: 'Apéritifs', title: 'Pour ouvrir le bal', items: [
    ['Martini blanc', '', '4,50 €'], ['Martini rouge', '', '4,50 €'], ['Clan Campbell', '', '5,50 €'], ['Ballantine’s', '', '6,50 €'], ['Jack Daniel’s', '', '6,50 €'], ['Nikka Blended Japan Whisky', '', '7,50 €'], ['Vodka Wyborowa', '', '6,50 €'], ['Gin Bombay Sapphire', '', '7,50 €'], ['Gin français C’est Nous', '', '6,50 €'], ['Spritz', '', '6,50 €'], ['Ricard', '', '4,00 €'], ['Pastis 51', '', '4,00 €'], ['Picon vin blanc', '', '4,50 €'], ['Picon bière', '', '6,00 €'], ['Ron Zacapa 23 ans', '', '9,50 €'], ['Rhum The Kraken', '', '8,50 €'], ['Rhum Havana Club Añejo Especial', '', '6,50 €'], ['Bailey’s', '', '5,50 €'], ['Coupe de champagne', '', '7,50 €'], ['Kir vin blanc', '', '4,50 €'], ['Kir royal', '', '8,50 €']
  ]},
  { id: 'bieres', label: 'Les bières', title: 'Bières pression & bouteille', groups: [
    { label: 'À la pression', items: [['Bon Secours ambrée 8°', '25 cl / 33 cl', '3,50 € / 4,90 €'], ['Paix Dieu Triple 10°', '25 cl / 33 cl', '4,70 € / 5,70 €'], ['Tongerlo Blonde 6°', '25 cl', '3,20 €']] },
    { label: 'En bouteille', items: [['Westmalle Triple 9,5°', '33 cl', '5,00 €'], ['Karmeliet Tripel 8,4°', '33 cl', '5,00 €'], ['Hoegaarden blanche 4,9°', '25 cl', '4,50 €'], ['Duvel blonde 8,5°', '33 cl', '5,00 €'], ['Bon Secours myrtilles 7°', '33 cl', '5,00 €'], ['Rince Cochon 8,5°', '33 cl', '5,00 €'], ['Jupiler 0,0°', '25 cl', '3,50 €'], ['Jupiler 5,2°', '25 cl', '3,50 €']] }
  ]},
  { id: 'softs', label: 'Softs & eaux', title: 'Sans alcool', groups: [
    { label: 'Softs', items: [['Jus de fruits Looza', 'Orange, pomme, tomate, abricot ou ananas', '3,50 €'], ['Supplément sirop', '', '1,00 €'], ['Coca / Coca Zéro', '33 cl', '3,50 €'], ['Nestea pêche blanche', '20 cl', '3,50 €'], ['Orangina', '25 cl', '3,50 €'], ['Perrier', '33 cl', '3,50 €'], ['Schweppes / Schweppes Agrum’', '25 cl', '3,50 €'], ['Oasis tropical', '20 cl', '3,50 €'], ['Limonade', '20 cl', '3,50 €']] },
    { label: 'Eaux minérales', items: [['Vittel', '50 cl / 1 L', '4,50 € / 6,00 €'], ['Perrier Fines Bulles', '50 cl / 1 L', '4,50 € / 6,00 €'], ['San Pellegrino', '50 cl / 1 L', '4,50 € / 6,00 €']] }
  ]},
  { id: 'vins', label: 'Vins & champagne', title: 'Vins & champagne', groups: [
    { label: 'Vins au verre · 12 cl / 25 cl / 50 cl / 75 cl', items: [['Prémices d’hiver Blanc Doux', '', '4,50 € / 8,50 € / 16,00 € / 22,50 €'], ['La Petite Perrière Pinot Noir rouge (2015)', '', '4,50 € / 8,50 € / 16,00 € / 22,50 €'], ['La Petite Perrière Pinot Noir rosé (2016)', '', '4,50 € / 8,50 € / 16,00 € / 22,50 €'], ['La Petite Perrière Sauvignon Blanc (2016)', '', '4,50 € / 8,50 € / 16,00 € / 22,50 €'], ['Château du Haire / Sauternes (2014)', '12 cl / 25 cl / 50 cl', '6,50 € / 11,50 € / 20,00 €']] },
    { label: 'Vins blancs · bouteille 75 cl', items: [['Château du Haire / Sauternes (2014)', '', '28,00 €'], ['Clos des Lunes « Lune blanche » / Bordeaux (2015)', '', '29,00 €'], ['Domaine de Vissoux de Pierre-Marie Chermette / Beaujolais blanc (2015)', '', '22,50 €'], ['La Chablisienne Le Finage / Chablis A.O.C (2014)', '', '30,00 €'], ['Albarino Laurent Miquel / Lagrasse (2016)', '', '30,00 €']] },
    { label: 'Vin rosé · bouteille 75 cl', items: [['Cuvée du Golfe de Saint-Tropez / Côtes de Provence (2016)', '', '19,00 €']] },
    { label: 'Vins rouges · bouteille 75 cl', items: [['Château Guerry Magrez / Côtes-de-Bourg (2011)', '', '28,00 €'], ['Château d’As / Graves (2014)', '', '26,00 €'], ['Roulepierre Maison Pierre Amadieu / Côtes-du-Rhône (2015)', '', '24,00 €'], ['Jean XXII / Châteauneuf-du-Pape AOC (2015)', '', '45,00 €'], ['Les Terrasses Grillées Maison Moulinier / Saint-Chinian (2009)', '', '36,00 €'], ['Château Haut-Corbin Grand Cru Classé / Saint-Émilion (2011)', '', '36,00 €'], ['Château Mancèdre « Les Griottes » / Pessac-Léognan (2011)', '', '36,00 €'], ['Château Les Landes de Cach / Pauillac (2008)', '', '39,00 €'], ['Château les Hauts-Conseillants / Lalande de Pomerol (2012)', '', '47,00 €'], ['Les Dracy Maison Michel Sarrazin / Givry-Chambertin (2015)', '', '53,00 €']] },
    { label: 'Champagne', items: [['Champagne Moreau Grand Cru Blanc de Blancs', 'Bouteille 75 cl', '38,00 €']] }
  ]},
  { id: 'chaudes', label: 'Cafés & thés', title: 'Boissons chaudes', items: [
    ['Café / décaféiné', '', '2,00 €'], ['Café crème', '', '2,50 €'], ['Thé', '', '3,00 €'], ['Irish Coffee', '', '6,50 €'], ['French Coffee', '', '6,50 €'], ['Russian Coffee', '', '6,50 €'], ['Ch’ti Coffee', '', '9,50 €'], ['Jamaïque Coffee', 'Rhum arrangé', '9,50 €']
  ]},
  { id: 'digestifs', label: 'Digestifs', title: 'Le dernier verre', items: [
    ['Ron Zacapa 23 ans', '', '9,50 €'], ['Rhum Havana Club', '', '6,50 €'], ['Gin français C’est Nous', '', '6,50 €'], ['Gin Bombay Sapphire', '', '7,50 €'], ['Cognac ABK6 VSOP 40°', '', '9,50 €'], ['Armagnac Duc de Camilhac 40°', '', '5,50 €'], ['Calvados Closville AOP', '', '5,50 €'], ['Fleur de Bière 40°', '', '5,50 €'], ['Get 27 / Get 31', '', '5,50 €'], ['Whisky Nikka Blended 40°', '', '7,50 €'], ['Poire Williams', '', '7,50 €'], ['Amaretto', '', '7,50 €'], ['Limoncello', '', '7,50 €']
  ]}
];
