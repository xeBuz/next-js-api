const fetch = require("node-fetch");

export default async (req, res) => {
    const { query: { link } } = req
    var code = 404;

    await fetch("https://jsonblob.com/api/jsonBlob/075ff1c4-95ec-11ea-87c3-0f1e1613ada4", {cache: "no-store"})
        .then(response => response.json())
        .then(links => {

            var existing = links.data.find(u => u.link.toLowerCase() == link.toLowerCase());

            if (existing) {
                code = existing.code;
            }

            res.status(code).json({
                'code': code,
                'link': link
              });
        });
  }
