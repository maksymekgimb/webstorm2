class DefaultPizza
{
    Kurczak = 0;
    Pieczarki = 0;
    Kielbasa = 0;
    Cebula = 0;
    Veg = false;
    TheAsker = function()
    {
        do {this.Kurczak = +prompt("Ile chcesz kurczaka?");}
        while (this.Kurczak > 100 || this.Kurczak < 0)
        do {this.Pieczarki = +prompt("Ile chcesz pieczarek?");}
        while (this.Pieczarki > 100 || this.Pieczarki < 0)
        do {this.Kielbasa = +prompt("Jak duzo kielbasy?");}
        while (this.Kielbasa > 100 || this.Kielbasa < 0)
        do {this.Cebula = +prompt("Ile cebuli?");}
        while (this.Cebula > 100 || this.Cebula < 0)
    }
    TheCalculator = function()
    {
        this.TheAsker();
        this.Price = (this.Kurczak * .06)+(this.Pieczarki * .04)+(this.Kielbasa * .06)+(this.Cebula * .02)+5;
        this.Callories = (this.Kurczak * 8)+(this.Pieczarki * 3)+(this.Kielbasa * 4)+(this.Cebula * 6)+300;
    }
    TheVegCheck = function()
    {
        if (this.Kurczak==0 && this.Kielbasa==0)
        {this.Veg=true;}
    }
    TheDisplayer = function()
    {
        this.TheCalculator();
        this.TheVegCheck();
        document.write(`Wybrales ${this.Kurczak}% Kurczak,${this.Pieczarki}% Pieczarki,${this.Kielbasa}% Kielbasa,${this.Cebula}% Cebula<br>`);
        document.write(`Cena ${this.Price}<br>`);
        document.write(`Kalorie ${this.Callories}<br>`);
        document.write(`Vegetarianska ${this.Veg}<br>`);
    }

}
const Pizza = new DefaultPizza();
Pizza.TheDisplayer();