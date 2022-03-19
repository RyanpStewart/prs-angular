import { User } from './user.model';

export class Request {
  public id: number;
  public user: User;
  public description: string;
  public justification: string;
  public dateNeeded: Date;
  public deliveryMode: string;
  public status: string;
  public total: number;
  public submittedDate: Date;
  public reasonForRejection: string;

  constructor(
    id: number = 0,
    user: User = new User(),
    description: string = '',
    justification: string = '',
    dateNeeded: Date,
    deliveryMode: string = '',
    status: string = '',
    total: number = 0,
    submittedDate: Date,
    reasonForRejection: string = ''
  ) {
    this.id = id;
    this.user = user;
    this.description = description;
    this.justification = justification;
    this.dateNeeded = dateNeeded;
    this.deliveryMode = deliveryMode;
    this.status = status;
    this.total = total;
    this.submittedDate = submittedDate;
    this.reasonForRejection = reasonForRejection;
  }
}
