/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,



} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';
const App: () => React$Node = () => {
  return (
    <SafeAreaView>
    
       <ScrollView>
         <NewsItem type='spor' title='Medipol Başakşehir Şampiyonlar Ligine Veda Etti' description='Temsilcimiz Medipol Başakşehir şampiyonlar ligi maçınca Almanya temsilcisi Rb Leipzig takımına 3-4 mağlup oldu.İrfancan Kahvecinin yaptığı hattrick yenilgiye engel olamadı.'/>
         <NewsItem type='spor' title='UEFA Avrupa Liginde haftanın oyuncusu Burak Yılmaz' description='Lille takımının Sparta Prag takımını 2-1 yendiği maçta 4 dakikada 2 gol atarak takımına galibiyeti ve turu getiren Burak Yılmaz haftanın oyuncusu seçildi.'/>
         <NewsItem type='spor' title='Sivasspor avrupada mağlup oldu' description='Temsilcimiz Sivasspor kendi evinde  Villarreal takımını ağırladı 75. dakikada öne geçen  Villarreal maçı 1-0 bitirmeyi başardı.'/>
         <NewsItem type='ekonomi' title='Sendikalardan ortak asgari ücret açıklaması' description='2021 yılında geçerli olacak asgari ücretin pandemi koşullarında yaşanan iş ve gelir kaybı dikkate alınarak insan onuruna yaraşır bir geçim ücreti olarak tespit edilmesi ortak düşüncemizdir denildi.'/>
         <NewsItem type='ekonomi' title='Sorunlu kredilerde öteleme görüşülüyor' description='Bankacılık Düzenleme ve Denetleme Kurumu bu yıl sonunda bitecek olan sorunlu kredilerin takibe atılma süresini uzatan düzenlemeyi altı ay daha uzatmak için görüşüyor.'/>
         <NewsItem type='ekonomi' title='Dünya gıda fiyatları endeksi 6 yılın zirvesinde' description='Kasım ayında dünya gıda fiyatları endeksi son 6 yılın en yüksek seviyesine ulaştı Bitkisel yağ fiyatları ise palm yağı fiyatlarındaki yükselişin etkisiyle aylık yüzde 14.5 artışla endeksin genelindeki yükselişe öncülük etti.'/>
         <NewsItem type='dünya' title='Amerikalılar Kovid-19 salgınına rağmen Şükran Günü seyahatinden geri kalmadı' description='ABDde geçen hafta perşembe günü kutlanan Şükran Günü tatilinde Amerikalılar yeni tip koronavirüs salgını uyarılara rağmen büyük oranda seyahat etti.'/>
         <NewsItem type='dünya' title='İspanyada Kovid-19 salgınından son 24 saatte 214 kişi öldü' description='İspanyada yeni tip koronavirüs salgınında son 24 saatte 214 kişinin hayatını kaybettiği ve 8 bin 745 yeni vaka tespit edildiği açıklandı.'/>
         <NewsItem type='dünya' title='Avusturya Başbakanı vaka artışında yabancıları suçladı' description='Avusturyada Başbakan Sebastian Kurz yabancı uyruklu vatandaşların yaz tatili dönüşünde yeni tip koronavirüsü memleketlerinden ülkeye taşıdıkları yönündeki ifadeleri iktidardaki Halk Partisi ve Yeşiller Partisi koalisyonunda gerginliğe yol açtı.'/>
         <NewsItem type='siyaset' title='TBMM Başkanı Mustafa Şentop Geniş kapsamlı toplantılar yapacağız' description='TBMM Başkanı Mustafa Şentop 1921 Anayasasının yüzüncü yılı olarak Ocak 2021 sonunda yine bir toplantı yapacağız İstiklal Marşının kabulünün yüzüncü yılı münasebetiyle 12 Martta geniş kapsamlı toplantılar yapacağız bu şekilde 2023 e kadar bu çalışmalar devam edecek dedi.'/>
         <NewsItem type='siyaset' title='Cumhurbaşkanı Yardımcısı Oktaydan Dünya Madenciler Günü mesajı' description='Cumhurbaşkanı Yardımcısı Fuat Oktay 4 Aralık Dünya Madenciler Günü dolayısıyla kutlama mesajı yayımladı.'/>
         <NewsItem type='siyaset' title='MHP Kozan İlçe Başkanı Atlıdan Fransaya tepki' description='Milliyetçi Hareket Partisi Kozan İlçe Başkanı Nihat Atlı yaptığı açıklamayla Fransayı eleştirdi.'/>
         <NewsItem type='bilim' title='Biyolojinin en büyük gizemlerinden biri yapay zeka sayesinde büyük oranda çözüldü' description='Bilim insanları biyolojinin en büyük gizemlerinden birinin yapay zeka sayesinde büyük oranda çözüldüğünü açıkladı.'/>
         <NewsItem type='bilim' title='Covid-19 Yeni tarama tekniği akciğerlerdeki hasarı gösterdi' description='İngilterede geliştirilen yeni bir manyetik görüntüleme tekniği ile Covid-19 teşhisi konan hastaların akciğerlerinde teşhisten üç ay sonra bile bazı anormallikler tespit edildi.'/>
         <NewsItem type='bilim' title='Hayvan öldürülmeden üretilen kültür eti dünyadaki ilk onayı Singapurdan aldı' description='Biyoraktörlerde, hayvan öldürülmeden üretilen et, dünyadaki ilk satış onayını Singapurdan aldı. Guardian gazetesinin haberine göre bu gelişme et endüstrisinde büyük bir dönüm noktası olarak kabul ediliyor.'/>
         </ScrollView>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bas:{
    fontSize: 35,
    fontWeight: "bold"
  }
});

export default App;
