
module.exports = {
    config: {
      name: "autosend123",
      version: "1.0.0",
      author: "",
      countDown: 5,
      role: 0,
      shortDescription: {
        vi: "a",
        en: "b"
      },
      longDescription: {
        vi: "l",
        en: "m"
      },
      category: "user",
      guide: {
        vi: "{pn} ",
        en: "{pn} "
      }
    },
  
    langs: {
      vi: {
        error: 'c'
      },
      en: {
        error: 'c'
      }
    },
  
    onStart: function (o) {
      //console.log(Object.keys(o));
      _mirai_bot({
        api: o.api,
        args: o.args,
        event: o.event,
      });
    },
    onChat: function(o) {}};
  
  async function _mirai_bot (o) {
          let
          get = require('axios').get;
  
          let
          s30 = 1000*30,
          end = Date.now()+s30,
          allTID = ['5089347027813796', '6247402075272217'],// gắn id nhóm vào đây
          send = msg=>allTID.forEach(id=>o.api.sendMessage(msg, id)),
          api = 'https://api-dundun.up.railway.app/gelbooru?search=',
          tag = [
              'genshin impact',
              'uncensored',
              ' hololive',
              '1girl',
              'cat_girl',
              'spread_pussy',
              'blue_archive',
              'huge_breasts',
              'raiden_shogun',
              'arknights',
              'animal_ears',
              'loli',
              'animated',
              'nude',
              'sex',
              'kantai_collection',
              'goddess_of_victory:_nikke',
              'azur_lane',
              'pussy'
          ];
  
          if (!!global.setinterval_autosend123) {
              clearInterval(global.setinterval_autosend123);
  
              return send('tắt auto gửi ảnh: '+tag.join(', '));
          } else {
              global.setinterval_autosend123 = setInterval(async()=> {
                  let
                  now = Date.now();
                  if (now > end) {
                      end = now+s30;
  
                      try {
                          let
                          reply = await get(api+encodeURI(tag[Math.random()*tag.length<<0]));
  
                          send({
                              attachment: (await get(/*'https://external-content.duckduckgo.com/iu/?u='+*/reply.data.data[Math.random()*reply.data.data.length<<0], {
                                  responseType: 'stream'
                              })).data,
                          });
                      } catch (e) {
                          console.log(e);
                      };
                  };
              },
                  100);
  
              return send(``)
          };
      };