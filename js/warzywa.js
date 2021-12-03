class warzywo
{
    nazwa="panpomidor";
    cena=0;
    ilosc=0;
}
let warzywka=new Array(10)
for( let i=0;i<3;i++)
{
    warzywka[i]=new warzywo;
    warzywka[i].nazwa=prompt("wpisz nazwe warzywa");
    warzywka[i].cena=prompt("wpisz cene warzywa");
    warzywka[i].ilosc=prompt("wpisz ilosc warzywa");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"Lista warzyw - 1 Ceny warzyw - 2 Ilosc warzyw - 3");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
        document.write(warzywka[i].nazwa);
}

else if (wartosc == 2)
{
    let odpowiedz = prompt("w jakiej cenie szukasz warzyw");
    for( let i=0;i<3;i++)
    {
        if(warzywka[i].cena < +odpowiedz)
        {
            document.write(warzywka[i].nazwa);
            document.write("cena: " + warzywka[i].cena);
        }
    }
}
else if (wartosc == 3)
{
    let odpowiedz = prompt("jaka ilosc potrzebujesz");
    if (warzywka[i].ilosc < +odpowiedz)
    {
        document.write(warzywka[i].nazwa);
        document.write("ilosc: " + warzywka[i].ilosc);
    }
}
else
{
    document.write("nie wybrales zadnej z opcji");
}