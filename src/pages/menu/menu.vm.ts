
import { useEffect, useState } from 'react';

import { BASE_API } from '../../api';


export default function MainTabViewModel() {
    const [productData, setProductData] = useState<any>([]);
    const [count, setCount] = useState<any>(null);
    const [loading, setLoading] = useState<any>(false);
    const [error, setError] = useState<any>(null);
    const [visible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [sortName, setSortName] = useState('Default')


    const fetchProductList = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${BASE_API}`
            );
            const json: { limit: any, products: any } = await response.json();
            setCount(json.limit)
            setProductData(json.products.map((x: { id: number, title: string, price: number, stock: number }) => ({ id: x.id, title: x.title, price: x.price, stock: x.stock, amount: 0 })))

        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    const closeSort = () => {
        setVisible(false)
    }
    const resetTransaction = () => {
        fetchProductList()
        closeSort()
        setSortName('Default')
    };
    const updateAmount = (id: number, amount: number) => {
        const newProductData = productData.map((obj: { id: number, title: string, price: number, stock: number, amount: number }) => {
            if (obj.id === id) {
                return { ...obj, amount: obj.amount + amount };
            }
            return obj;
        });

        setProductData(newProductData);
    };
    const sort = (sort: number) => {
        function compareNameAsc(a: any, b: any) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
        function compareNameDesc(a: any, b: any) {
            if (a.title > b.title) {
                return -1;
            }
            if (a.title < b.title) {
                return 1;
            }
            return 0;
        }
        function comparePriceAsc(a: any, b: any) {
            if (a.price > b.price) {
                return -1;
            }
            if (a.price < b.price) {
                return 1;
            }
            return 0;
        }
        function comparePriceDesc(a: any, b: any) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }

        setProductData([...productData].sort(sort === 0 ? comparePriceAsc : sort === 1 ? comparePriceDesc : sort === 2 ? compareNameAsc : compareNameDesc));
    };
    const getTotal = (x: { id: number, title: string, price: number, stock: number, amount: number }[]) => {
        let total = 0;

        for (let i = 0; i < x.length; i++) {
            const obj: { id: number, title: string, price: number, stock: number, amount: number } = x[i];
            const result = obj.price * obj.amount;
            total += result;
        }
        return total
    }
    const getQuantity = (x: { id: number, title: string, price: number, stock: number, amount: number }[]) => {
        let quantity = 0;

        for (let i = 0; i < x.length; i++) {
            const obj: { id: number, title: string, price: number, stock: number, amount: number } = x[i];
            quantity += obj.amount;
        }
        return quantity
    }
    return { productData, loading, error, fetchProductList, count, sort, updateAmount, getTotal, getQuantity, modalVisible, setModalVisible, visible, setVisible, resetTransaction, closeSort, sortName, setSortName };
}
