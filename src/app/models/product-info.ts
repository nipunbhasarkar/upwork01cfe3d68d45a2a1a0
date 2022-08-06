export class ProductInfo {
  id: number;
  brand: string;
  series: string;
  msrp: number;
  sellingPrice: number;
  profitMargin: string;

  constructor(
    id: number,
    brand: string,
    series: string,
    msrp: number,
    sellingPrice: number,
    profitMargin: string
  ) {
    this.id = id;
    this.brand = brand;
    this.series = series;
    this.msrp = msrp;
    this.sellingPrice = sellingPrice;
    this.profitMargin = profitMargin;
  }
}
