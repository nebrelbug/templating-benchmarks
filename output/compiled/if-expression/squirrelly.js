module.exports=function anonymous(options,Sqrl
/*``*/) {
var tRes="";for (var key in options.accounts) {if (!options.accounts.hasOwnProperty(key)) continue;tRes+=function (helpervals) {var helpervals1=helpervals;var blockdefault1="";blockdefault1+="\r\n<div>\r\n";if (typeof helpervals === 'undefined') helpervals = {}; if(helpervals.this.status === 'closed'){blockdefault1+=function (helpervals) {var helpervals2=helpervals;var blockdefault2="";blockdefault2+="\r\n    <div>\r\n    Your account has been closed!\r\n    </div>\r\n";return blockdefault2}(helpervals)}else { blockdefault1+=function (helpervals) {var helpervals2=helpervals;var blockelse2="";blockelse2+="\r\n    ";if (typeof helpervals === 'undefined') helpervals = {}; if(helpervals.this.status === 'suspended'){blockelse2+=function (helpervals) {var helpervals3=helpervals;var blockdefault3="";blockdefault3+="\r\n    <div>\r\n    Your account has been temporarily suspended\r\n    </div>\r\n    ";return blockdefault3}(helpervals)}else { blockelse2+=function (helpervals) {var helpervals3=helpervals;var blockelse3="";blockelse3+="\r\n    <div>\r\n        Bank balance:\r\n        <span class=";if (typeof helpervals === 'undefined') helpervals = {}; if(helpervals.this.balance < 0){blockelse3+=function (helpervals) {var helpervalsbalancecheck=helpervals;var blockdefaultbalancecheck="";blockdefaultbalancecheck+="'negative'";return blockdefaultbalancecheck}(helpervals)}else { blockelse3+=function (helpervals) {var helpervalsbalancecheck=helpervals;var blockelsebalancecheck="";blockelsebalancecheck+="'positive'";return blockelsebalancecheck}(helpervals)}blockelse3+=">";blockelse3+=helpervals.this.balanceFormatted;blockelse3+="</span>\r\n    </div>\r\n    ";return blockelse3}(helpervals)}blockelse2+="\r\n";return blockelse2}(helpervals)}blockdefault1+="\r\n</div>\r\n";return blockdefault1}({this: options.accounts[key], key: key})}return tRes
}