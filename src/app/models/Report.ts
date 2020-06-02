export class Report {
    constructor(
        public date:string,
        public username:string,
        public content:string,
        public isApproved:boolean
    ) { }
}