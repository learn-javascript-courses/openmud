import test from 'tape';

// Builds the dummy character array for our test data
import makeCharacters from 'test/fixtures/make-characters';

// This is where we'll implement the addCharacter function.
import addCharacter from 'commands/add-character';

test('addCharacter', assert => {
  const msg = 'should add a new character to the character array';
  const mutateMsg = 'should not mutate original array';

  const characters = makeCharacters();
  const copy = characters.slice();
  const newCharacter = {
    'id': 'fakeid',
    name: 'Hoyt',
    description: `A tall, slender man with black, curly hair.`
  };

  const actual = addCharacter(characters, newCharacter);
  const expected = [
    {
      "id":"chyxizs8500064noxdf1wp157",
      "name":"e3",
      "description":"A fun loving robot with a heart of gold. You can usually find them trying to exchange a gold heart for transistors."
    },
    {
      "id":"chyxq5d480000isoxfanv5ojz",
      "name":"Rudy",
      "description":"Mild-mannered coder by day, basement mad scientist by night, obsessed with going back to the 80s."
    },
    {
      "id":"chyxsiv330001kzoxencr97nx",
      "name":"Jereille",
      "description":"A man with an indomitable and thoughtful spirit. He loves the San Diego Padres and Chargers. Loves his family & can't say no to cheesecake."
    },
    {
      'id': 'fakeid',
      name: 'Hoyt',
      description: `A tall, slender man with black, curly hair.`
    }
  ];

  assert.same(actual, expected, msg);
  assert.same(characters, copy, mutateMsg);
  assert.end();
});
