const LinkedList = require('./linkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('adds nodes correctly', () => {
    list.add(10);
    list.add(20);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
  });

  test('removes a node correctly', () => {
    list.add(10);
    list.add(20);
    list.add(30);
    list.remove(20);
    expect(list.head.next.value).toBe(30);
  });

  test('includes() returns true if value exists', () => {
    list.add(100);
    list.add(200);
    expect(list.includes(100)).toBe(true);
    expect(list.includes(300)).toBe(false);
  });

  test('insertAt inserts node at correct index', () => {
    list.add(10);
    list.add(30);
    list.insertAt(20, 1);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next.value).toBe(30);
  });

  test('insertAt at index 0 replaces head', () => {
    list.add(50);
    list.insertAt(25, 0);
    expect(list.head.value).toBe(25);
    expect(list.head.next.value).toBe(50);
  });
});
