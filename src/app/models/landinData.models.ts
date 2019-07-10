export class landingModel {
  product_id: number;
  person_name: string;
  role: string;
  state: string;
  stateid: number;
  id: number;

  constructor(data:any ={ }){
    this.product_id = data.product_id;
    this.person_name = data.person_name;
    this.role = data.role;
    this.state = data.state;
    this.stateid = data.stateid;
    this.id = data.id;
  
  }
}
