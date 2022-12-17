export type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  stat: {
    _id: string;
    productId: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    year: number;
    monthlyData: [
      {
        month: string;
        totalSales: number;
        totalUnits: number;
      }
    ];
    dailyData: [
      {
        date: string;
        totalSales: number;
        totalUnits: number;
      }
    ];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};
