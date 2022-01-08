// 2) RESUME JSON FORMAT
const resume = [
    {
        jobApplication: {
            role:"Full-Stack Developer"
        },
        personalInfo: {
            name: {
                firstName: "Karthick",
                lastName: "M",
                age: 24,
                fullName: this.firstName + " " + this.lastName
            },
            contact: {
                state: "TamilNadu",
                district:"Tiruppur",
                address:'xyz street, ${this.district}, ${this.state}',
                mail: "karthick01@gmail.com",
                mobile: "********47"
            },
            languages: {
                tam: "Tamil",
                ebg: "English"
            }
        },
        experience: {
            company: {
                name: "aaa",
                place: "Chennai",
                state: "Tamil Nadu"
            },
        },
        interest: {
            interest_1 : "Watching Youtube",
            interest_2 : "playing Volleyball",
            interest_3 : "Learn new Skill"
        },
    }
]

console.log(resume);



// 1) for loops(for,for in,for of,for each)

const cricket = [
    {
        name: "Raja",
        position : "Slip",
        department : "Civil Engineering",
        year : 2
    },
    {
        name: "Hariharan",
        position: "Longon field",
        department: "Civil Engineering",
        year : 4
    },
    {
        name: "Kiruba",
        position: "Offside",
        department: "Civil Engineering",
        year : 4
    },
    {
        name: "Kishore",
        position: "Longon field",
        department: "Civil Engineering",
        year: 1
    },
    {
        name: "Rahul",
        position: "Offside",
        department: "Civil Engineering",
        year: 4
    },
    {
        name:"Praveen",
        position:"Deep backward",
        department:"Architecture",
        year: 2
    },
    {
        name:"Saravanan",
        position:"Longon field",
        department:"Architecture",
        year: 2
    },
    {
        name:"Azarudin",
        position:"Deep backward",
        department:"Architecture",
        year: 2
    },
    {
        name:"Paul",
        position:"leg side",
        department:"Architecture",
        year: 3
    },
    {
        name:"Deepak",
        position:"Slip",
        department:"Architecture",
        year: 3
    },
    {
        name:"Deepan",
        position:"leg side",
        department:"Chemical Engineering",
        year: 2
    },
    {
        name:"Natarajan",
        position:"offside",
        department:"Chemical Engineering",
        year: 2
    },
    {
        name:"Karthick",
        position:"Deep backward",
        department:"Mechanical Engineering",
        year: 1
    },
    {
        name:"JGokul",
        position:"Slip",
        department:"Mechanical Engineering",
        year: 1
    }
]



//1.for loop - selecting only 2nd year students


for (i=0; i <cricket.length; i++){
    if (cricket[i].year === 2){
        console.log(cricket[i].name + "-" + cricket[i].position);
    }
}

//2.for-in loop - player details

for(let players in cricket){
    console.log("Player details" , cricket[players]);
}

//3. for-of loop - player and their department
for (let players of cricket){
    console.log(`${players.name} from ${players.department} department ${players.year}th year`)
}

//4. forEach loop - player and his position
cricket.forEach(function(players){
  console.log(`${players.name} as ${players.position}`);
});




// 3) WINDOW,SCREEN,DOCUMENT

// window is the root of everything, screen just has screen dimensions, and document is top DOM object. 