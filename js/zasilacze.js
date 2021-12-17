class zasilacz
{
    dodatkowe_zasilanie="y";
    cena=0;
    moc=0;
}
let zasilacze=new Array(10)
for( let i=0;i<3;i++)
{
    zasilacze[i]=new zasilacz;
    zasilacze[i].dodatkowe_zasilanie=prompt("Czy mają dodatkowe zasilanie do kart graficznych?");
    zasilacze[i].cena=prompt("Ile kosztują");
    zasilacze[i].moc=prompt("Ile mają mocy");
}
let wartosc=prompt("wybierz co chcesz wyszukać: "+"1-wypiszę  zasilacze z dodatkowym zasilaniem 2-podasz cene i wypisze jakie możesz kupić  3-podasz moc i wypiszę te które mają tyle mocy lub więcej");



if (wartosc == 1)
{
    for( let i=0;i<3;i++)
    {
        if (zasilacze[i].dodatkowe_zasilanie == 'y')
        {
            document.write('ma dodatkowe zasilanie <br>');
            document.write(`moc = ${zasilacze[i].moc}<br>`);
            document.write(`cena = ${zasilacze[i].cena}<br>`);
        }
    }
}

else if (wartosc == 2)
    {
        let odpowiedz = prompt("za ile chcesz kupić zasilacz ");
        for( let i=0;i<3;i++)
        {
            if(zasilacze[i].cena < +odpowiedz)
            {
                document.write(`cena = ${zasilacze[i].cena}<br>`);
                document.write(`moc = ${zasilacze[i].moc}<br>`);
                document.write(`dodatkowe zasilanie = ${zasilacze[i].dodatkowe_zasilanie}<br>`)
            }
        }
    }
            else if (wartosc == 3)
            {
                let odpowiedz = prompt("ile ma mieć mocy zasilacz? ");
                for( let i=0;i<3;i++)
                    {
                if(zasilacze[i].moc > +odpowiedz)
                {
                    document.write(`moc = ${zasilacze[i].moc}<br>`);
                    document.write(`cena = ${zasilacze[i].cena}<br>`);
                    document.write(`dodatkowe zasilanie = ${zasilacze[i].dodatkowe_zasilanie}<br>`)
                }
                    }
            }
            else
            {
                document.write("nie wybrałeś żadnej z opcji");
            }