export class Areas {
  id: number;
  name: string;
  tags?: string[];

  constructor(id: number, name: string, tags?: string[]) {
    this.id = id;
    this.name = name;
    this.tags = tags;
  }
}
