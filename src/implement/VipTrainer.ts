class VipTrainer extends Trainer implements ITrainer{
   protected _level: number;

   public constructor(name: string, cash: number, level: number) {
      super(name, cash);
      this._level = level;
   }

   public get level(): number {
      return this._level;
   }

   public set level(level: number) {
      this._level = level;
   }
}