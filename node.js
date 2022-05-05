function check(){
    if(window.innerWidth<=700){
        document.getElementById('channelNumberEntry').setAttribute('readonly','');
    }
    else{
        document.getElementById('channelNumberEntry').removeAttribute('readonly','')
    };
};

check();
window.addEventListener('resize',()=>{check()});

function manageLinks(){
    document.getElementById('addLink').setAttribute("href",`https://api.whatsapp.com/send/?phone=%2B9118002086633&text=ADD+${document.getElementById('channelNumberEntry').value}&app_absent=0`);
    document.getElementById('dropLink').setAttribute("href",`https://api.whatsapp.com/send/?phone=%2B9118002086633&text=DROP+${document.getElementById('channelNumberEntry').value}&app_absent=0`);
    
    document.getElementById('addLink').innerText=`ADD CHANNEL ${document.getElementById('channelNumberEntry').value}`;
    document.getElementById('dropLink').innerText=`DROP CHANNEL ${document.getElementById('channelNumberEntry').value}`;
};

var buttonList = document.getElementsByClassName('numbers')

for (const x of buttonList) {
    x.addEventListener('click',()=>{
        document.getElementById('channelNumberEntry').value+=`${x.innerHTML}`;
        manageLinks();
    });
};

function clearAll(){
    document.getElementById('channelNumberEntry').value='';
    manageLinks();
};

function removeOne(){
    var currentValue = document.getElementById('channelNumberEntry').value;
    var editedValue = currentValue.slice(0,currentValue.length-1);
    document.getElementById('channelNumberEntry').value=editedValue;
    manageLinks();
};