function CostAdd(option1,option2,ItemCost, Price,Option3){
    const Choice1 = document.getElementById(option1);
    const Choice2 = document.getElementById(option2);
    const Choice3 = document.getElementById(Option3);
    const TargetInnerText = event.target.innerText;
    const ExtraCost = document.getElementById(ItemCost);
   
    if (TargetInnerText == Choice1.innerText) {
        ExtraCost.innerText = 0;   
    }
    else if (TargetInnerText == Choice2.innerText) {
        ExtraCost.innerText = Price;  
    }
    else {
        ExtraCost.innerText = Price * 2; 
    }
}

const baseprice = document.getElementById('base-price');
const basepriceValue = baseprice.innerText;
const TotalValue = document.getElementById('total-price');
const GrantTotal = document.getElementById('grand-total');
document.getElementById('memory').addEventListener('click', function (event) { 
    CostAdd('memory-8gb', 'memory-16gb', 'memory-cost', 200)
    const StorageCost = document.getElementById('storage-cost').innerText;
    const MemoryCost = document.getElementById('memory-cost').innerText;
    const DeliveryCost = document.getElementById('Delivary-cost').innerText;
    
 function Total() {
        let sum = parseInt(basepriceValue)  + parseInt(MemoryCost) + parseInt(StorageCost) + parseInt(DeliveryCost);
        return sum
    }

    TotalValue.innerText = Total();
    GrantTotal.innerText = TotalValue.innerText;
})

document.getElementById('storage').addEventListener('click', function (event) {
    CostAdd('SSD-256GB','SSD-512GB','storage-cost',300,'SSD-1TB')
    const StorageCost = document.getElementById('storage-cost').innerText;
    const MemoryCost = document.getElementById('memory-cost').innerText;
    const DeliveryCost = document.getElementById('Delivary-cost').innerText;
    

    function Total() {
        let sum = parseInt(basepriceValue)  + parseInt(MemoryCost) + parseInt(StorageCost) + parseInt(DeliveryCost);
        return sum
    }

    TotalValue.innerText = Total();
    GrantTotal.innerText = TotalValue.innerText;
})

document.getElementById('devilary-option').addEventListener('click', function (event) {
    CostAdd('free-delivary', 'paid-delivary', 'Delivary-cost', 50)
    const StorageCost = document.getElementById('storage-cost').innerText;
    const MemoryCost = document.getElementById('memory-cost').innerText;
    const DeliveryCost = document.getElementById('Delivary-cost').innerText;
    
     function Total() {
        let sum = parseInt(basepriceValue)  + parseInt(MemoryCost) + parseInt(StorageCost) + parseInt(DeliveryCost);
        return sum
    }

    TotalValue.innerText = Total();
    GrantTotal.innerText = TotalValue.innerText;
})

//     const StorageCost = document.getElementById('storage-cost').innerText;
//     const MemoryCost = document.getElementById('memory-cost').innerText;
//     const DeliveryCost = document.getElementById('Delivary-cost').innerText;

// document.getElementById('hudai').addEventListener('click', function () {
//     function Total() {
//         let sum = parseInt(basepriceValue)  + parseInt(MemoryCost) + parseInt(StorageCost) + parseInt(DeliveryCost);
//         return sum
//     }

//     TotalValue.innerText = Total()
// })


// Coupon Code Option


    
