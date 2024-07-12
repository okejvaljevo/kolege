let upravaNiz = [
	{ ref: "Uprava", ime: "David Maksimović", broj: "064/640-76-84", skr: "1684", email: "david@kej.rs", rodj: "30.07.1982.", priv: "/", sort: "uprava", z: false },
	{ ref: "Uprava", ime: "Filip Maksimović", broj: "064/640-76-76", skr: "1676", email: "kej@kej.rs", rodj: "04.12.1979.", priv: "/", sort: "uprava" },
	{ ref: "Uprava", ime: "Miodrag Maksimović", broj: "064/640-76-74", skr: "1674", email: "misa@kej.rs", rodj: "26.11.1953.", priv: "/", sort: "uprava" },
	{ ref: "Uprava", ime: "Časlav Maksimović", broj: "064/640-76-73", skr: "1673", email: "caslav@kej.rs", rodj: "07.04.1984.", priv: "/", sort: "uprava" },
	{ ref: "Uprava", ime: "Milovan Kovačević", broj: "064/643-94-94", skr: "1494", email: "milovan@kej.rs", rodj: "06.02.1985.", priv: "/", sort: "uprava" },
	{ ref: "Uprava", ime: "Sava Ranković", broj: "064/643-94-97", skr: "1497", email: "sava.rankovic@kej.rs", rodj: "10.10.1958.", priv: "/", sort: "uprava" },
]
let projektiNiz = [
	{ ref: "Direktori projekata", ime: "Miomir Todorović", broj: "064/643-95-76", skr: "1576", email: "miomir.todorovic@kej.rs", rodj: "28.05.1964.", priv: "/", sort: "projekti", z: false },
	{ ref: "Direktori projekata", ime: "Borivoj Jakovljević", broj: "064/643-94-98", skr: "1498", email: "borivoj.jakovljevic@kej.rs", rodj: "12.02.1984.", priv: "/", sort: "projekti" },
	{ ref: "Direktori projekata", ime: "Stanimir Vasiljevic", broj: "064/642-72-49", skr: "6249", email: "stanimir.vasiljevic@kej.rs", rodj: "13.05.1985.", priv: "/", sort: "projekti" },
	{ ref: "Direktori projekata", ime: "Dubravka Rabrenović", broj: "064/643-97-94", skr: "1794", email: "dubravka.rabrenovic@kej.rs", rodj: "27.04.1990.", priv: "/", sort: "projekti" },
	{ ref: "Direktori projekata", ime: "Slavoljub Marković", broj: "064/643-97-89", skr: "1789", email: "slavoljub.markovic@kej.rs", rodj: "27.12.1984.", priv: "060/684-6666", sort: "projekti" },
]
let gradilistaNiz = [
	{ ref: "Šefovi gradilišta", ime: "Vladan Đukanović", broj: "064/643-95-77", skr: "1577", email: "vladan.djukanovic@kej.rs", rodj: "09.09.1994.", priv: "/", sort: "gradilista", z: false },
	{ ref: "Šefovi gradilišta", ime: "Nenad Grujić", broj: "064/643-95-72", skr: "1572", email: "nenad.grujic@kej.rs", rodj: "17.01.1994.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Nikola Vujić", broj: "065/356-65-98", skr: "6598", email: "nikola.vujic@kej.rs", rodj: "24.04.1989.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Danilo Arsović", broj: "064/643-95-75", skr: "1575", email: "danilo.arsovic@kej.rs", rodj: "08.09.1990.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Mirko Ristivojević", broj: "064/643-97-97", skr: "1797", email: "mirko.ristivojevic@kej.rs", rodj: "24.10.1994.", priv: "061/22-85-092", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Zoran Dobrosavljević", broj: "064/643-97-77", skr: "1777", email: "/", rodj: "05.10.1996.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Nikola Nikolić", broj: "064/643-97-69", skr: "1769", email: "nikola.nikolic@kej.rs", rodj: "18.02.1990.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Saša Ristić", broj: "064/643-47-26", skr: "4726", email: "sasa.ristic@kej.rs", rodj: "27.02.1965.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Tamara Pavlović", broj: "064/643-47-37", skr: "4737", email: "tamara.pavlovic@kej.rs", rodj: "08.03.2001.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Nataša Petronijević", broj: "064/642-72-45", skr: "6245", email: "natasa.petronijevic@kej.rs", rodj: "12.11.1994.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Miroslav Milović", broj: "066/165-867", skr: "/", email: "/", rodj: "14.11.1961.", priv: "/", sort: "gradilista"},
	{ ref: "Šefovi gradilišta", ime: "Aleksandar Aleksić", broj: "064/643-94-96", skr: "1496", email: "aleksandar.aleksic@kej.rs", rodj: "30.09.1980.", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Saša Vukašinović", broj: "064/643-97-96", skr: "1796", email: "sasa.vukasinovic@kej.rs", rodj: "/", priv: "/", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Ivan Branković", broj: "064/643-97-92", skr: "1792", email: "ivan.brankovic@kej.rs", rodj: "/", priv: "065/343-50-12", sort: "gradilista" },
	{ ref: "Šefovi gradilišta", ime: "Aleksandra Milošević", broj: "064/643-95-80", skr: "1580", email: "aleksandra.milosevic@kej.rs", rodj: "/", priv: "/", sort: "gradilista" },
  { ref: "Šefovi gradilišta", ime: "Ivana Petrović", broj: "064/000-00-00", skr: "0000", email: "ivana.petrovic@kej.rs", rodj: "/", priv: "/", sort: "gradilista" },
]
let administracijaNiz = [
	{ ref: "Administracija", ime: "Dragana Branković", broj: "064/643-95-04", skr: "1504", email: "dragana.radosavljevic@kej.rs", rodj: "17.09.1985.", priv: "/", sort: "administracija", z: false },
	{ ref: "Administracija", ime: "Branka Šumarac Kovačević", broj: "064/643-97-67", skr: "1767", email: "branka.kovacevic@kej.rs", rodj: "02.02.1985.", priv: "/", sort: "administracija" },
	{ ref: "Administracija", ime: "Aleksandra Pujić", broj: "064/643-06-35", skr: "6635", email: "aleksandra.pujic@kej.rs", rodj: "05.03.1991.", priv: "/", sort: "administracija" },
	{ ref: "Administracija", ime: "Ana Radović", broj: "/", skr: "/", email: "ana.radovic@kej.rs", rodj: "00.00.0000", priv: "/", sort: "administracija" },
]
let pripremaNiz = [
	{ ref: "Tehnička priprema", ime: "Igor Spasojević", broj: "064/643-97-90", skr: "1790", email: "igor.spasojevic@kej.rs", rodj: "11.03.1984.", priv: "/", sort: "priprema", z: true },
	{ ref: "Tehnička priprema", ime: "Dragana Ljiljak", broj: "064/640-76-75", skr: "1675", email: "dragana.ljiljak@kej.rs", rodj: "14.03.1970.", priv: "/", sort: "priprema"},
	{ ref: "Tehnička priprema", ime: "Marija Petrović", broj: "064/643-95-08", skr: "1508", email: "marija.petrovic@kej.rs", rodj: "04.08.1994.", priv: "/", sort: "priprema" },
	{ ref: "Tehnička priprema", ime: "Milivoje Vićentijević", broj: "064/643-95-79", skr: "1579", email: "milivoje.vicentijevic@kej.rs", rodj: "30.05.1985.", priv: "/", sort: "priprema" },
	{ ref: "Tehnička priprema", ime: "Anja Trifunović", broj: "064/643-47-28", skr: "4728", email: "anja.trifunovic@kej.rs", rodj: "16.12.2002.", priv: "069/42-10-290", sort: "priprema" },
	{ ref: "Tehnička priprema", ime: "Marko Nikolić", broj: "064-129-30-96", skr: "/", email: "/", rodj: "07.04.1984.", priv: "/", sort: "priprema" },
]
let opstiNiz = [
	{ ref: "Opšti sektor", ime: "Aleksandra Marić", broj: "064/643-97-75", skr: "1775", email: "aleksandra.maric@kej.rs", rodj: "28.07.1989.", priv: "065/539-22-33", sort: "opsti", z: false },
	{ ref: "Opšti sektor", ime: "Seka Maksimović", broj: "063/834-78-20", skr: "/", email: "seka.maksimovic@kej.rs", rodj: "26.10.1957.", priv: "/", sort: "opsti" },
	{ ref: "Opšti sektor", ime: "Vladeta Gačić", broj: "064/642-72-46", skr: "6246", email: "/", rodj: "12.08.1956.", priv: "064/855-95-07", sort: "opsti" },
	{ ref: "Opšti sektor", ime: "Danijela Ignjatović", broj: "061/423-69-22", skr: "/", email: "/", rodj: "21.10.1976.", priv: "/", sort: "opsti" },
]
let knjigovodstvoNiz = [
	{ ref: "Knjigovodstvo", ime: "Branka Nikolić", broj: "064/640-76-79", skr: "1679", email: "branka.nikolic@kej.rs", rodj: "30.09.1959.", priv: "/", sort: "knjigovodstvo", z: true },
	{ ref: "Knjigovodstvo", ime: "Mirjana Emreković", broj: "064/640-76-85", skr: "1685", email: "mirjana.emrekovic@kej.rs", rodj: "25.02.1971.", priv: "/", sort: "knjigovodstvo" },
	{ ref: "Knjigovodstvo", ime: "Milica Milanović", broj: "/", skr: "/", email: "milica.milanovic@kej.rs", rodj: "26.07.1984.", priv: "/", sort: "knjigovodstvo" },
	{ ref: "Knjigovodstvo", ime: "Milena Beljić", broj: "064/643-97-95", skr: "1795", email: "racunovodstvo@kej.rs", rodj: "23.06.1979.", priv: "/", sort: "knjigovodstvo" },
	{ ref: "Knjigovodstvo", ime: "Jovan Gligorić", broj: "064/643-47-24", skr: "6724", email: "jovan.gligoric@kej.rs", rodj: "22.06.1997.", priv: "/", sort: "knjigovodstvo" },
	{ ref: "Knjigovodstvo", ime: "Marijana Gajović", broj: "064/643-95-10", skr: "1510", email: "marijana.gajovic@kej.rs", rodj: "27.09.1998.", priv: "/", sort: "knjigovodstvo" },
	{ ref: "Knjigovodstvo", ime: "Mirjana Vitorović", broj: "064/643-97-78", skr: "1778", email: "mirjana.vitorovic@kej.rs", rodj: "16.02.1982.", priv: "063/377-646", sort: "knjigovodstvo" },
]
let biroNiz = [
	{ ref: "Projektni biro", ime: "Andrijana Maksimović", broj: "064/643-94-95", skr: "1495", email: "andrijana@kej.rs", rodj: "11.05.1985.", priv: "/", sort: "biro", z: false },
	{ ref: "Projektni biro", ime: "Jelena Marković", broj: "064/643-97-70", skr: "1770", email: "jelena@kej.rs", rodj: "18.03.1986.", priv: "/", sort: "biro" },
	{ ref: "Projektni biro", ime: "Jovana Savić", broj: "069/138-93-25", skr: "/", email: "jovana.savic@kej.rs", rodj: "30.10.1989.", priv: "/", sort: "biro" },
	{ ref: "Projektni biro", ime: "Isidora Levnaić", broj: "/", skr: "/", email: "isidora.levnaic@kej.rs", rodj: "23.08.1988.", priv: "/", sort: "biro" },
	{ ref: "Projektni biro", ime: "Valentina 000000000", broj: "/", skr: "/", email: "0000000000000@kej.rs", rodj: "00.00.0000.", priv: "/", sort: "biro" },
	{ ref: "Projektni biro", ime: "Ova mala 000000000", broj: "/", skr: "/", email: "0000000000000@kej.rs", rodj: "00.00.0000.", priv: "/", sort: "biro" },
]
let bzrNiz = [
	{ ref: "BZR", ime: "Nataša Radović", broj: "064/643-95-00", skr: "1500", email: "natasa.radovic@kej.rs", rodj: "22.05.1993.", priv: "/", sort: "bzr", z: false },
	{ ref: "BZR", ime: "Marija Pecikoza", broj: "/", skr: "/", email: "/", rodj: "/", priv: "/", sort: "bzr", z: false },
]
let komercijalaNiz = [
	{ ref: "Komercijala", ime: "Jasna Tijanić", broj: "064/642-72-47", skr: "6247", email: "jasna.tijanic@kej.rs", rodj: "01.03.1966.", priv: "/", sort: "komercijala", z: true },
	{ ref: "Komercijala", ime: "Jovana Jakovljević", broj: "064/640-76-78", skr: "1678", email: "jovana.jakovljevic@kej.rs", rodj: "21.06.1986.", priv: "/", sort: "komercijala"},
	{ ref: "Komercijala", ime: "Nikola Mitrović", broj: "064/643-95-82", skr: "1582", email: "nikola.mitrovic@kej.rs", rodj: "14.07.1996.", priv: "/", sort: "komercijala" },
	{ ref: "Komercijala", ime: "Goran Branković", broj: "064/643-97-93", skr: "1793", email: "goran.brankovic@kej.rs", rodj: "07.12.1964.", priv: "/", sort: "komercijala" },
	{ ref: "Komercijala", ime: "Vanja 0000000000", broj: "064/643-00-00", skr: "0000", email: "vanja.0000000@kej.rs", rodj: "00.00.0000.", priv: "/", sort: "komercijala" },
]
let logistikaNiz = [
	{ ref: "Logistika", ime: "Zoran Kulinčević", broj: "064/643-95-70", skr: "1570", email: "zoran.kulincevic@kej.rs", rodj: "29.08.1967.", priv: "/", sort: "logistika" , z: false },
	{ ref: "Logistika", ime: "Tamara Nikolić", broj: "064/643-95-03", skr: "1503", email: "logistika@kej.rs", rodj: "24.05.1993.", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Vladimir Selenić", broj: "064/643-97-73", skr: "1773", email: "vladimir.selenic@kej.rs", rodj: "/", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Milisav Marković Muja", broj: "064/643-95-02", skr: "1502", email: "/", rodj: "19.05.1975.", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Milovan Petrović", broj: "064/643-95-81", skr: "1581", email: "/", rodj: "30.03.1978", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Dejan Radovanović", broj: "064/643-97-72", skr: "1772", email: "/", rodj: "18.08.1967.", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Slobodan Stanojević", broj: "064/643-95-01", skr: "1501", email: "/", rodj: "/", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Novak Milutinović", broj: "064/643-95-09", skr: "1509", email: "/", rodj: "/", priv: "/", sort: "logistika" },
	{ ref: "Logistika", ime: "Miodrag Velimirović – Puja", broj: "064/643-95-71", skr: "1571", email: "/", rodj: "/", priv: "/", sort: "logistika" },
]
let magacinNiz = [
	{ ref: "Magacin", ime: "Nemanja Marković", broj: "060/643-73-66", skr: "/", email: "nemanja.markovic@kej.rs", rodj: "12.09.1982.", priv: "/", sort: "magacin", z: false  },
	{ ref: "Magacin", ime: "Dragan Milošević", broj: "064/643-94-99", skr: "1499", email: "magacin@kej.rs", rodj: "", priv: "/", sort: "magacin" },
	{ ref: "Magacin", ime: "Jovana Erić", broj: "/", skr: "/", email: "jovana.eric@kej.rs", rodj: "21.02.2000.", priv: "/", sort: "magacin" },
	{ ref: "Magacin", ime: "Milan Stojanović", broj: "064/643-95-06", skr: "1506", email: "/", rodj: "07.08.1964.", priv: "/", sort: "magacin" },
	{ ref: "Magacin", ime: "Filip Janković", broj: "064/643-95-83", skr: "1583", email: "/", rodj: "23.04.1991.", priv: "/", sort: "magacin" },
]
let alatiNiz = [
	{ ref: "Magacin alata", ime: "Dušan Vlajković", broj: "064/643-95-70", skr: "1574", email: "alati@kej.rs", rodj: "06.02.1964.", priv: "/", sort: "alati", z: false  },
]
let radniciNiz = [
	{ ref: "Građevinski radnici", ime: "Slobodan Antonić", broj: "064/642-72-48", skr: "6248", email: "/", rodj: "/", priv: "/", sort: "radnici", z: false  },
]
let domusNiz = [
	{ ref: "Kej Domus", ime: "Uroš Antonijević", broj: "064/643-06-31", skr: "6631", email: "nekretnine@kej.rs", rodj: "24.05.1985.", priv: "/", sort: "domus", z: false  },
	{ ref: "Kej Domus", ime: "Jasna Selenić", broj: "064/643-00-00", skr: "0000", email: "00000000000@kej.rs", rodj: "00.00.1987.", priv: "/", sort: "domus", z: false  },
]
let skiresortNiz = [
	{ ref: "Ski Resort", ime: "Andrija Marjanovic", broj: "065/959-09-50", skr: "6950", email: "andrija@divcibareskiresort.com", rodj: "15.08.1991.", priv: "/", sort: "skiresort", z: false  },
	{ ref: "Ski Resort", ime: "Dimitrije Sudžum", broj: "064/643-47-35", skr: "4735", email: "dimitrije@divcibareskiresort.com", rodj: "10.06.1994.", priv: "/", sort: "skiresort" },
	{ ref: "Ski Resort", ime: "DivčiBar", broj: "064/643-97-76", skr: "1776", email: "/", rodj: "/", priv: "/", sort: "skiresort" },
	{ ref: "Ski Resort", ime: "Đorđe Vuković", broj: "064/643-47-25", skr: "4725", email: "/", rodj: "/", priv: "/", sort: "skiresort" },
	{ ref: "Ski Resort", ime: "Dejan Stanimirović", broj: "064/643-47-27", skr: "4727", email: "/", rodj: "/", priv: "/", sort: "skiresort" },
	{ ref: "Ski Resort", ime: "SKI škola Divčibare", broj: "064/643-47-36", skr: "4736", email: "/", rodj: "/", priv: "/", sort: "skiresort" },
]
let plamenacNiz = [
	{ ref: "Vila Plamenac", ime: "Vila plamenac", broj: "064/643-97-66", skr: "1766", email: "vilaplamenac@gmail.com", rodj: "/", priv: "/", sort: "plamenac", z: false},
]
let pravniNiz = [
	{ ref: "Pravni poslovi", ime: "Vukašin Vlajkovic", broj: "064/643-97-68", skr: "1768", email: "advvukasinvlajkovic@gmail.com", rodj: "07.07.1990.", priv: "/", sort: "pravni", z: false },
	{ ref: "Pravni poslovi", ime: "Ivana Milovanović", broj: "069/327-40-61", skr: "/", email: "/", rodj: "20.07.1990.", priv: "/", sort: "pravni" },
]
let masterNiz = [
	{ ref: "Master Elektro", ime: "Mirko Branković", broj: "064/643-97-71", skr: "1771", email: "office@masterelektro.rs", rodj: "/", priv: "/", sort: "master", z: false },
	{ ref: "Master Elektro", ime: "Nikola Jovanović", broj: "065/356-65-99", skr: "6599", email: "priprema@masterelektro.rs", rodj: "/", priv: "/", sort: "master" },
	{ ref: "Master Elektro", ime: "Miloš Radosavljević", broj: "064/643-06-33", skr: "6633", email: "komercijala@masterelektro.rs", rodj: "/", priv: "/", sort: "master" },
	{ ref: "Master Elektro", ime: "Milena Srećković", broj: "064/643-97-74", skr: "1774", email: "administracija@masterelektro.rs", rodj: "/", priv: "/", sort: "master" },
	{ ref: "Master Elektro", ime: "Radovan Milinović", broj: "064/640-76-80", skr: "1680", email: "/", rodj: "/", priv: "RBD Elektro", sort: "master" },
]
let rampaNiz = [
	{ ref: "Rampa", ime: "rampa", broj: "064/643-47-38", skr: "4738", email: "/", rodj: "/", priv: "/", sort: "rampa", z: false  },
]
let hiddenNiz = [
	{ ref: "---", ime: "~~~", broj: "3343432432423", skr: "9999", email: "/", rodj: "/", priv: "/", sort: "---", z: false  },
]
