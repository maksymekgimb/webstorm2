class Phone {
    brand = "Xiaomi";
    color ='black';
    price = 1234.21;
    usbC = false;
    user = "Marcin";
    sendSms = function(text) {
        this.sms = this.user + "wyslal sms: " + text;
    }
}
/*let komora = new Phone;
komora.sendSms('nie ide jutro do szkoly');
document.write(komora.sms);
//komora.brand='IPhone';
//alert(komora.brand);
let text = prompt ( 'podaj tresc sms-a');
komora.sendSms(komora.sms);
alert(komora);*/
/*let telefon=new Phone;
telefon.user='Tomek';
let telefony=[komora,telefon];
alert(telefony[1].user);*/
let telefony=new Array(20);
telefony[0]=new Phone;
telefony[0].user='bob';
alert(telefony[0].user);

let warzywa=new Array(20);
warzywa[]=new Phone;

