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
  FlatList,
  TouchableOpacity,
  Platform,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

    let marmara = [
{
  sehir:"İstanbul",
  plaka:34,
  nufus:"15.713.258",
  bolge:"marmara"
},
{
  sehir:"Bursa",
  plaka:16,
  nufus:"3.096.868",
  bolge:"marmara"
},
{
  sehir:"Kocaeli",
  plaka:41,
  nufus:"1.953.035",
  bolge:"marmara"
},
{
  sehir:"Balıkesir",
  plaka:10,
  nufus:"1.233.739",
  bolge:"marmara"
},
{
  sehir:"Çanakkale",
  plaka:17,
  nufus:"546.223",
  bolge:"marmara"
},
{
  sehir:"Sakarya",
  plaka:54,
  nufus:"1.042.521",
  bolge:"marmara"
},
{
  sehir:"Tekirdağ",
  plaka:59,
  nufus:"1.081.797",
  bolge:"marmara"
},
{
  sehir:"Edirne",
  plaka:22,
  nufus:"414.938",
  bolge:"marmara"
},
{
  sehir:"Kırklareli",
  plaka:39,
  nufus:"361.836",
  bolge:"marmara"
},
{
  sehir:"Yalova",
  plaka:77,
  nufus:"270.976",
  bolge:"marmara"
},
{
  sehir:"Bilecik",
  plaka:11,
  nufus:"219.427",
  bolge:"marmara"
}
];

let ege = [
{
  sehir:"İzmir",
  plaka:35,
  nufus:"4.367.251",
  bolge:"ege"
},
{
  sehir:"Manisa",
  plaka:45,
  nufus:"1.440.611",
  bolge:"ege"
},
{
  sehir:"Aydın",
  plaka:9,
  nufus:"1.110.972",
  bolge:"ege"
},
{
  sehir:"Denizli",
  plaka:20,
  nufus:"1.037.208",
  bolge:"ege"
},
{
  sehir:"Muğla",
  plaka:48,
  nufus:"983.142",
  bolge:"ege"
},
{
  sehir:"Afyonkarahisar",
  plaka:3,
  nufus:"729.483",
  bolge:"ege"
},
{
  sehir:"Kütahya",
  plaka:43,
  nufus:"579.257",
  bolge:"ege"
},
{
  sehir:"Uşak",
  plaka:64,
  nufus:"370.509",
  bolge:"ege"
}
];

let icanadolu = [
{
  sehir:"Ankara",
  plaka:6,
  nufus:"5.639.076",
  bolge:"icanadolu"
},
{
  sehir:"Konya",
  plaka:42,
  nufus:"2.232.374",
  bolge:"icanadolu"
},
{
  sehir:"Kayseri",
  plaka:38,
  nufus:"1.407.409",
  bolge:"icanadolu"
},
{
  sehir:"Eskişehir",
  plaka:26,
  nufus:"887.475",
  bolge:"icanadolu"
},
{
  sehir:"Sivas",
  plaka:58,
  nufus:"638.956",
  bolge:"icanadolu"
},
{
  sehir:"Yozgat",
  plaka:66,
  nufus:"421.200",
  bolge:"icanadolu"
},
{
  sehir:"Aksaray",
  plaka:68,
  nufus:"416.367",
  bolge:"icanadolu"
},
{
  sehir:"Niğde",
  plaka:51,
  nufus:"362.861",
  bolge:"icanadolu"
},
{
  sehir:"Nevşehir",
  plaka:50,
  nufus:"303.010",
  bolge:"icanadolu"
},
{
  sehir:"Kırıkkale",
  plaka:71,
  nufus:"283.017",
  bolge:"icanadolu"
},
{
  sehir:"Karaman",
  plaka:70,
  nufus:"253.279",
  bolge:"icanadolu"
},
{
  sehir:"Kırşehir",
  plaka:40,
  nufus:"242.938",
  bolge:"icanadolu"
},
{
  sehir:"Çankırı",
  plaka:18,
  nufus:"195.789",
  bolge:"icanadolu"
}
];

let akdeniz = [
{
  sehir:"Antalya",
  plaka:7,
  nufus:"2.511.700",
  bolge:"akdeniz"
},
{
  sehir:"Adana",
  plaka:1,
  nufus:"2.237.940",
  bolge:"akdeniz"
},
{
  sehir:"Mersin",
  plaka:33,
  nufus:"1.840.425",
  bolge:"akdeniz"
},
{
  sehir:"Hatay",
  plaka:31,
  nufus:"1.628.894",
  bolge:"akdeniz"
},
{
  sehir:"Kahramanmaraş",
  plaka:46,
  nufus:"1.154.102",
  bolge:"akdeniz"
},
{
  sehir:"Osmaniye",
  plaka:80,
  nufus:"538.759",
  bolge:"akdeniz"
},
{
  sehir:"Isparta",
  plaka:32,
  nufus:"444.914",
  bolge:"akdeniz"
},
{
  sehir:"Burdur",
  plaka:15,
  nufus:"270.796",
  bolge:"akdeniz"
}
];

let doguanadolu = [
{
  sehir:"Malatya",
  plaka:44,
  nufus:"800.165",
  bolge:"doguanadolu"
},
{
  sehir:"Van",
  plaka:65,
  nufus:"1.136.757",
  bolge:"doguanadolu"
},
{
  sehir:"Erzurum",
  plaka:25,
  nufus:"762.062",
  bolge:"doguanadolu"
},
{
  sehir:"Elazığ",
  plaka:23,
  nufus:"591.098",
  bolge:"doguanadolu"
},
{
  sehir:"Ağrı",
  plaka:4,
  nufus:"536.199",
  bolge:"doguanadolu"
},
{
  sehir:"Şırnak",
  plaka:73,
  nufus:"529.615",
  bolge:"doguanadolu"
},
{
  sehir:"Muş",
  plaka:49,
  nufus:"408.809",
  bolge:"doguanadolu"
},
{
  sehir:"Bitlis",
  plaka:13,
  nufus:"348.115",
  bolge:"doguanadolu"
},
{
  sehir:"Kars",
  plaka:36,
  nufus:"285.410",
  bolge:"doguanadolu"
},
{
  sehir:"Bingöl",
  plaka:12,
  nufus:"279.812",
  bolge:"doguanadolu"
},
{
  sehir:"Erzincan",
  plaka:24,
  nufus:"234.747",
  bolge:"doguanadolu"
},
{
  sehir:"Iğdır",
  plaka:76,
  nufus:"199.442",
  bolge:"doguanadolu"
},
{
  sehir:"Hakkari",
  plaka:30,
  nufus:"280.991",
  bolge:"doguanadolu"
},
{
  sehir:"Ardahan",
  plaka:75,
  nufus:"97.319",
  bolge:"doguanadolu"
},
{
  sehir:"Tunceli",
  plaka:62,
  nufus:"84.660",
  bolge:"doguanadolu"
}
];

let guneydoguanadolu = [
{
  sehir:"Şanlıurfa",
  plaka:63,
  nufus:"2.073.614",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Gaziantep",
  plaka:27,
  nufus:"2.069.364",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Diyarbakır",
  plaka:21,
  nufus:"1.756.353",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Mardin",
  plaka:47,
  nufus:"838.778",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Adıyaman",
  plaka:2,
  nufus:"626.465",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Batman",
  plaka:72,
  nufus:"608.659",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Siirt",
  plaka:56,
  nufus:"330.280",
  bolge:"guneydoguanadolu"
},
{
  sehir:"Kilis",
  plaka:79,
  nufus:"142.490",
  bolge:"guneydoguanadolu"
}
];


let karadeniz = [
  {
    sehir:"Samsun",
    plaka:55,
    nufus:"1.348.542",
    bolge:"karadeniz"
  },
  {
    sehir:"Trabzon",
    plaka:61,
    nufus:"808.974",
    bolge:"karadeniz"
  },
  {
    sehir:"Ordu",
    plaka:52,
    nufus:"754.198",
    bolge:"karadeniz"
  },
  {
    sehir:"Tokat",
    plaka:60,
    nufus:"612.747",
    bolge:"karadeniz"
  },
  {
    sehir:"Zonguldak",
    plaka:67,
    nufus:"596.053",
    bolge:"karadeniz"
  },
  {
    sehir:"Çorum",
    plaka:19,
    nufus:"530.864",
    bolge:"karadeniz"
  },
  {
    sehir:"Giresun",
    plaka:28,
    nufus:"448.400",
    bolge:"karadeniz"
  },
  {
    sehir:"Düzce",
    plaka:81,
    nufus:"392.166",
    bolge:"karadeniz"
  },
  {
    sehir:"Kastamonu",
    plaka:37,
    nufus:"379.405",
    bolge:"karadeniz"
  },
  {
    sehir:"Rize",
    plaka:53,
    nufus:"343.212",
    bolge:"karadeniz"
  },
  {
    sehir:"Amasya",
    plaka:5,
    nufus:"337.800",
    bolge:"karadeniz"
  },
  {
    sehir:"Bolu",
    plaka:14,
    nufus:"316.126",
    bolge:"karadeniz"
  },
  {
    sehir:"Karabük",
    plaka:78,
    nufus:"248.458",
    bolge:"karadeniz"
  },
  {
    sehir:"Sinop",
    plaka:57,
    nufus:"218.243",
    bolge:"karadeniz"
  },
  {
    sehir:"Bartın",
    plaka:74,
    nufus:"198.249",
    bolge:"karadeniz"
  },
  {
    sehir:"Artvin",
    plaka:8,
    nufus:"170.875",
    bolge:"karadeniz"
  },
  {
    sehir:"Gümüşhane",
    plaka:29,
    nufus:"164.521",
    bolge:"karadeniz"
  },
  {
    sehir:"Bayburt",
    plaka:69,
    nufus:"84.843",
    bolge:"karadeniz"
  }
];



let getirilenListe = [];

function MarmaraGetir() {
  getirilenListe = marmara;
}
function EgeGetir() {
  getirilenListe = ege;
}
function IcAnadoluGetir() {
  getirilenListe = icanadolu;
}
function KaradenizGetir() {
  getirilenListe = karadeniz;
}
function AkdenizGetir() {
  getirilenListe = akdeniz;
}
function GuneyDoguAnadoluGetir() {
  getirilenListe = guneydoguanadolu;
}

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { liste: getirilenListe };
}

DoguAnadoluGetir() {
  this.setState({liste:doguanadolu});
}
EgeGetir() {
  this.setState({liste:ege});
}
AkdenizGetir() {
  this.setState({liste:akdeniz});
}
KaradenizGetir() {
  this.setState({liste:karadeniz});
}
IcAnadoluGetir() {
  this.setState({liste:icanadolu});
}
GuneyDoguAnadoluGetir() {
  this.setState({liste:guneydoguanadolu});
}
MarmaraGetir() {
  this.setState({liste:marmara});
}

render(){

return (
  <>
    <SafeAreaView style={styles.safearea}>
      <View style={styles.ust}>
        <TouchableOpacity onPress={() => this.MarmaraGetir()}>
          <Text style={styles.bolgeler}>Marmara Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.EgeGetir()}>
          <Text style={styles.bolgeler}>Ege Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.AkdenizGetir()}>
          <Text style={styles.bolgeler}>Akdeniz Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.IcAnadoluGetir()}>
          <Text style={styles.bolgeler}>İç Anadolu Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.DoguAnadoluGetir()}>
          <Text style={styles.bolgeler}>Doğu Anadolu Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.GuneyDoguAnadoluGetir()}>
          <Text style={styles.bolgeler}>Güney Doğu Anadolu Bölgesi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.KaradenizGetir()}>
          <Text style={styles.bolgeler}>Karadeniz Bölgesi</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.alt}>
        <FlatList
          data={this.state.liste}
          renderItem={({item}) => (
            <ScrollView>
            <View>
              <Text style={styles.listelenmisyazilar}>{item.plaka} - {item.sehir} - {item.nufus}</Text>
            </View>
            </ScrollView>
            )}
        />
      </View>
    </SafeAreaView>
  </>
);
}
};

const styles = StyleSheet.create({
  bolgeler:{
    fontSize: 45,
    fontWeight: "bold"
  },
  listelenmisyazilar:{
    fontSize: 40,
    fontWeight: "bold"
  },
  safearea:{
    flex:1
  },
  ust:{
    flex:1,
    borderWidth:1,
    backgroundColor: 'white',
  },
  alt:{
    flex:1,
    borderWidth:1,
    backgroundColor: 'white'
  }
});

export default App;
