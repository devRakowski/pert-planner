import { Task } from '../task';

describe('testing class task', () => {
  describe('constructor', () => {
    test('complete set of parameters', () => {
      const params = {
        title: 'test task',
        parentTask: null,
        rating: {
          negative: 20,
          realistic: 15,
          optimistic: 10
        }
      };
      const task = new Task(params);
      expect(task.getTask()).toEqual({
        title: params.title,
        probableRating: '15.00',
        standardDeviation: '-1.67'
      });
    });
  });
});
