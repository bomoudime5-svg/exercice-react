const users = [
    {prenom: 'dime', nom:'bomou', statut: 0, age: 10, role: 'admin'},
    {prenom: 'doudou', nom:'sall', statut: 0, age: 20, role: 'user'},
    {prenom: 'samba', nom:'gueye', statut: 0, age: 18, role: 'admin'},
    {prenom: 'coumba', nom:'ba', statut: 0, age: 35, role: 'user'},
    {prenom: 'lisa', nom:'mboup', statut: 0, age: 80, role: 'admin'},
]
/*crée une fonction fleché nommé getadmin qui prend en parametre le tableau et retourne un tableau contenant tous les
utilisateurs ayant le role admin faite l'appel de la fonction pour afficher le resultat*/
const getadmin= (user) => {
   return user.filter (user => user.role ==='admin')
};
console.log(getadmin(user))
let user = {prenom:'dime', nom: 'bomou', statut: 0, age: 10, role: 'admin'}
/*recuperer le prenom, le nom et le role de l'utilisateur et l'afficher */
let prenom = user.prenom;
let nom1 = user.nom;
let role1 = user.role;
console.log(prenom,nom1,role1)
/* destructuration*/
const {prenom,nom,role} = user
console.log(prenom,nom,role)
/* utilisation de map*/
let usermap = users.map(({prenom,role})=>{
    return {
        p:prenom,
        r:role,
    }
});
console.log(usermap);
/*DESTRUCTURATION */
const [user1, , user3]= users;
console.log("premiere utilisateur:", user1);
console.log("troisieme utilisateur:", user3);
 const nouvUTILISATEUR = {prenom: 'ousseynou', nom: 'cisse', statut:0, age: 32, role: 'user' }

 const equipe = [...users, nouvUTILISATEUR];
 
 console.log(equipe);
 users[1].statut = "1";
 console.log(users);
