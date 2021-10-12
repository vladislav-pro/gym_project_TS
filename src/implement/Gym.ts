class Gym implements IGym {
   protected readonly _name: string;
   protected readonly _adress: string;
   protected _trainers: Array<ITrainer>;

   public constructor(name: string, adress: string) {
      this._name = name;
      this._adress = adress;
      this._trainers = [];
   }

   public get name(): string {
      return this._name;
   }

   public get adress(): string {
      return this._adress;
   }

   public getTrainerByName(name: string): ITrainer {
      return this._trainers.find(trainer => trainer.name === name);
   }

   public get trainers(): Array<ITrainer> {
      return this._trainers;
   }

   public addTrainer(name: ITrainer) {
      this._trainers.push(name);
   }

   public deleteTrainer(name: string) {
      let deleteTrainer: ITrainer = this._trainers.find(trainer => trainer.name === name);
      const cansel: number = this._trainers.indexOf(deleteTrainer);
      this.trainers.slice(cansel ,1);
   }

   public payTraining(name: string, cash: number) {
      this._trainers.find(trainer => {
         if (trainer.name === name) {
             trainer.addCash(cash);
         }
     });
   }
}