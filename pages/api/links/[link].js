export default async (req, res) => {
    const { query: { link } } = req
    var code = 404;

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

        {link: "frodo", code: 403},
        {link: "bilbo", code: 403},
        {link: "sam", code: 403},
        {link: "merry", code: 403},
        {link: "pippin", code: 403},
    ];

    var existing = urls.find(u => u.link.toLowerCase() == link.toLowerCase())
    if (existing) {
        code = existing.code;
    }

    res.status(code).json({
        'code': code,
        'link': link
      });
  }
