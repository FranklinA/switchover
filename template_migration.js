var copy = require('copy-dynamodb-table').copy
 
var globalAWSConfig = { // Should be same configuration as sourceAWSConfig
  accessKeyId: '<<sourceAWSkey>>',
  secretAccessKey: '<<sourceAWSsecret>>',
  region: '<<region>>'
}
 
var sourceAWSConfig = {
  accessKeyId: '<<sourceAWSkey>>',
  secretAccessKey: '<<sourceAWSsecret>>',
  region: '<<region>>'
}
 
var destinationAWSConfig = {
  accessKeyId: '<<destinationAWSkey>>',
  secretAccessKey: '<<destinationAWSsecret>>',
  region: '<<region>>' 
}
 
copy({
    config: globalAWSConfig,
    source: {
      tableName: '<<sourceTable>>',
      config: sourceAWSConfig
    },
    destination: {
	    tableName: '<<destinationTable>>',
      config: destinationAWSConfig
    },
    log: true,
    create : true // create destination table if not exist
  },
  function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })
