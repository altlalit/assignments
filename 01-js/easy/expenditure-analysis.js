/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions){
  const result = [];
  const len = transactions.length;
  for(let i=0;i<len;i++){
      let a = transactions[i].category;
      result.push(a);
  }
  let res = [...new Set(result)];
  
  let ans = [];
  for(let i=0;i<res.length;i++){
      const obj = {};
      obj["category"] = res[i];
      obj["totalSpent"] = 0;
      ans.push(obj);
  }
  for(let i=0;i<len;i++){
      for(let j=0;j<ans.length;j++){
          if(transactions[i].category==ans[j].category){
              // console.log(ans[j].totalSpent);
              // console.log(transactions[i].price);

              ans[j].totalSpent += transactions[i].price;
          }
      }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
