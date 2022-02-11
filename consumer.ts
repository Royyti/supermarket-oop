import {IPerson} from "./iperson";
export class Consumer implements IPerson {
    isClubMember:boolean;
constructor(isClubMember:boolean) {
    this.isClubMember = isClubMember;
    
}
}
