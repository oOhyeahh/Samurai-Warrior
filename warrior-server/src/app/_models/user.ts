import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    clanOrAlliance: string;
    description: string;
    photoUrl: string;
    dateofbirth: Date;
    photos?: Photo[];
}
