const transform = require('babel-core').transform
const t = require('babel-types')
let duvApiList = require('./apiUtil').duvApiList
module.exports = function (content, options) {
  let defaultOptions = {
    callName: 'duv',
    type: 'wx'
  }
  options = Object.assign(defaultOptions, options||{})
  let duvType = options.type
  let OwnName = ''
  if (duvType === 'wx') {
    OwnName = 'wx'
  } else if (duvType === 'bd') {
    OwnName = 'swan'
  }
  const result = transform(content, {
    plugins: [{
      visitor: {
        CallExpression (path) {
          if (path.node.callee.object && path.node.callee.object.name === options.callName) {
            const callName = path.node.callee.property.name
            if (duvApiList[callName] === true) {
              // 只替换duv
              path.replaceWith(t.CallExpression(
                t.MemberExpression(t.identifier(OwnName),
                  t.identifier(callName)),
                path.node.arguments
              ))
            } else if (typeof duvApiList[callName] === 'object') {
              const newCallName = duvApiList[callName][duvType]
              // 替换duv and callname
              path.replaceWith(t.CallExpression(
                t.MemberExpression(t.identifier(OwnName),
                  t.identifier(newCallName)),
                path.node.arguments
              ))
            }
          };
        }
      }
    }]
  })
  return result.code
}
