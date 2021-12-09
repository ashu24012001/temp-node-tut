const os=require('os');
const user=os.userInfo();
console.log(user);
//Displays how much seconds computer has ran uptill now:
console.log(os.uptime());
const currentOS={
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};
console.log(currentOS);
