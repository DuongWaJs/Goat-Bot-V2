module.exports = {
    config: {
      name: "sauce",
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
  
  async function _mirai_bot ( {
    api, event, args
  }) {
      var { threadID, messageID, type, messageReply } = event;
      var sagiri = require("sagiri");
      var client = sagiri("2b11c533836ab34f80b6c1b42b43d5e7e6f2aef7");
      if (type !== "message_reply") return api.sendMessage(" Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
      if (!messageReply.attachments || messageReply.attachments.length == 0) return api.sendMessage(" Bạn phải reply một ảnh nào đó", event.threadID, event.messageID);
      for(let { url } of messageReply.attachments) {
          var results = await client(url);
          var result = results[0];
          var msg = `Url: ${result.url}\n`;
              msg += `Title: ${result.title}\n`;
              msg += `Site: ${result.site}\n`;
              msg += `Creator: ${result.raw.data.creator || "Not found"}\n`;
              msg += `Source: ${result.raw.data.source || "Not found"}\n`;
              msg += `Similarity: ${result.similarity}\n`;
              msg += `Material: ${result.raw.data.material || "Not found"}\n`;
              msg += `Character: ${result.raw.data.character || "Not found"}\n`;
          await api.sendMessage(msg, threadID, messageID);
      }
  };