import reducer, { SORT_CHANGE } from './sort.duck'
it('SORT_CHANGE - with title - set sortBy = title ', () => {
  // Arrange
  const action = {
    type: SORT_CHANGE,
    payload: 'title'
  }
  const prevState = 'none'
   
  // Act
  const result = reducer(prevState, action);
  
  // Assert
  expect(result).toEqual('title')
})

it('OTHER_CHANGE - with title - change nothing ', () => {
  // Arrange
  const action = {
    type: 'OTHER_CHANGE',
    payload: 'title'
  }
  const prevState = 'none'
   
  // Act
  const result = reducer(prevState, action);
  
  // Assert
  expect(result).toEqual(prevState)
});
