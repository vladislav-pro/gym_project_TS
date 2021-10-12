class Client implements IClient {
   protected _name: string;
   protected _age: number;
   protected _cash: number;
   protected _gym: IGym | null = null;

   public constructor(name: string, age: number, cash: number) {
      this._name = name;
      this._age = age;
      this._cash = cash;
      this._gym = null;
   }

   public get name(): string {
      return this._name;
   }

   public set name(name: string) {
      this._name = name;
   }

   public get age(): number {
      return this._age;
   }

   public set age(age: number) {
      this._age = age;
   }

   public get cash(): number {
      return this._cash;
   }

   public addCash(cash: number) {
      this._cash += cash;
   }

   public payCash(name: string, cash: number) {
      if (this._cash >= cash) {
         this._gym.payTraining(name, cash);
         this._cash -= cash;
     }
   }

   public get gym(): IGym {
      return this._gym;
   }

   public set gym(gym) {
      this._gym = gym;
   }
}