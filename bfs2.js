const data = {
    "movies": [{
            "title": "Diner",
            "cast": [
                "Steve Guttenberg",
                "Daniel Stern",
                "Mickey Rourke",
                "Kevin Bacon",
                "Tim Daly",
                "Ellen Barkin",
                "Paul Reiser",
                "Kathryn Dowling",
                "Michael Tucker",
                "Jessica James",
                "Colette Blonigan",
                "Kelle Kipp",
                "Clement Fowler",
                "Claudia Cron"
            ]
        },
        {
            "title": "Footloose",
            "cast": [
                "Kevin Bacon",
                "Lori Singer",
                "Dianne Wiest",
                "John Lithgow",
                "Sarah Jessica Parker",
                "Chris Penn",
                "Frances Lee McCain",
                "Jim Youngs",
                "John Laughlin",
                "Lynne Marta",
                "Douglas Dirkson"
            ]
        },
        {
            "title": "Flatliners",
            "cast": [
                "Kiefer Sutherland",
                "Julia Roberts",
                "Kevin Bacon",
                "William Baldwin",
                "Oliver Platt",
                "Kimberly Scott",
                "Joshua Rudoy",
                "Benjamin Mouton",
                "Hope Davis",
                "Patricia Belcher",
                "Beth Grant"
            ]
        },
        {
            "title": "Eat Pray Love",
            "cast": [
                "Julia Roberts",
                "Javier Bardem",
                "Billy Crudup",
                "Richard Jenkins",
                "Viola Davis",
                "James Franco",
                "Sophie Thompson",
                "Mike O 'Malley",
                "Christine Hakim",
                "Arlene Tur",
                "Hadi Subiyanto",
                "Gita Reddy",
                "Tuva Novotny",
                "Luca Argentero",
                "Rushita Singh"
            ]
        },
        {
            "title": "Spotlight",
            "cast": [
                "Mark Ruffalo",
                "Michael Keaton",
                "Rachel McAdams",
                "Liev Schreiber",
                "John Slattery",
                "Brian d'Arcy James",
                "Stanley Tucci",
                "Gene Amoroso",
                "Jamey Sheridan",
                "Billy Crudup",
                "Maureen Keiller",
                "Richard Jenkins",
                "Paul Guilfoyle",
                "Len Cariou",
                "Neal Huff",
                "Michael Cyril Creighton",
                "Laurie Heineman",
                "Tim Progosh"
            ]
        }
    ]
}

let allPeople = []

data.movies.forEach((elem) => {
    allPeople.push(elem.title)
    allPeople = [...allPeople, ...elem.cast]
})
allPeople = [... new Set(allPeople)]

let relation = []

for(let i=0; i< data.movies.length;i++){
    relation[i] = [data.movies[i].title, ...data.movies[i].cast];
}


let adjacencyList = new Map();

function addNode(people){
    adjacencyList.set(people, [])
}

function addEdge(movie, artists){
    artists.forEach((artist) => {
        adjacencyList.get(movie).push(artist)
        adjacencyList.get(artist).push(movie)
    })
}

allPeople.forEach(addNode)
relation.forEach(rel => addEdge(rel.splice(0,1)[0], rel))
console.log(adjacencyList)

function bfs(start, end) {
    const visited = new Set();
    const queue = [start]
    let len = []

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue
        const destinations = adjacencyList.get(airport);
        len.push(airport)
        for (const destination of destinations) {
            if (destination === end) {
                // console.log(`${start} found ${end}!`)
                len.push(end)
                console.log(len, len.length)
                len = [start]

            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);

            }
        }
    }
}

bfs('Neal Huff', 'Diner')