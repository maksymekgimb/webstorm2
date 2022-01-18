class pizza
{
    ileSera = 0;
    ilePeperoni = 0;
    ileKrewetek = 0;
    display=function()
    {
        let cenaRazem = 0;
        let cenaSpod = 5.19+1.6;
        let cenaSerZaKg = 2;
        let cenaPeperoniZaKg = 3;
        let cenaKrewetkiZaKg = 4;

        let kaloriRazem = 0;
        let kaloriSpod = 248+54;
        let kaloriSerKg = 254;
        let kaloriPeperoniKg = 493;
        let kaloriKrewetkiKg = 85;

        cenaRazem += cenaSpod;
        cenaRazem += (cenaSerZaKg  * this.ileSera)/100;
        cenaRazem += (cenaPeperoniZaKg  * this.ilePeperoni)/100;
        cenaRazem += (cenaKrewetkiZaKg  * this.ileKrewetek)/100;

        kaloriRazem += kaloriSpod;
        kaloriRazem += (kaloriSerKg  * this.ileSera)/100;
        kaloriRazem += (kaloriPeperoniKg  * this.ilePeperoni)/100;
        kaloriRazem += (kaloriKrewetkiKg  * this.ileKrewetek)/100;

        document.write("Wegetariańska: ");
        if (this.czyWegtarianska()) document.write("Tak");
        else  document.write("Nie");
        document.write("<br>Cena razem: " + cenaRazem + "zł");
        document.write("<br>Kalori razem: " + kaloriRazem + "");
    }
    czyWegtarianska = function()
    {
        if (this.ilePeperoni > 0) {
            return false;
        }
        return true;
    }
}
p = new pizza();
p.ileSera = +prompt("Podaj ile % sera");
p.ilePeperoni = +prompt("Podaj ile % peperoni");
p.ileKrewetek = +prompt("Podaj ile % krewetek");
p.display();