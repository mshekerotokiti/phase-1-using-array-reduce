const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 31;
const  totalBatteryBatches = batteryBatches.reduce((total, element) => total += element, totalBatteries
);
console.log(totalBatteryBatches);
