import fs from "fs";

export class TotalEarnings {
  total() {
    const data = fs.readFileSync("src/supermercado.ros", "utf-8");
  
    const arrayData = data.split("\n");
  
    const itemsData = arrayData.map((element) => {
      return element.split(",");
    });
  
    const dataNoHeader = itemsData.slice(1);
  
    const item = dataNoHeader.map((element) => {
      return {
        name: element[0],
        quantity: parseInt(element[1]),
        price: parseFloat(element[2]),
      };
    });
  
    const result = item.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  
    return result;
  }
}
