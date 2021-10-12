interface IClient {
   name: string;
   age: number;
   readonly cash: number;
   gym: IGym;
   addCash(number): void;
   payCash(string, number): void;
}