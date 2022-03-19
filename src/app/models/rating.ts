export class Rating {
    _id?: number;
    id: string;
    name: string;
    rating: Number;
    description: string;

    constructor(id: string, name: string, rating: Number, description: string) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.description = description;
    }   
}