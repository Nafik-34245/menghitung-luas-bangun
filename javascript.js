function mulaiMenghitung(){
    let jenisBangun = (prompt('silahkan pilih mau menghitung Luas apa: \n cth: Persegi, Persegi panjang, segitiga, lingkaran')).toLowerCase()
    if (jenisBangun == 'persegi' || jenisBangun == 'luas persegi') {
        let sisi = prompt('Panjang sisi cth. 12 *tanpa satuan* :')
        let luasPersegi = sisi * sisi
        alert('Luas dari Persegi yang sisi nya '+ sisi+' adalah '+ luasPersegi)
    }else if(jenisBangun == 'persegi panjang' || jenisBangun == 'luas persegi panjang'){
        let panjang = prompt('Panjang persegi panjang cth. 12 *tanpa satuan* :')
        let lebar = prompt('Lebar persegi panjang cth. 12 *tanpa satuan* :')
        let luasPersegiPanjang = panjang * lebar
        alert('Luas persegi panjang dengan panjang '+panjang+' dan lebar '+lebar+' adalah :'+luasPersegiPanjang)
    }else if(jenisBangun == 'segitiga' || jenisBangun == 'luas segitiga'){
        let tinggi = prompt('Tinggi segitiga cth. 12 *tanpa satuan* :')
        let alas = prompt('Alas segitiga cth. 12 *tanpa satuan* :')
        let luasSegitiga = tinggi * alas / 2
        alert('Luas segitiga dengan tinggi '+tinggi+' dan alas '+alas+' adalah :'+luasSegitiga)
    }else if(jenisBangun == 'lingkaran' || jenisBangun == 'luas lingkaran'){
        let jariJari = prompt('Panjang jari-jari lingkaran cth. 12 *tanpa satuan* :')
        // atau bisa pake rumus luasLingkaran = Math.PI * Math.pow(jariJari, 2)
        let luasLingkaran = 22 / 7 * jariJari * jariJari
        alert('Luas lingkaran dengan jari-jari '+jariJari+' adalah :'+luasLingkaran)
    }else {
        alert('Pilihan yang kamu pilih tidak ada didalam daftar!')
    }
}