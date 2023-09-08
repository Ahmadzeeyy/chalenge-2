const dataPenjualanPakAdi = [
    {
    namaProduct : "Sepatu Futsan Nike Vapor Academy 8",
    hargaSatuan : 760000,
    kategori : "Sepatu Sport",
    totalTerjual : 90,
}, 
{
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
},
{
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
},
{
    namaProduct: "Sepatu Warrior rainbow ToscaCorduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
},
]

function hitungTotalPenjualan (dataPenjualan){
    if (typeof dataPenjualan != "object") {
        return "Eror: Invalid data type"
    } else {
        let sum = 0;
        dataPenjualan.map((items)=>{
            const penjualanPerItems = items.totalTerjual
            sum += penjualanPerItems;
        }); 
    return sum;
}
}
console.log(hitungTotalPenjualan(dataPenjualanPakAdi));
