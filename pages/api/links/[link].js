export default async (req, res) => {
    const { query: { link } } = req
    var code = 200;

    const urls = [
        {link: "example", code: 404},
        {link: "ok", code: 200},
        {link: "testing", code: 200},
        {link: "qa", code: 500},
        {link: "cq", code: 503},
        {link: "miss", code: 404},
        {link: "again", code: 404},
        {link: "blue", code: 200},
        {link: "red", code: 200},
        {link: "yellow", code: 200},
        {link: "pink", code: 200},
        {link: "orange", code: 200},
    ];

    var existing = urls.find(u => u.link.toLowerCase() == link.toLowerCase())
    if (existing) {
        code = existing.code;
    }
    const r = await fetch("https://gist.githubusercontent.com/xeBuz/e04a8efc4f9cd710ccd455bbd9fef9c8/raw/d5134fc95679083fc67412f9cc137186dd40ce6c/links.json");
    const posts = await r.json();

    res.status(code).json({
        'code': code,
        'link': link
      });
  }
