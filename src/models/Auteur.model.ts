import { GetAuteurDto } from './GetAuteurDto';

export class Auteur{
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public email: string,
        public description: string
    ){}

    toGetAuteurDto(): GetAuteurDto{
        return{
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            description: this.description
        };
    }

    static fromDB(dbResult: { id: number; nom: string; prenom: string; email: string; description: string}): Auteur{
        return new Auteur (dbResult.id, dbResult.nom, dbResult.prenom, dbResult.email, dbResult.description)
    }
}
