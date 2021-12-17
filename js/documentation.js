/**
 * @description returns sum of two elements
 * @param {anytype} first component of sum
 * @param {anytype} second component of sum
 * @return {anytype} sum of two components
 */
function sum({first, second} ) {
    return first + second
}

console.log(sum({first: 2, second: 3}))


class zasilacz
{
    moc=0;
    cena=0;
    dodatkowe_zasilanie="p";
}
let zasilacze=new Array(10)
for( let i=0;i<3;i++)
{
    zasilacze[i]=new zasilacz;
    zasilacze[i].moc=prompt("wpisz moc zasilacza która cię interesuje");
    zasilacze[i].cena=prompt("wpisz cene która cię interesuje");
    zasilacze[i].dodatkowe_zasilanie=prompt("wpisz czy ma mieć dodatkowe zasilanie");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"1-moc 2-po cenie zasilaczy 3-dodatkowe zailanie do karty graficznej");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
        document.write(`${zasilacze[i].moc}<br>`);
}

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
    let odpowiedz = prompt("czy interesuje cie dodatkowe zasilanie");
    for( let i=0;i<3;i++)
    {
        if(zasilacze[i].dodatkowe_zasilanie > +odpowiedz)
        {
            document.write(zasilacze[i].moc);
            document.write("dodatkowe zasilanie: " + zasilacze[i].dodatkowe_zasilanie);
        }
    }
}
else
{
    document.write("nie wybrales zadnej z opcji");
}
