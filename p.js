

const storeNumber = 3.87;

const goods = [
  {text: 'soda',price: 45},
  {text: 'Cheese',price: 300},
  {text: 'Wheat',price: 150},
  {text: 'Mineral water',price: 30},
  {text: 'Butter',price: 100},
  {text: 'bacon',price: 200},
  {text: 'Humbergar',price: 300}

];

let func = () => {
  goods.forEach((item)=>{

    if(item.text === 'soda'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'cheese'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'wheat'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'Mineral water'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'Butter'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'bacon'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }if(item.text === 'Humbergar'){
      const Vat = storeNumber;
      console.log('The price of this item is',item.price+Vat);
    }
  })
}
  nonst sodaIndex = goods.findIndex(item => item.text==='soda');
  console.log(func());
  const butterIndex = goods.findIndex( item => item.text ==='Butter');
  console.log('Butter');*/



let list =[
    
        {text:'milk',cost: 60},
        {text:'eggs',cost: 30},
        {text:'butter',cost: 70},
        {text:'bread',cost: 65},
        {text:'bacon',cost: 150}

        
];
const stock = () => {
  const heading = `<h1>Our prices are your pockets friendly and we offer cheap prices here in our shop</h1>`;
  console.log(heading);
list.forEach((item) => {
    if(item.text === 'bread'){
      console.log('found the cost of the bread is',item.cost);
    }else if(item.text === 'butter'){
      console.log("The price of buttter is",item.cost);
    }else if(item.text === 'milk'){
      console.log('price of milk is',item.cost);
    }else if(item.text === 'bacon'){
      console.log('Price of bacon is',item.cost);
    }
});
console.log(list.indexOf('bread'));
const butterIndex = list.indexOf('butter');
console.log(butterIndex);

const copy = [...list];

for(i = 0; i < copy; i++){
  const allitems = copy[i];
  console.log('all Items and there prices are shown below:');
  console.log(allitems);

}
}
console.log(stock());
*/



console.log(list.indexOf('sausage'));
//console.log(list.findIndex((item) => {item.text = 'bread';}))
console.log(list.findIndex((item) =>{return item.text ==='bread';}));
let item = list.find((element)=> element.text==='bread'); 
console.log(list.indexOf('butter'));
console.log(list.find((item)=> item.cost=== 3));
console.log(list.findIndex((item) => {return item.text === 'bread'}));


let html = '';
let total = 0;
let i =0;
let item = list[i];

list.sort((a,b) => {
    if(a.cost === b.cost) return 0;
    if(a.cost < b.cost)return 1;
    return -1;
})
while(item){
    if(item.need){
        html += `<li>${list[i]}</li>`;
       total += item.cost;
    }
   item = list[i++];

}
for(let i=0; i < list.length; i++ ){
   let item = 
   html += `<li>${list[i]}</li>`;
   total += Item.cost;

}

document.getElementById('list').innerHTML = html;
document.getElementById('cost').innerHTML = `${total}`;


const goods = {
    mangoes,
    bananas,
    Oranges,
    onions,
    avacado
}
let html = '';
for(let i=0; i < goods.length; i++){
  html += `<li>${goods[i]}</li>`;
}
document.getElementById('list').innerHTML = html;

const goods = {
  Java: 'Java',
  Javascript: 'Bananas',
  Html: 'Oranges', // Correct the casing for consistency
  Ruby: 'Onions',
  Rust: 'Avocado' // Correct spelling
};

let html = '';
const values = Object.keys(goods);
for (let i = 0; i < values.length; i++) {
html += `<li class="bg">${values[i]};</li>`;
}
document.getElementById('list').innerHTML = html;

document.getElementById('p').innerHTML = 'splitted javascript makes work easier'

document.getElementById('s').innerHTML = 'javascript is a powerful language'

const payElement = document.querySelector('.pay');
let h='';
 const payE = () =>{
  if(payElement){
    h = 'we will update you later on payments';
  }else{
    h = 'Payment while programming';
  }
  payElement.textContent = h;
 }
 payElement.addEventListener('click',payE);


//Asychronous

console.log(" i")
console.log("eat ")
setTimeout(()=>{
  console.log(" ice cream")

},4000)

console.log("with a ")
console.log(" spoon")



function one (call_two) {
  console.log('step one complete. please call step 2');
  call_two();
}
function two () {
  console.log('step two');
}
one(two);




let order = (call_production) => {
  console.log("order placed, please call production");
  call_production()
};
let production = () => {
  console.log("Order recieved, starting production");
};
order(production);

let wash = (call_clean) => {
  console.log("%cNeed to wash to enable the place be clean","color: green; font-size: 20px;")
  console.group('Yes m,e');
  console.groupEnd()
  call_clean();

}
let clean = () => {
  console.log('Already clean')

}
wash(clean)




let stocks = {
  Fruits: ["strawberry","grapes","banana","apple"],
  liquid: ["water","ice cream"],
  holder: ["cone","cup"],
  toppings: ["chocolate","peanuts"]

}
let order = (Fruit_name,call_production) => {
  setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]} was selected` )
  },2000);
  call_production()
};
let production = () => {
  setTimeout(()=>{
   console.log("production has started")
   setTimeout(()=>{console.log("The fruit has been chopped")},2000)
   setTimeout(()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} waws added`)},1000)
   setTimeout(()=>{console.log("machine has started")},1000)
   setTimeout(()=>{
    console.log(`${stocks.holder[0]} and ${stocks.holder[1]} was added as toppings`)
   },3000)
   setTimeout(()=>{console.log(`${stocks.toppings[0]} was added as toppings`)},4000)

  }, 1000)
  
};

 


let stocks = {
  Fruits: ["strawberry","grapes","banana","apple"],
  liquid: ["water","ice cream"],
  holder: ["cone","cup"],
  toppings: ["chocolate","peanuts"]

};
let is_shop_open = true;

let order = (time,work) => {
  return new Promise( (resolve,reject)=>{
    if(is_shop_open){
      setTimeout(()=>{           
      },time)
      resolve( work());
    }else{
      reject(console.log("Our shop is closed"))
    }

  });
}       
  order(2000, ()=>
    console.log(`${stocks.Fruits[0]} was selected`))

  .then(()=>{
    return order(1000, ()=>{
      console.log("production has started")
    })
  })
  .then(()=>{
    return order(2000, ()=>{
      console.log("The fruit was chopped");
    })
  })
  .then(()=>{
    return order(1000, ()=>{
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
  })

  .then(()=>{
    return order(1000, ()=>{
      console.log("start the machine")
    })
  })
  .then(()=>{
    return order(2000, ()=>{
      console.log(`ice cream was placed on ${stocks.holder[0]}`)
    })
  })
  .then(()=>{
    return order(3000, ()=>{
      console.log(`${stocks.toppings[0]} was selected`)
    })
  })
  .then(()=>{
    return order(1000, ()=>{
      console.log("was served as ice");
    })
  })
  .catch(()=>{
    console.log("customer left");
  })
  .finally(()=>{
    console.log("day ended,shop is closed")
  })
*/

let stocks = {
  Fruits: ["strawberry","grapes","banana","apple"],
  liquid: ["water","ice cream"],
  holder: ["cone","cup"],
  toppings: ["chocolate","peanuts"]

};
let is_shop_open = true;

let toppings_choice = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log("which topping do you love"))

    },3000)

  })
}
async function kitchen(){
  console.log("A")
  console.log("B")
  console.log("C")

  await toppings_choice()

  console.log("D")
  console.log("E")

kitchen()
console.log("cleaning the dishes")
console.log("cleaning the table")
console.log("taking orders")


}
 

