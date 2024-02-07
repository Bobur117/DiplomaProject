import axios from 'axios';

import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        filteredProducts: [],
        productsPerPage: 12,
        currentPage: 1,
        totalProductsAmount: 100,
        selectedCategory: '',
        selectedSort: '',
    }),
    
    getters: {
        currentPageProducts: (state) => state.filteredProducts.slice((state.currentPage - 1) * state.productsPerPage, state.currentPage * state.productsPerPage),
        lastPage: (state) => Math.ceil(state.filteredProductsAmount / state.productsPerPage),
        filteredProductsAmount: (state) => state.filteredProducts.length,
    },

    actions: {
        async getProducts() {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${this.totalProductsAmount}`);
                console.log(response.data.products.map((p) => p.category));
                
                this.products = response.data.products;
                this.filteredProducts = this.products;
            } catch (error) {
                console.error(error);
            }
        },
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        filterProducts() {
            this.currentPage = 1;
            
            if (this.selectedCategory == '') {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter((product) => product.category == this.selectedCategory);
            }
            
            this.sortProducts();
        },
        
        sortProducts(){
            if (this.selectedSort == 'price') {
                this.filteredProducts = this.filteredProducts.sort(
                    (a, b) => Math.floor(
                        (a.price - (a.price * a.discountPercentage / 100)) - 
                        (b.price - (b.price * b.discountPercentage / 100))
                    )
                );
            } 
            
            else if (this.selectedSort == 'stock') {
                this.filteredProducts = this.filteredProducts.sort(
                    (a, b) => (a.stock - b.stock)  
                );
            }
            else if (this.selectedSort == 'title') {
                this.filteredProducts = this.filteredProducts.sort(
                    function(a,  b) {
                        if (a.title > b.title) {
                            return 1;
                        }
                        if (a.title < b.title) {
                            return -1;
                        } else {
                            return 0;
                        }
                    }
                );
            }
            
            
        },
    },
});

