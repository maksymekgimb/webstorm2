class zasilacze
{
    moc="p";
    cena=0;
    dodatkowe_zasilanie=0;
}
let zasilacze=new Array(10)
for( let i=0;i<3;i++)
{
    zasilacze[i]=new monitor;
    zasilacze[i].moc=prompt("wpisz moc zasilacza");
    zasilacze[i].cena=prompt("wpisz cenę zasilacza");
    zasilacze[i].dodatkowe_zasilanie=prompt("wpisz czy ma mieć dodatkowe zasilanie");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"po mocy zasilacza - 1 Ceny zasilaczy - 2 czy ma mieć dodatkowe zasilanie - 3");



if (wartosc == 1)

    for( let i=0;i<3;i++)
        document.write(${zasilacze[i].moc}<br>);


            else if (wartosc == 2)
            {
                let odpowiedz = prompt("w jakiej cenie szukasz zasilaczy");
                for( let i=0;i<3;i++)
            {
                if(zasilacze[i].cena < +odpowiedz)
            {
                document.write(zasilacze[i].moc);
                document.write("cena: " + zasilacze[i].cena);
            }
            }
            }
            else if (wartosc == 3)

            {
                let odpowiedz = prompt("czy interesuje cie dodatkowe zasilanie na karte graficzna");
                for( let i=0;i<3;i++)
            {
                if (zasilacze[i].dodatkowe_zasilanie > +odpowiedz)
            {
                document.write(zasilacze[i].cena);
                document.write("dodatkowe zasilanie: " + zasilacze[i].dodatkowe_zasilanie);
            }
            }
            }
            for( let i=0;i<3;i++)
            {
                if (zasilacze[i].dodatkowe_zasilanie < +odpowiedz)
            {
                document.write(zasilacze[i].moc);
                document.write("dodatkowe zasilanie: " + zasilacze[i].dodatkowe_zasilanie);
            }
            }
            else
            {
                document.write("nie wybrales zadnej z opcji");
            }