const rp = require("request-promise");
const $ = require("cheerio");

const URL = "https://htmlacademy.ru/intensive";

rp(URL).then(function(html) {
  const res = $(".qualification", html)
    .has(".qualification__type")
    .map((i, elm) => {
      return {
        title: $(".text-link", elm).text(),
        btnText: $(".qualification__right .button", elm).text()
      };
    });

  const { options, prevObject, length, ...cleanRes } = res;
  const resList = Object.values(cleanRes);

  console.log({
    res: resList
  });
});
