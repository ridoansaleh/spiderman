import { fetchAllStart } from '../../src/redux/actions';
import { FETCH_ALL_START } from '../../src/redux/types';

describe('actions', () => {
  it('should start fetching all todos ', () => {
    const expectedAction = {
      type: FETCH_ALL_START,
    };
    expect(fetchAllStart()).toEqual(expectedAction);
  });
});
