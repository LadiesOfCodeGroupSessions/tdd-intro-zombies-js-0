// use named imports
import { Survivor } from '../src/Survivor';

test('Survivor should have a name', () => {
  const survivor = new Survivor();
  expect(survivor.name).toBe('Shawna');
});