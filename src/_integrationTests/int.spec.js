import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
    
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        
        const expectedState = [
            {
                title: 'Test title 1',
                body: 'Test body'
            },
            {
                title: 'Test title 2',
                body: 'Test body'
            },
            {
                title: 'Test title 3',
                body: 'Test body'
            }
        ];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    });
    
})
