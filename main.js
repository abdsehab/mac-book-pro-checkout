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
        ExtraCost.innerText = (Price * 2) -20; 
    }
}

// Memory 
document.getElementById('memory').addEventListener('click', function (event) { 
    CostAdd('memory-8gb', 'memory-16gb', 'memory-cost', 180)

})
// Storage 
document.getElementById('storage').addEventListener('click', function (event) {
    CostAdd('SSD-256GB','SSD-512GB','storage-cost',100,'SSD-1TB')
    
})
// Delivery
document.getElementById('devilary-option').addEventListener('click', function (event) {
    CostAdd('free-delivary', 'paid-delivary', 'Delivary-cost', 20)
    
})

// Total Update
const baseprice = document.getElementById('base-price');
const basepriceValue = baseprice.innerText;
const TotalValue = document.getElementById('total-price');

document.getElementById('selection-parents').addEventListener('click', function () {
    const StorageCost = document.getElementById('storage-cost');
    const MemoryCost = document.getElementById('memory-cost');
    const DeliveryCost = document.getElementById('Delivary-cost');
    let sum = parseInt(basepriceValue) +  parseInt(StorageCost.innerText) + parseInt(MemoryCost.innerText) + parseInt(DeliveryCost.innerText);

    TotalValue.innerText = sum;
    GrantTotal.innerText = TotalValue.innerText;
})

const GrantTotal = document.getElementById('grand-total');
GrantTotal.innerText = TotalValue.innerText;

// Coupon Code Option
const PromoField = document.getElementById('promo');
const ApplyPromo = document.getElementById('promo-apply');

ApplyPromo.addEventListener('click', function () {
    if (PromoField.value == 'stevekaku') {
        GrantTotal.innerText = parseInt(GrantTotal.innerText) - parseInt(GrantTotal.innerText) * .2;
        PromoField.value = "";
        ApplyPromo.style.display = 'none'
        PromoField.style.display = "none"
        document.getElementById('confirm-msg').style.display ='block'
    }
    else {
        PromoField.value = " Check Again";
    } 
})

