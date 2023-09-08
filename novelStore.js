// nomer 5 ini mas
const dataPenjualanNovel = [
    {
        idProduct : "BOOK002421",
        namaProduct: "Pulang - Pergi",
        Penulis : "Tere Liye",
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok : 17,
    },
    {
        idProduct : "BOOK002351",
        namaProduct: "Selamat Tinggal",
        Penulis : "Tere Liye",
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok : 20,
    },
    {
        idProduct : "BOOK002941",
        namaProduct: "Garis Waktu",
        Penulis : "Fiesa Besari",
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok : 5,
    },
    {
        idProduct : "BOOK002941",
        namaProduct: "Laskar Pelangi",
        Penulis : "Andrea Hirata",
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok : 56,
    },
]; 
function getInfoPenjualan(dataPenjualan){
    if(typeof dataPenjualan != "object"){
        return "Eror: Invalid data type"
    }
    else{
        let totalKeuntungann = 0 ;
        let totalModal = 0;
        let keuntungan = 0 ;

        const totalTerjualPerItems = dataPenjualan.map((items)=>{
            return items.totalTerjual;
        });
        const modalPerProduct = dataPenjualan.map((items) => {
            return (items.totalTerjual + items.sisaStok)* items.hargaBeli 
        })
        const keuntunganPerproduct = dataPenjualan.map((items) => {
            return (items.totalTerjual + items.sisaStok)* items.hargaJual
        })
        const bukuTerlaris = dataPenjualan.filter((items) => { // mencari buku terlaris dengan menggunakan filter berdasarkan max penjualan buku per items nya 

            return items.totalTerjual == Math.max(...totalTerjualPerItems)
        })

        const namaPenulis = dataPenjualan.map((items)=>{
            return items.Penulis
        })
        const penulisSet = new Set(namaPenulis)

        for(i =0; i < modalPerProduct.length; i++){
            keuntungan = keuntunganPerproduct[i] - modalPerProduct[i];
            totalKeuntungann +=  keuntungan 
            totalModal += modalPerProduct[i]
        }
        const penulisTerlaris = {};

        dataPenjualanNovel.forEach((produk) => {
            const penulis = produk.Penulis;
            const totalTerjual = produk.totalTerjual;

            if (penulisTerlaris[penulis]) {
                penulisTerlaris[penulis] += totalTerjual;
            } else {
                penulisTerlaris[penulis] = totalTerjual;
            }
        });

        const nilaiPenjualan = Object.values(penulisTerlaris);
        const namapenuliss = Object.keys(penulisTerlaris);
        const indexPenuisTerlaris = nilaiPenjualan.indexOf(Math.max(...nilaiPenjualan))
        const namaPenulisTerlaris = namapenuliss[indexPenuisTerlaris]
        let presentaseKeuntungan = (totalKeuntungann / totalModal) * 100;

        const result = {
            totalKeuntungan: totalKeuntungann.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            totalModal: totalModal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            pesentaseKeuntungan: `${presentaseKeuntungan}%`,
            bukuterlaris : bukuTerlaris[0].namaProduct,
            penulisterlaris : namaPenulisTerlaris
        }

        return result ;
    }
}
console.log(getInfoPenjualan(dataPenjualanNovel))