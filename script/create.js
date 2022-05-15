const fs = require('fs')
const path = require('path')
const filename = process.argv[2]
const dir = path.resolve(__dirname,'../challenges/'+filename)
console.log(process.argv)
if(!fs.existsSync(dir)){
  fs.mkdirSync(dir)
  fs.writeFileSync(path.resolve(dir+'/template.ts'),'')
  fs.writeFileSync(path.resolve(dir+'/test-case.ts'),'')
}
