const metal: IGym = new Gym ("Metal", "adadad");

const andrey: ITrainer = new Trainer ("Andrey", 30);
const sashaVip: ITrainer = new VipTrainer ("Sasha", 5, 2);

const Yulia: IClient = new Client ("Yulia", 21, 100);
Yulia.gym = metal;


metal.addTrainer(andrey);
metal.addTrainer(sashaVip);