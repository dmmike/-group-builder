import Character from "@/controllers/Character"
import Spell from "@/controllers/Spell"
import Attacks from "@/controllers/DataTables/Attacks"
import Spells from "@/controllers/DataTables/Spells"
import Attack from "@/controllers/Attack"

export default {
  1: new Character(
    1, 'Harry Potter', 9,
    2, 2, 2, Spell.TYPE_LIGHT,
    7, 4, 9, 5,
    ['Apprentice', 'Chosen One', 'Gryffindor', 'Potioneer 1'],
    Spells["Expecto Patronum"],
    2,
    1
    ),
  2: new Character(
    2, 'Hermoine Granger', 8,
    2, 2, 2, Spell.TYPE_LIGHT,
    6, 4, 5, 7,
    ['Apprentice', 'Gryffindor', 'Potioneer 1'],
    Spells["Counter-Spell"],
    2,
    2
  ),
  3: new Character(
    3, 'Ron Weasley', 7,
    1, 2, 1, Spell.TYPE_LIGHT,
    5, 4, 6, 3,
    ['Apprentice', 'Gryffindor', 'Tactician'],
    Spells["Confundo"],
    1,
    2
  ),
  4: new Character(
    4, 'Death Eater 1', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts'],
    Spells['Impedimenta'],
    1,
    2
  ),
  5: new Character(
    5, 'Death Eater 2', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Duelling'],
    Spells['Expelliarmus'],
    1,
    2
  ),
  6: new Character(
    6, 'Death Eater 3', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Potioneer 1'],
    Spells['Impedimenta'],
    1,
    2
  ),
  7: new Character(
    7, 'Death Eater 4', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Tactician'],
    Spells['Stupefy'],
    1,
    2
  ),
  8: new Character(
    8, 'Acromantula', 5,
    0, 1, 0, Spell.TYPE_NONE,
    0, 1, 1, 1,
    ['Beast', 'Fast', 'Horde', 'Scout'],
    Attacks["008"],
    0,
    0,
    true
  ),
  9: new Character(
    9, 'Acromantula Swarm', 4,
    0, 1, 0, Spell.TYPE_NONE,
    0, 1, 1, 1,
    ['Beast', 'Fast', 'Horde', 'Scout', 'Swarm'],
    Attacks["009"],
    0,
    0,
    true,
    1,
    5
  ),
  10: new Character(
    10, 'Bellatrix Lestrange', 14,
    3, 2, 3, Spell.TYPE_DARK,
    9, 1, 10, 6,
    ['Dark Arts', 'Duelling', 'Expert Wizard', ' Slytherin'],
    Spells['Crucio'],
    3,
    2
  ),
  11: new Character(
    11, 'Peter Pettigrew', 10,
    2, 2, 2, Spell.TYPE_MIXED,
    0, 0, 1, 3,
    ['Dark Arts', 'Potioneer 2'],
    Spells['Avada Kedavra'],
    2,
    1
  ),
  17: new Character(
    17, 'Draco Malfoy', 8,
    2, 1, 2, Spell.TYPE_MIXED,
    4, 8, 10, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Petrificus Totalus'],
    2,
    2
  ),
  18: new Character(
    18, 'Gregory Goyle', 5,
    1, 1, 1, Spell.TYPE_MIXED,
    1, 2, 7, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Expelliarmus'],
    1,
    1
  ),
  19: new Character(
    19, 'Vincent Crabbe', 5,
    1, 0, 1, Spell.TYPE_MIXED,
    1, 2, 7, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Stupefy'],
    1,
    1
  ),
  20: new Character(
    20, 'Luna Lovegood', 7,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 3, 2, 2,
    ['Apprentice', 'Magical Creatures Expert', 'Ravenclaw'],
    Spells['Stupefy'],
    2,
    2
  ),
  21: new Character(
    21, 'Cho Chang', 6,
    1, 1, 1, Spell.TYPE_LIGHT,
    4, 2, 3, 3,
    ['Apprentice', 'Ravenclaw'],
    Spells['Stupefy'],
    2,
    2
  ),
  22: new Character(
    22, 'Ginny Weasley', 5,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 4, 4, 2,
    ['Apprentice', 'Gryffindor'],
    Spells['Reducto'],
    2,
    2
  ),
  23: new Character(
    23, 'Fred Weasley', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    9, 3, 3, 2,
    ['Apprentice', 'Gryffindor', 'Potioneer 2'],
    Spells['Jelly-Legs Jinx'],
    2,
    2
  ),
  24: new Character(
    24, 'George Weasley', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    9, 3, 3, 2,
    ['Apprentice', 'Gryffindor', 'Potioneer 2'],
    Spells['Bombarda'],
    2,
    2
  ),
  29: new Character(
    29, 'Severus Snape', 16,
    3, 3, 3, Spell.TYPE_MIXED,
    9, 3, 6, 7,
    ['Dark Arts', 'Duellig', 'Expert Wizard', 'Potioneer 3', 'Potion Mastery 1', 'Professor', 'Slytherin'],
    Spells['Sectumsempra'],
    3,
    2
  ),
  30: new Character(
    30, 'Minerva McGonagall', 14,
    3, 2, 3, Spell.TYPE_LIGHT,
    9, 3, 6, 7,
    ['Duelling', 'Expert Wizard', 'Gryffindor', 'Leadership', 'Professor'],
    Spells['Protego Maxima'],
    3,
    2
  ),
  31: new Character(
    31, 'Dolores Umbridge', 10,
    2, 1, 2, Spell.TYPE_MIXED,
    5, 2, 8, 2,
    ['Dark Arts', 'Professor', 'Slytherin'],
    Spells['Crucio'],
    2,
    1
  ),
  32: new Character(
    32,'Gilderoy Lockhart', 8,
    1, 1, 2, Spell.TYPE_MIXED,
    2, 2, 8, 2,
    ['Professor', 'Ravenclaw'],
    Spells['Obliviate'],
    1,
    1
  ),
  36: new Character(
    36, 'Troll', 9,
    0, 1, 0, Spell.TYPE_NONE,
    0, 5, 3, 0,
    ['Beast', 'Large', 'Magical Immunity 1', 'Physical Resistance 2'],
    Attacks['036'],
    0,
    0,
    false,
    9
  ),
  37: new Character(
    37, 'Dementor', 9,
    0, 2, 2, Spell.TYPE_DARK,
    5, 4, 10, 1,
    ['Beast', 'Fast', 'Fly', 'Horde', 'Physical Resistance 1'],
    Attacks['037'],
    0,
    0,
    true,
    9
  ),
  38: new Character(
    38, 'Unicorn', 8,
    0, 3, 2, Spell.TYPE_LIGHT,
    6, 6, 1, 7,
    ['Beast', 'Large', 'Scout'],
    Attacks['038'],
    0,
    0,
    false,
    9
  ),
  40: new Character(
    40, 'Pansy Parkinson', 6,
    1, 0, 2, Spell.TYPE_LIGHT,
    4, 2, 9, 2,
    ['Apprentice', 'Slytherin'],
    Spells['Stupefy'],
    1,
    1
  ),
  41: new Character(
    41, 'Neville Longbottom', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 3, 5, 2,
    ['Apprentice', 'Brave', 'Gryffindor', 'Herbology Expert'],
    Spells['Petrificus Totalus'],
    2,
    1
  ),
  42: new Character(
    42, 'Cedric Diggory', 9,
    2, 1, 2, Spell.TYPE_LIGHT,
    6, 4, 2, 5,
    ['Apprentice', 'Hufflepuff'],
    Spells['Evanesco'],
    2,
    1
  ),
  43: new Character(
    43, 'Albus Dumbledore', 18,
    3, 2, 4, Spell.TYPE_MIXED,
    12, 5, 2, 9,
    ['Duelling', 'Gryffindor', 'Leadership', 'Master Wizard', 'Supreme Mugwump'],
    Spells['Apparition'],
    3,
    3
  ),
  44: new Character(
    44, 'Argus Filch', 4,
    0, 1, 2, Spell.TYPE_LIGHT,
    0, 1, 10, 4,
    ['Muggle', 'Scout'],
    Attacks['044'],
    0,
    0
  ),
  45: new Character(
    45, 'Kreacher', 9,
    0, 1, 3, Spell.TYPE_LIGHT,
    7, 3, 12, 2,
    ['Elf', 'Magic Immunity 1', 'Magic Resistance 1'],
    Attacks['045'],
    1,
    0
  ),
  46: new Character(
    46, 'Dobby', 10,
    0, 1, 3, Spell.TYPE_LIGHT,
    7, 4, 12, 4,
    ['Elf', 'Magic Immunity 1', 'Magic Resistance 1'],
    Attacks['045'],
    1,
    0
  ),
}
