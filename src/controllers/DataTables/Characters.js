import Character from "@/controllers/Character"
import Spell from "@/controllers/Spell"
import Attacks from "@/controllers/DataTables/Attacks"
import Spells from "@/controllers/DataTables/Spells"
import Attack from "@/controllers/Attack"

export default {
  '001': new Character(
    'Harry Potter', 9,
    2, 2, 2, Spell.TYPE_LIGHT,
    7, 4, 9, 5,
    ['Apprentice', 'Chosen One', 'Gryffindor', 'Potioneer 1'],
    Spells["Expecto Patronum"],
    2,
    1
    ),
  '002': new Character(
    'Hermoine Granger', 8,
    2, 2, 2, Spell.TYPE_LIGHT,
    6, 4, 5, 7,
    ['Apprentice', 'Gryffindor', 'Potioneer 1'],
    Spells["Counter-Spell"],
    2,
    2
  ),
  '003': new Character(
    'Ron Weasley', 7,
    1, 2, 1, Spell.TYPE_LIGHT,
    5, 4, 6, 3,
    ['Apprentice', 'Gryffindor', 'Tactician'],
    Spells["Confundo"],
    1,
    2
  ),
  '004': new Character(
    'Death Eater 1', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts'],
    Spells['Impedimenta'],
    1,
    2
  ),
  '005': new Character(
    'Death Eater 2', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Duelling'],
    Spells['Expelliarmus'],
    1,
    2
  ),
  '006': new Character(
    'Death Eater 3', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Potioneer 1'],
    Spells['Impedimenta'],
    1,
    2
  ),
  '007': new Character(
    'Death Eater 4', 6,
    2, 1, 1, Spell.TYPE_DARK,
    8, 0, 9, 4,
    ['Dark Arts', 'Tactician'],
    Spells['Stupefy'],
    1,
    2
  ),
  '008': new Character(
    'Acromantula', 5,
    0, 1, 0, Spell.TYPE_NONE,
    0, 1, 1, 1,
    ['Beast', 'Fast', 'Horde', 'Scout'],
    Attacks["008"],
    0,
    0,
    true
  ),
  '009': new Character(
    'Acromantula Swarm', 4,
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
  '010': new Character(
    'Bellatrix Lestrange', 14,
    3, 2, 3, Spell.TYPE_DARK,
    9, 1, 10, 6,
    ['Dark Arts', 'Duelling', 'Expert Wizard', ' Slytherin'],
    Spells['Crucio'],
    3,
    2
  ),
  '011': new Character(
    'Peter Pettigrew', 10,
    2, 2, 2, Spell.TYPE_MIXED,
    0, 0, 1, 3,
    ['Dark Arts', 'Potioneer 2'],
    Spells['Avada Kedavra'],
    2,
    1
  ),
  '017': new Character(
    'Draco Malfoy', 8,
    2, 1, 2, Spell.TYPE_MIXED,
    4, 8, 10, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Petrificus Totalus'],
    2,
    2
  ),
  '018': new Character(
    'Gregory Goyle', 5,
    1, 1, 1, Spell.TYPE_MIXED,
    1, 2, 7, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Expelliarmus'],
    1,
    1
  ),
  '019': new Character(
    'Vincent Crabbe', 5,
    1, 0, 1, Spell.TYPE_MIXED,
    1, 2, 7, 1,
    ['Apprentice', 'Dark Arts', 'Slytherin'],
    Spells['Stupefy'],
    1,
    1
  ),
  '020': new Character(
    'Luna Lovegood', 7,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 3, 2, 2,
    ['Apprentice', 'Magical Creatures Expert', 'Ravenclaw'],
    Spells['Stupefy'],
    2,
    2
  ),
  '021': new Character(
    'Cho Chang', 6,
    1, 1, 1, Spell.TYPE_LIGHT,
    4, 2, 3, 3,
    ['Apprentice', 'Ravenclaw'],
    Spells['Stupefy'],
    2,
    2
  ),
  '022': new Character(
    'Ginny Weasley', 5,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 4, 4, 2,
    ['Apprentice', 'Gryffindor'],
    Spells['Reducto'],
    2,
    2
  ),
  '023': new Character(
    'Fred Weasley', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    9, 3, 3, 2,
    ['Apprentice', 'Gryffindor', 'Potioneer 2'],
    Spells['Jelly-Legs Jinx'],
    2,
    2
  ),
  '024': new Character(
    'George Weasley', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    9, 3, 3, 2,
    ['Apprentice', 'Gryffindor', 'Potioneer 2'],
    Spells['Bombarda'],
    2,
    2
  ),
  '029': new Character(
    'Severus Snape', 16,
    3, 3, 3, Spell.TYPE_MIXED,
    9, 3, 6, 7,
    ['Dark Arts', 'Duellig', 'Expert Wizard', 'Potioneer 3', 'Potion Mastery 1', 'Professor', 'Slytherin'],
    Spells['Sectumsempra'],
    3,
    2
  ),
  '030': new Character(
    'Minerva McGonagall', 14,
    3, 2, 3, Spell.TYPE_LIGHT,
    9, 3, 6, 7,
    ['Duelling', 'Expert Wizard', 'Gryffindor', 'Leadership', 'Professor'],
    Spells['Protego Maxima'],
    3,
    2
  ),
  '031': new Character(
    'Dolores Umbridge', 10,
    2, 1, 2, Spell.TYPE_MIXED,
    5, 2, 8, 2,
    ['Dark Arts', 'Professor', 'Slytherin'],
    Spells['Crucio'],
    2,
    1
  ),
  '032': new Character(
    'Gilderoy Lockhart', 8,
    1, 1, 2, Spell.TYPE_MIXED,
    2, 2, 8, 2,
    ['Professor', 'Ravenclaw'],
    Spells['Obliviate'],
    1,
    1
  ),
  '036': new Character(
    'Troll', 9,
    0, 1, 0, Spell.TYPE_NONE,
    0, 5, 3, 0,
    ['Beast', 'Large', 'Magical Immunity 1', 'Physical Resistance 2'],
    Attacks['036'],
    0,
    0,
    false,
    9
  ),
  '037': new Character(
    'Dementor', 9,
    0, 2, 2, Spell.TYPE_DARK,
    5, 4, 10, 1,
    ['Beast', 'Fast', 'Fly', 'Horde', 'Physical Resistance 1'],
    Attacks['037'],
    0,
    0,
    true,
    9
  ),
  '038': new Character(
    'Unicorn', 8,
    0, 3, 2, Spell.TYPE_LIGHT,
    6, 6, 1, 7,
    ['Beast', 'Large', 'Scout'],
    Attacks['038'],
    0,
    0,
    false,
    9
  ),
  '040': new Character(
    'Pansy Parkinson', 6,
    1, 0, 2, Spell.TYPE_LIGHT,
    4, 2, 9, 2,
    ['Apprentice', 'Slytherin'],
    Spells['Stupefy'],
    1,
    1
  ),
  '041': new Character(
    'Neville Longbottom', 8,
    2, 1, 1, Spell.TYPE_LIGHT,
    3, 3, 5, 2,
    ['Apprentice', 'Brave', 'Gryffindor', 'Herbology Expert'],
    Spells['Petrificus Totalus'],
    2,
    1
  ),
  '042': new Character(
    'Cedric Diggory', 9,
    2, 1, 2, Spell.TYPE_LIGHT,
    6, 4, 2, 5,
    ['Apprentice', 'Hufflepuff'],
    Spells['Evanesco'],
    2,
    1
  ),
  '043': new Character(
    'Albus Dumbledore', 18,
    3, 2, 4, Spell.TYPE_MIXED,
    12, 5, 2, 9,
    ['Duelling', 'Gryffindor', 'Leadership', 'Master Wizard', 'Supreme Mugwump'],
    Spells['Apparition'],
    3,
    3
  ),
  '044': new Character(
    'Argus Filch', 4,
    0, 1, 2, Spell.TYPE_LIGHT,
    0, 1, 10, 4,
    ['Muggle', 'Scout'],
    Attacks['044'],
    0,
    0
  ),
  '045': new Character(
    'Kreacher', 9,
    0, 1, 3, Spell.TYPE_LIGHT,
    7, 3, 12, 2,
    ['Elf', 'Magic Immunity 1', 'Magic Resistance 1'],
    Attacks['045'],
    1,
    0
  ),
  '046': new Character(
    'Dobby', 10,
    0, 1, 3, Spell.TYPE_LIGHT,
    7, 4, 12, 4,
    ['Elf', 'Magic Immunity 1', 'Magic Resistance 1'],
    Attacks['045'],
    1,
    0
  ),
}
