
import orderByProps from '../orderByProps';

test('работа функции', () => {
  const obj2 = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(obj2, [])).toEqual([{ key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }]);
});

test('работа функции с исключениями', () => {
  const obj2 = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  expect(orderByProps(obj2, ['name', 'level'])).toEqual([{ key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

// test('Выброс ошибки в случае typeof this.name !== string', () => {
//   expect(() => new Character(123, 'Bowman')).toThrow();
// });


// test('Выброс ошибки в случае this.name.length < 2', () => {
//   expect(() => new Character('O', 'Bowman')).toThrow();
// });
