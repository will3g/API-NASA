class Articles {

    constructor(JSON) {
        const item = this.selectArticle(JSON);
        const article = this.content(JSON, item);       
        return article;
    }

    selectArticle(JSON) {
        const total = JSON.collection.items.length;
        const item = this.random(0, total);
        return item;
    };

    random(min, max) {
        if (min==null && max==null) return 0;    
        if (max == null) max = min; min = 0;
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    
    content(JSON, item, index = 0) {
        const news = JSON.collection.items[item];
        return {
            'img': news.links[index].href,
            'photographer': news.data[index].photographer,
            'location': news.data[index].location,
            'keywords': news.data[index].keywords,
            'description': news.data[index].description,
            'title': news.data[index].title
        }
    };
}

module.exports = Articles;