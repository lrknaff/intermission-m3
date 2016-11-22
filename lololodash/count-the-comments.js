const _ = require('lodash');

const worker = (commentList) => {
 return _
 .chain(commentList)
 .groupBy('username')
 .map((comment, userName) => {
   return { username: userName, comment_count: _.size(comment)}
 })
 .sortBy('comment_count')
 .reverse()
}

module.exports = worker;
