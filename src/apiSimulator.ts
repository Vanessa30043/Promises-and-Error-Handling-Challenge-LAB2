interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductReview {
    productId: number;
    rating: number;
    productReview: string;
}

interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}

//BELOW are my APIS//

export const fetchProductCatalog = (): Promise<Product[]> => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<ProductReview[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId: 101, rating: 5, productReview: " It was a great product" }

                ]);
            } else {
                reject(`Failed to fetch reviews for productID ${productId}`);
            }
        }, 1500);

    });
};

export const fetchSalesReport = (): Promise<SalesReport[]> => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { totalSales: 2000, unitsSold:50, averagePrice:40},
                    { totalSales: 3000, unitsSold:50, averagePrice:60},
                ]);
            } else {
                reject("Failed to fetch sales report.");
            }
        }, 1000);
    });
};

