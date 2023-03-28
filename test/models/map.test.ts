import { Logger as Log } from '../../src/logger';

type TMap = {
  [id: string]: string;
};

describe('Map', () => {
  const theMap: TMap = {};
  let jsonNested = {
    _id: 'npm',
    _rev: '2742-a880cab2afb384ff115d11b47d1b1ade',
    name: 'npm',
    description: 'a package manager for JavaScript',
    'dist-tags': {
      latest: '9.1.3',
      'latest-2': '2.15.12',
      'next-2': '2.15.12',
      'latest-1': '1.4.29',
      'latest-3': '3.10.10',
      'next-3': '3.10.10',
      'latest-4': '4.6.1',
      'next-4': '4.6.1',
      'latest-5': '5.10.0',
      'next-5': '5.10.0',
      'next-6': '6.14.17',
      'latest-6': '6.14.17',
      'next-7': '7.24.2',
      'next-8': '8.19.3',
      'latest-7': '7.24.2',
      'next-9': '9.1.3',
    },
  };
  beforeEach(() => {
    theMap['a'] = 'b';
    theMap['c'] = 'd';
    jsonNested = {
      _id: 'npm',
      _rev: '2742-a880cab2afb384ff115d11b47d1b1ade',
      name: 'npm',
      description: 'a package manager for JavaScript',
      'dist-tags': {
        latest: '9.1.3',
        'latest-2': '2.15.12',
        'next-2': '2.15.12',
        'latest-1': '1.4.29',
        'latest-3': '3.10.10',
        'next-3': '3.10.10',
        'latest-4': '4.6.1',
        'next-4': '4.6.1',
        'latest-5': '5.10.0',
        'next-5': '5.10.0',
        'next-6': '6.14.17',
        'latest-6': '6.14.17',
        'next-7': '7.24.2',
        'next-8': '8.19.3',
        'latest-7': '7.24.2',
        'next-9': '9.1.3',
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Basics', () => {
    test('should build a simple map collection', async () => {
      expect(theMap['a']).toEqual('b');
      expect(theMap['c']).toEqual('d');
    });
    test('should delete an element from a simple map collection', async () => {
      expect(theMap['a']).toEqual('b');
      expect(theMap['c']).toEqual('d');
      delete theMap['c'];
      expect(theMap['c']).toBeUndefined();
    });
    test('should iterate thru the map, printing the values', async () => {
      Log.info('- theWorkflow.doRunWorkflow - Context - Before -');
      for (const i in theMap) {
        Log.info(`Key [${i}]  Value [${theMap[i]}]`);
      }
      Log.info('- theWorkflow.doRunWorkflow - Context - After -');
    });

    test('should pull the keys of the map using Object.keys()', async () => {
      expect(theMap['a']).toEqual('b');
      expect(theMap['c']).toEqual('d');
      expect(Object.keys(theMap)).toEqual(['a', 'c']);
    });
    test('should use the built in Map normally, Map<string, string>()', async () => {
      const aMap = new Map<string, string>();
      aMap.set('a', 'b');
      aMap.set('c', 'd');
      // expect(aMap['a']).toEqual('b');
      expect(aMap.get('a')).toEqual('b');
      // expect(aMap['c']).toEqual('d');
      expect(aMap.get('c')).toEqual('d');
      expect(aMap.has('a')).toEqual(true);
      expect(aMap.has('d')).toEqual(false);
      // expect(Object.keys(aMap)).toEqual(['a', 'c']);
    });
  });
});
