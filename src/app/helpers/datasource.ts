import { Track } from '../models/artistModel';


export function getDatasource() {
    return [
        {
            id: 0,
            author: { id: 0, name: "Tiziano", surname: "Ferro", age: "40" },
            title: "Sere Nere"
        },
        {
            id: 1,
            author: { id: 0, name: "Tiziano", surname: "Ferro", age: "40" },
            title: "Lo Stadio"
        },
        {
            id: 2,
            author: { id: 1, name: "Giorgio", surname: "Vanni", age: "45" },
            title: "Pokèmon oltre i cieli dell'avventura"
        },
        {
            id: 3,
            author: { id: 2, name: "Laura", surname: "Pausini", age: "46" },
            title: "Estate"
        },
        {
            id: 4,
            author: { id: 2, name: "Laura", surname: "Pausini", age: "46" },
            title: "Io sì"
        },
        {
            id: 5,
            author: { id: 1, name: "Giorgio", surname: "Vanni", age: "45" },
            title: 'Pokèmon'
        }
    ] as Array<Track>;
}