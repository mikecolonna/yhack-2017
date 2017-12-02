class ArticleInfo {
  constructor(url) {
    this.url = url;
  }


  getArticleText()
  {
      var token = "9475d0089ea474ac8ecd03d2b12d90f2";
      console.log(process.env.articleAPIKEY);
      var sUrl = "https://api.diffbot.com/v3/article?token="+ token + "&url=" + this.url;
      $.get(sUrl, res => {
          return res.objects[0].text;
      })
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
console.log("hi")
const a1 = new ArticleInfo("http://www.nytimes.com/2017/12/01/us/politics/senate-tax-bill.html");
console.log(a1.getArticleText());
