const accountId = 144554
let accountEmail = "sunil@tcs.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

// Do not use var because of problem with its scope

accountEmail = "sunil@google.com"
accountPassword = "67890"
accountCity = "bangaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])