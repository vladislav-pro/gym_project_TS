class Trainer implements ITrainer {
   protected _name: string;
   protected _cash: number;

   public constructor(name: string, cash: number) {
      this._name = name;
      this._cash = cash;
   }

   public get name(): string {
      return this._name;
   }

   public set name(name: string) {
      this._name = name;
   }

   public get cash(): number {
      return this._cash;
   }

   public addCash(cash: number) {
      this._cash += cash;
   }
}