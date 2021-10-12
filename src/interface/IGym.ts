interface IGym {
   readonly name: string;
   readonly adress: string;
   readonly trainers: ITrainer[];
   getTrainerByName(string): ITrainer;
   addTrainer(ITrainer): void;
   deleteTrainer(string): void;
   payTraining(string, number): void;
}