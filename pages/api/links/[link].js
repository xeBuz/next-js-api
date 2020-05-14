export default (req, res) => {
    const { query: { link } } = req
    var code = 404;

    const urls = [
        {link: "example", code: 404},
        {link: "OK", code: 200},
        {link: "testing", code: 200},
        {link: "qa", code: 500},
        {link: "miss", code: 404},
        {link: "miss_again", code: 404}
    ];

    var existing = urls.find(u => u.link == link)
    if (existing) {
        code = existing.code;
    }

    res.status(code).json({
        'code': code,
        'link': link
      });
  }
