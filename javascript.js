function menghitungLuas(){
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
function menghitungKeliling(){
    let jenisBangun = (prompt('silahkan pilih mau menghitung Keliling apa: \n cth: Persegi, Persegi panjang, segitiga, lingkaran')).toLowerCase()
    if (jenisBangun == 'persegi' || jenisBangun == 'keliling persegi') {
        let sisi = prompt('Panjang sisi cth. 12 *tanpa satuan* :') 
        let kelilingPersegi = sisi * 4
        alert('Keliling dari Persegi yang sisi nya '+ sisi+' adalah '+ kelilingPersegi)
    }else if(jenisBangun == 'persegi panjang' || jenisBangun == 'keliling persegi panjang'){
        let panjang = prompt('Panjang persegi panjang cth. 12 *tanpa satuan* :')
        let lebar = prompt('Lebar persegi panjang cth. 12 *tanpa satuan* :')
        let kelilingPersegiPanjang = panjang * 2 + lebar * 2
        alert('Keliling persegi panjang dengan panjang '+panjang+' dan lebar '+lebar+' adalah :'+kelilingPersegiPanjang)
    }else if(jenisBangun == 'segitiga' || jenisBangun == 'keliling segitiga'){
        let sisi1 = parseInt(prompt('Panjang Sisi 1 segitiga cth. 12 *tanpa satuan* :'))
        let sisi2 = parseInt(prompt('panjang Sisi 2 segitiga cth. 12 *tanpa satuan* :'))
        let sisi3 = parseInt(prompt('Panjang Sisi 3 segitiga cth. 12 *tanpa satuan* :'))
        let kelilingSegitiga = sisi1 + sisi2 + sisi3
        alert('Keliling segitiga dengan panjang sisi '+sisi1+', '+sisi2+', dan '+sisi3+' adalah :'+kelilingSegitiga)
    }else if(jenisBangun == 'lingkaran' || jenisBangun == 'keliling lingkaran'){
        let diameter = prompt('Panjang Diameter lingkaran cth. 12 *tanpa satuan* :')
        let kelilingLingkaran = 22 / 7 * diameter
        alert('Keliling lingkaran dengan Diameter '+diameter+' adalah :'+kelilingLingkaran)
    }else {
        alert('Pilihan yang kamu pilih tidak ada didalam daftar!')
    }
}
function menghitungVolume(){
    let jenisBangun = (prompt('silahkan pilih mau menghitung Keliling apa: \n cth: kubus, balok, kerucut, bola, limas,tabung')).toLowerCase()
    if (jenisBangun == 'kubus' || jenisBangun == 'volume kubus') {
        let sisi = prompt('Panjang sisi cth. 12 *tanpa satuan* :') 
        let volumeKubus = sisi * sisi * sisi
        alert('Volume dari Kubus yang sisi nya '+ sisi+' adalah '+ volumeKubus)
    }else if(jenisBangun == 'balok' || jenisBangun == 'volume balok'){
        let panjang = prompt('Panjang balok cth. 12 *tanpa satuan* :')
        let lebar = prompt('Lebar balok cth. 12 *tanpa satuan* :')
        let tinggi = prompt('tinggi balok cth. 12 *tanpa satuan* :')
        let volumeBalok = panjang * lebar * tinggi
        alert('volume balok dengan panjang '+panjang+', lebar '+lebar+', dan tinggi '+tinggi+' adalah : '+volumeBalok)
    }else if(jenisBangun == 'kerucut' || jenisBangun == 'volume kerucut'){
        let jariJari = parseInt(prompt('Panjang jari-jari kerucut cth. 12 *tanpa satuan* :'))
        let tinggi = parseInt(prompt('Tinggi kerucut cth. 12 *tanpa satuan* :'))
        let volumeKerucut =1/3 * 22/7 * jariJari * jariJari * tinggi
        alert('volume Kerucut dengan panjang jari-jari '+jariJari+', dan tinggi '+tinggi+'\n adalah : '+volumeKerucut+'\n jika dibulatkan menjadi : '+volumeKerucut.toFixed(0))
    }else if(jenisBangun == 'bola' || jenisBangun == 'volume bola'){
        let jariJari = prompt('Panjang jari-jari bola cth. 12 *tanpa satuan* :')
        let volumeBola = 4/3 * 22/7 * jariJari * jariJari * jariJari
        alert('volume bola dengan panjang jari-jari '+jariJari+' adalah : '+volumeBola)
    }else if(jenisBangun == 'tabung' || jenisBangun == 'volume tabung'){
        let jarijari = prompt('Panjang jari-jari tabung cth. 12 *tanpa satuan* :')
        let tinggi = prompt('Tinggi tabung cth. 12 *tanpa satuan* :')
        let volumeTabung = 22/7 * jarijari * jarijari * tinggi
        alert('volume tabung dengan jari-jari '+jarijari+' dan tinggi '+tinggi+' adalah : '+volumeTabung)
    }else {
        alert('Pilihan yang kamu pilih tidak ada didalam daftar!')
    }
}