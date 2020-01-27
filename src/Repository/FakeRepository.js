

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
        });
    }

    getTemplates(){
        return new Promise((resolve , reject)=>{
            setTimeout(()=>{
                const random = Math.random();
                if (random>0.5)
                resolve(Templates)
                else reject();
            },1500)
        })
    }

}

const Templates = [
    {
        text: 'temp', image: '/Temptest1.png', likes: 6, 
         id: 1, tags: ['A', 'B']
    },
    {
        text: 'temp', image: '/Temptest2.jpg', likes: 6, 
         id: 2, tags: ['A', 'B']
    },
    {
        text: 'temp', image: '/Temptest3.jpg', likes: 6, 
         id: 3, tags: ['A', 'B']
    },

]

const posts = [
    {
        text: 'Hello', image: '/test1.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 4, tags: ['A', 'B'], isTrend: true
    },
    {
        text: 'Hello', image: '/test2.png', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 5, tags: ['A', 'B'], isTrend: false
    },
    {
        text: 'Hello', image: '/test3.jpg', likes: 10, author: {
            name: 'Ali', url: 'http://google.com'
        }, id: 6, tags: ['A', 'B'], isTrend: true
    } ]