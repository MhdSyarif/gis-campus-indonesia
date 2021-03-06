
//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
var addressPoints = [
[5.5724768,95.3617153, "Universitas Syiah Kuala, Banda Aceh <br/> www.unsyiah.ac.id"],
[5.1824175,97.1449616, "Universitas Malikussaleh, Lhokseumawae <br/> www.unimal.ac.id"],
[4.4577837,97.9692904, "Universitas Samudra, Kota Langsa <br/> https://unsam.ac.id"],
[4.1449267,96.1965271, "Universitas Teuku Umar, Meulaboh <br/> http://utu.ac.id"],
[3.567331,98.645075, "Universitas Sumatera Utara (USU), Medan <br/> www.usu.ac.id"],
[3.6068038,98.7141431, "Universitas Negeri Medan (Unimed), Medan <br/> https://www.unimed.ac.id"],
[3.565035,98.6553008, "Politeknik Negeri Medan, Medan <br/> www.polmed.ac.id"],
[-0.914559,100.4595468, "Universitas Andalas, Padang <br/>www.unand.ac.id"],
[-0.8987151,100.3534745, "Universitas Negeri Padang, Padang <br/>www.unp.ac.id"],
[-0.9137793,100.4662863, "Politeknik Negeri Padang, Padang <br/>www.polinpdg.ac.id"],
[-0.1698506,100.6645141, "Politeknik Pertanian Negeri Payakumbuh, Payakumbuh <br/>www.politanipyk.ac.id"],
[-0.458541,100.403724, "Sekolah Tinggi Seni Indonesia Padang Panjang (STSI), Padang Panjang <br/>http://www.isi-padangpanjang.ac.id"],
[0.476395,101.380647, "Universitas Riau, Pekanbaru <br/> http://unri.ac.id"],
[0.3437554,101.0455083, "Politeknik Kampar, Bangkinang <br/> http://poltek-kampar.ac.id"],
[0.4635031,101.3546557, "Universitas Islam Negeri Sultan Syarif Kasim Riau <br/> http://uin-suska.ac.id"],
[1.4601782,102.1511398, "Politeknik Negeri Bengkalis, Bengkalis <br/>polbeng.ac.id"],
[0.4478374,101.4509742, "Universitas Islam Riau, Pekanbaru <br/> http://uir.ac.id"],
[0.5699754,101.4235113, "Politeknik Caltex Riau, Pekanbaru <br/> http://pcr.ac.id"],
[0.8704442,104.4757331, "Universitas Maritim Raja Ali Haji, Tanjungpinang <br/> http://umrah.ac.id"],
[1.118673,104.048442, "Politeknik Negeri Batam, Batam <br/> www.polibatam.ac.id"],
[-1.6115412,103.5200459, "Universitas Jambi, Jambi <br/> www.unja.ac.id"],
[-3.7599985,102.2724972, "Universitas Bengkulu, Bengkulu <br/> www.unib.ac.id"],
[-2.9846917,104.7335316, "Universitas Sriwijaya, Palembang <br/> www.unsri.ac.id"],
[-2.8954258,104.3802465, "Akademi Komunitas Negeri Banyuasin, Banyuasin <br/> aknbanyuasin.web.id"],
[-2.9832735,104.7331937, "Politeknik Negeri Sriwijaya, Palembang <br/> www.polsri.ac.id"],
[-5.3647252,105.2429295, "Universitas Lampung, Bandar Lampung <br/> www.unila.ac.id"],
[-5.3581794,105.3148043, "Institut Teknologi Sumatera, Bandar Lampung <br/> www.itera.ac.id"],
[-5.3579355,105.232846, "Politeknik Negeri Lampung, Bandar Lampung <br/> www.polinela.ac.id"],
[-2.0687198,106.0768591, "Universitas Bangka Belitung, Bangka Belitung <br/> ubb.ac.id"],
[-1.8522619,106.1313522, "Politeknik Manufaktur Negeri, Bangka Belitung <br/> www.polman-babel.ac.id"],
[-6.1208316,106.1940069, "Universitas Sultan Ageng Tirtayasa, Serang <br/> www.untirta.ac.id"],
[-6.3392221,106.7580312, "Universitas Terbuka, Pondok Cabe <br/> www.ut.ac.id"],
[-6.3712765,106.8244475, "Politeknik Negeri Jakarta, Kota Depok <br/> www.pnj.ac.id"],
[-6.3455063,106.8261231, "Politeknik Negeri Media Kreatif, Jakarta <br/> polimedia.ac.id"],
[-6.194859,106.8782741, "Universitas Negeri Jakarta, Jakarta <br/> www.unj.ac.id"],
[-6.3712765,106.8244475, "Politeknik Negeri Jakarta, Kota Depok <br/> www.pnj.ac.id"],
[-6.3738804,106.8186522, "Universitas Indonesia, Kota Depok <br/> www.ui.ac.id"],
[-6.3157311,106.7935846, "Universitas Pembangunan Nasional Veteran, Jakarta <br/> www.upnvj.ac.id "],
[-6.560313,106.7256171, "Institut Pertanian Bogor, Bogor <br/> ipb.ac.id"],
[-6.9430811,107.6280823, "Institut Seni Budaya Indonesia Bandung, Bandung <br/> www.stsi-bdg.ac.id"],
[-6.8917836,107.6066787, "Institut Teknologi Bandung, Bandung <br/> www.itb.ac.id"],
[-6.8774731,107.6205301, "Politeknik Manufaktur Negeri Bandung, Bandung <br/> www.polman-bandung.ac.id"],
[-6.8711891,107.5735983, "Politeknik Negeri Bandung, Bandung <br/> www.polban.ac.id"],
[-6.4085247,108.2810709, "Politeknik Negeri Indramayu, Indramayu <br/> https://www.polindra.ac.id"],
[-6.5544111,107.759038, "Politeknik Negeri Subang, Subang <br/>www.polsub.ac.id"],
[-6.9261321,107.7746881, "Universitas Padjadjaran, Bandung <br/>www.unpad.ac.id"],
[-6.8610845,107.5943279, "Universitas Pendidikan Indonesia, Bandung <br/> www.upi.edu"],
[-7.3493148,108.2230427, "Universitas Siliwangi, Tasikmalaya <br/> unsil.ac.id"],
[-6.323042,107.306554, "Universitas Singaperbangsa Karawang, Karawang <br/> www.unsika.ac.id"],
[-7.557099,110.852329, "Institut Seni Indonesia Surakarta, Surakarta <br/> isi-ska.ac.id"],
[-7.7181548,109.0196232, "Politeknik Negeri Cilacap, Cilacap <br/> politeknikcilacap.ac.id"],
[-7.052326,110.435495, "Politeknik Negeri Semarang, Semarang <br/> www.polines.ac.id"],
[-7.0182793,110.3995844, "Politeknik Maritim Negeri Indonesia, Semarang <br/> polimarin.ac.id"],
[-7.0520829,110.4399777, "Universitas Diponegoro, Semarang <br/> www.undip.ac.id"],
[-7.4028731,109.2454779, "Universitas Jenderal Soedirman, Purwokerto <br/> www.unsoed.ac.id"],
[-7.050721,110.3924811, "Universitas Negeri Semarang, Semarang <br/> unnes.ac.id"],
[-7.5607481,110.8566134, "Universitas Sebelas Maret, Surakarta <br/> https://uns.ac.id"],
[-7.4599009,110.2167412, "Universitas Tidar, Magelang <br/> untidar.ac.id"],
[-7.8513179,110.3563104, "Institut Seni Indonesia Yogyakarta, Bantul <br/> isi.ac.id"],
[-7.7713847,110.3774998, "Universitas Gadjah Mada, Kota Yogyakarta <br/> ugm.ac.id"],
[-7.7758886,110.3840355, "Universitas Negeri Yogyakarta, Kota Yogyakarta <br/> https://uny.ac.id"],
[-7.7622183,110.4093431, "Universitas Pembangunan Nasional Veteran, Sleman <br/> www.upnyk.ac.id"],
[-8.202595,111.086912, "Akademi Komunitas Negeri Pacitan, Pacitan <br/> www.aknpacitan.ac.id"],
[-8.0981442,112.1787077, "Akademi Komunitas Negeri Putra Sang Fajar Blitar, Blitar <br/> www.akb.ac.id"],
[-7.2768149,112.792208, "Institut Teknologi Sepuluh Nopember, Surabaya <br/> its.ac.id"],
[-7.2767636,112.7949036, "Politeknik Elektronika Negeri Surabaya, Surabaya <br/> www.pens.ac.id"],
[-8.2957923,114.307758, "Politeknik Negeri Banyuwangi, Banyuwangi <br/> www.poliwangi.ac.id"],
[-8.1599532,113.7230815, "Politeknik Negeri Jember, Jember <br/> www.polije.ac.id"],
[-7.6476375,111.5265192, "Politeknik Negeri Madiun, Madiun <br/> www.pnm.ac.id"],
[-7.2155938,113.2724423, "Politeknik Negeri Madura, Sampang <br/> www.poltera.ac.id"],
[-7.9465253,112.6153954, "Politeknik Negeri Malang, Malang <br/> www.polinema.ac.id"],
[-7.277462,112.795796, "Politeknik Perkapalan Negeri Surabaya, Surabaya <br/> https://ppns.ac.id"],
[-7.2722831,112.758034, "Universitas Airlangga, Surabaya <br/> www.unair.ac.id"],
[-7.9524401,112.6129181, "Universitas Brawijaya, Malang <br/> www.ub.ac.id"],
[-8.1635716,113.7142301, "Universitas Jember, Jember <br/> https://unej.ac.id"],
[-7.962774,112.618478, "Universitas Negeri Malang, Malang <br/> www.um.ac.id"],
[-7.3152633,112.7269769, "Universitas Negeri Surabaya, Surabaya <br/> https://www.unesa.ac.id"],
[-7.3332741,112.7899651, "Universitas Pembangunan Nasional Veteran Jawa Timur, Surabaya <br/>www.upnjatim.ac.id"],
[-7.1279666,112.723026, "Universitas Trunojoyo Madura, Bangkalan, Madura<br/> trunojoyo.ac.id"],
[-8.6535743,115.2326286, "Institut Seni Indonesia Denpasar, Denpasar <br/> www.isi-dps.ac.id"],
[-8.7990608,115.1615675, "Politeknik Negeri Bali, Badung <br/> www.pnb.ac.id"],
[-8.7982727,115.1723921, "Universitas Udayana, Denpasar <br/>https://www.unud.ac.id"],
[-8.1165895,115.0878657, "Universitas Pendidikan Ganesha, Singaraja <br/>undiksha.ac.id"],
[-8.5869073,116.0921869, "Universitas Mataram, Mataram <br/>unram.ac.id"],
[-10.1518822,123.6675398, "Politeknik Negeri Kupang, Kupang <br/>www.pnk.ac.id"],
[-10.1520807,123.6705879, "Politeknik Pertanian Negeri Kupang, Kupang <br/>www.politanikoe.ac.id"],
[-10.1544464,123.6589219, "Universitas Nusa Cendana, Kupang <br/>www.undana.ac.id"],
[-9.4461832,124.4762135, "Universitas Timor (Unimor), Kefamemanu <br/>www.unimor.ac.id"],
[-1.8174671,109.9908645, "Politeknik Negeri Ketapang, Ketapang <br/>polinka.ac.id"],
[-0.053918,109.347065, "Politeknik Negeri Pontianak, Pontianak <br/>www.polnep.ac.id"],
[1.3822633,109.3175486, "Politeknik Negeri Sambas, Sambas <br/>www.poltesa.ac.id"],
[-0.0597309,109.3457504, "Universitas Tanjungpura, Pontianak <br/>www.untan.ac.id"],
[-2.2126852,113.9038657, "Universitas Palangka Raya, Palangka Raya <br/>www.upr.ac.id"],
[-3.2956916,114.5820675, "Politeknik Negeri Banjarmasin, Banjarmasin <br/>https://www.poliban.ac.id"],
[-3.7538781,114.7673332, "Politeknik Negeri Tanah Laut, Pelaihari <br/>https://www.politala.ac.id"],
[-3.2975189,114.5864305, "Universitas Lambung Mangkurat, Banjarmasin <br/>unlam.ac.id"],
[-1.1504268,116.8608989, "Institut Teknologi Kalimantan, Balikpapan <br/>https://www.itk.ac.id"],
[-1.2020231,116.8849174, "Politeknik Negeri Balikpapan, Balikpapan <br/>www.poltekba.ac.id"],
[-0.5339664,117.1244931, "Politeknik Negeri Samarinda, Samarinda <br/>www.polnes.ac.id"],
[-0.5360786,117.123547, "Politeknik Pertanian Negeri Samarinda, Samarinda <br/politanisamarinda.ac.id"],
[-0.4697647,117.1541237, "Universitas Mulawarman, Samarinda <br/>www.unmul.ac.id"],
[3.3035806,117.6474437, "Universitas Borneo Tarakan, Tarakan <br/>www.borneo.ac.id"],
[-3.5375406,118.9906476, "Universitas Sulawesi Barat, Majene <br/>https://unsulbar.ac.id"],
[1.5189154,124.8861073, "Politeknik Negeri Manado, Manado <br/>www.polimdo.ac.id"],
[3.6313921,125.4699213, "Politeknik Negeri Nusa Utara, Tahuna <br/>polnustarkmh.ac.id"],
[1.2724349,124.8843939, "Universitas Negeri Manado, Manado <br/>www.unima.ac.id"],
[1.4592105,124.8292757, "Universitas Sam Ratulangi, Manado <br/>https://www.unsrat.ac.id"],
[0.556408,123.063603, "Universitas Negeri Gorontalo, Gorontalo <br/>www.ung.ac.id"],
[-0.8364322,119.8936937, "Universitas Tadulako, Palu <br/>untad.ac.id"],
[-5.1419459,119.4922007, "Politeknik Negeri Media Kreatif PSDD Makassar, Makassar <br/>polimedia.ac.id"],
[-5.1300777,119.4824767, "Politeknik Negeri Ujung Pandang, Makassar <br/>www.poliupg.ac.id"],
[-4.5694309,119.5994603, "Politeknik Pertanian Negeri Pangkajene Kepulauan, Pangkajene Kepulauan <br/>www.polipangkep.ac.id"],
[-5.13241,119.488, "Universitas Hasanuddin, Makassar <br/>unhas.ac.id"],
[-5.1585949,119.4308019, "Universitas Negeri Makassar, Kota Makassar <br/>https://www.unm.ac.id"],
[-4.0728822,121.6247212, "Universitas 19 November, Kolaka <br/>www.usn.ac.id"],
[-4.0086915,122.5227249, "Universitas Haluoleo, Kendari <br/>www.uho.ac.id"],
[-3.6591347,128.181049, "Politeknik Negeri Ambon, Ambon <br/>www.polnam.ac.id"],
[-5.71498,132.7463289, "Politeknik Perikanan Negeri Tual, Tual <br/>www.polikant.ac.id"],
[-3.6545291,128.1957293, "Universitas Pattimura, Ambon <br/>unpatti.ac.id"],
[0.8265431,127.3824667, "Universitas Khairun, Ternate <br/>unkhair.ac.id"],
[-2.5945902,140.6207224, "Institut Seni Budaya Indonesia Tanah Papua, Jayapura <br/>www.isbi-tanahpapua.ac.id"],
[-2.6095365,140.6596853, "Universitas Cendrawasih, Jayapura <br/>unicen.ac.id"],
[-8.5318352,140.4170948, "Universitas Musamus Merauke, Merauke <br/>www.unmus.ac.id"],
[-2.9203406,132.2830782, "Politeknik Negeri Fakfak, Fakfak <br/>www.polinef.ac.id"],
[-0.834368,134.070162, "Universitas Papua, Manokwari <br/>www.unipa.ac.id"]
];
