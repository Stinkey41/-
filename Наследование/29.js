class User {
    setName(name) {
    this.name = name;
}
getName() {
    return this.name;
}
}
class Employe extends User {

}

let employe = new Employe;
employe.setName('PupbIn9');
let name = employe.getName();

console.log(name);