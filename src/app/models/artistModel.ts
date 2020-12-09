export interface Track {
    id: number;
    author: Author;
    title: string;
};

export interface Author {
    id: number;
    name: string;
    surname: string;
    age: string;
    description?: string;
};
