class ArticleInfo {
  constructor(url) {
    this.url = url;
  }


getArticleText()
{
  var token = process.env.articleAPIKEY;
  var request = "https://api.diffbot.com/v3/article?token="+ token + "&url=" + this.url + "&fields=text";  
  const https = require("https");
  https.get(request, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      body = JSON.parse(body);
      return body.results[0];
    });
  });
    
    
}

getArticleMins(text)
{
    var avg_wpm = 200;
    return wordCount(text)/avg_wpm;

}

wordCount(text) {
  var count_text = text.split(" ");
  return count_text.length();
}

}

const a1 = new ArticleInfo("https://www.nytimes.com/2017/12/01/us/politics/senate-tax-bill.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news");
console.log(a1.getArticleText());


























