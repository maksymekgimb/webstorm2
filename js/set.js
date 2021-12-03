class warzywo
{
    name = 'name';
    price = '0';
    amount = 0;
}


let clothes = new Set();                    //new poniewaz powstaje nowy obiekt klasy set
clothes.add('sweter');
clothes.add('jeans');//dodanie itema
//clothes.delete('sweter');                 //usunelism jedna wartosc
//alert(clothes.has( 'sweter'));
//alert(clothes.size);
//alert(clothes.value);                     //wypisuje ubrania
clothes.add('sweter'); //dodanie drugiego takiego samego elementu robi nic
clothes.add(5);
let por = new warzywo;
por.name='por';
por.amount=50;
por.price=2;
clothes.add(new warzywo);
clothes.add(new warzywo);
clothes.add(new warzywo);
clothes.add(new warzywo);
for (let item of clothes) alert(item.name);
