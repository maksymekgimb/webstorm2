class Student
{
    #name='Piotr';
    #surname='Bąk';
    #pesel='23456564752';
    constructor(name,surname,pesel)
    {
        this.#name=name;
        this.#surname=surname;
        this.#pesel=pesel;
    }
    getName = function()
    {
        return this.#name;
    }
    getSurname()
    {
        return this.#surname;
    }
    #getPesel()
    {
        return this.#pesel;
    }
    display()
    {
        document.write(this.#name+'<BR>'+this.#surname+'<BR>'+this.#pesel+'<BR>');
    }
    getDoB()
    {
        let str = this.#getPesel().slice(0,6);
        let str5 =+str.slice(2,4);
        let str6=str.slice(0,2);
        let str1=22;
        let str4=34;
        if (str5 > 20) {
            str1 = 'rok ' + '20' + str6 + '<BR>';
            str4=str.slice(2,4)-20+'<BR>';
        }
        else {
            str1 = 'rok ' + '19' + str6 + '<BR>';
            str4 = str.slice(2, 4)  + '<BR>';
        }

        let str2= 'miesiąc '+str4+'<BR>';
        let str3='dzień '+str.slice(4,6)+'<BR>';
        return str1+str2+str3;

    }

}
/let Student1 = new  Student() //('bob','marley', '03280178901');
Student1.#name=prompt('podaj imie studenta');
Student1.#surname=prompt('podaj nazwisko studenta');
Student1.#pesel=prompt('podaj pesel studenta');/
let Student1 = new  Student('bob','marley', '71070778901');
//Student1.display();
//var str1='3-5';
//var str2=new String('3-5');
//var str ='bobak';
//var str2 = str.slice(1,4);
//var str2 = str.substring(1,4);
//document.write(str2);


Student1.display();
document.write(Student1.getDoB());