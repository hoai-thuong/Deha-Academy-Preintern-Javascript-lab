//delare variables
let h = null; // hours                 console.log(typeof h)  => object 
let m = null; // minute
let s = null; // second 

// let timeout = null;/ // Timeout
function start() {
    getStart()

}

function getStart()
{
   /*BƯỚC 1: LẤY GIÁ TRỊ BAN ĐẦU*/

if ( h === null )                 //console.log(h === null)  => true 
{
    // h = parseInt(document.getElementById('h_val').value);
    // m = parseInt(document.getElementById('m_val').value);
    // s = parseInt(document.getElementById('s_val').value);
    // test
    h = document.getElementById('h_val').value;
    m = document.getElementById('m_val').value;
    s = document.getElementById('s_val').value;
}

/*BƯỚC 1: CHUYỂN ĐỔI DỮ LIỆU*/
// Nếu số giây = -1 tức là đã chạy ngược hết số giây, lúc này:
//  - giảm số phút xuống 1 đơn vị
//  - thiết lập số giây lại 59
if (s == -1){
    m -= 1;
    s = 59;
}

// Nếu số phút = -1 tức là đã chạy ngược hết số phút, lúc này:
//  - giảm số giờ xuống 1 đơn vị
//  - thiết lập số phút lại 59
if (m === -1){
    h -= 1;
    m = 59;
}

// Nếu số giờ = -1 tức là đã hết giờ, lúc này:
//  - Dừng chương trình
if (h === -1){
    // clearTimeout(timeout);

    alert('Hết giờ');
    // start()
    window.location.reload();   //reload lại page sau khi click OK
    // return false;
      //sẽ dừng lại ko chạy tiếp nưa
    //   window.location.reload();
}

/*BƯỚC 1: HIỂN THỊ ĐỒNG HỒ*/
document.getElementById('h').innerText = h.toString();  
document.getElementById('m').innerText = m.toString();
document.getElementById('s').innerText = s.toString();
// test x/x/

// document.getElementById('h').innerText = h.toString();
//  document.getElementById('m').innerText = m.toString();

// document.getElementById('m').innerText = m;
// document.getElementById('s').innerText = s;
/*BƯỚC 1: GIẢM PHÚT XUỐNG 1 GIÂY VÀ GỌI LẠI SAU 1 GIÂY */
let timeout = setTimeout(function(){
    s--; 
    getStart();
    // s--;
}, 1000);
}






function stop(){
    clearTimeout(timeout);
    
}


//setTimeout(callback function, delay in milliseconds)

