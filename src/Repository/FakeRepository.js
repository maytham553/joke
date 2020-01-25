

export default class FakeRepository {

    getRecentPosts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random > 0.7)
                    reject();
                else
                    resolve(posts);
            }, 1500);
        });
    }

    getTrendinPosts() {
        return new Promise((resolve, reject) => {
            const trendingPosts = posts.filter(post => post.isTrend);
            setTimeout(() => {
                const random = Math.random();
                if (random > 0.5)
                    resolve(trendingPosts);
                else
                    reject();
            }, 1500);
        })
    }

}


const posts = [
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 1, tags: ['A', 'B'], isTrend: true
    },
]