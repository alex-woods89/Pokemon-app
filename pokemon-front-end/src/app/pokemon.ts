import { Team } from "./team";

export class Pokemon {
    id!: number;
    name: string = '';
    url: string = ''; 
    data: any;
    pokeTeamID?: number;
}
