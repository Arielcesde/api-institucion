import { end_points } from "./config.js"

export function getData(){
    fetch(end_points.estudiantes)   
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })   

}
export function createData(){

    fetch()
}

export function updateData(){

     fetch()   
}

export function deleteData(){
    fetch()
}