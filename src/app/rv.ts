export class RendezVous {
  constructor(
    private _id: string,
    private _desc: string,
    private _lieu: string,
    private _date: Date
  ) {}
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get lieu(): string {
    return this._lieu;
  }
  public set lieu(value: string) {
    this._lieu = value;
  }
  public get desc(): string {
    return this._desc;
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
