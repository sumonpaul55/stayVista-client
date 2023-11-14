/* eslint-disable no-unused-vars */
import React from 'react';
import { categories } from "./CategoriesData"
import CategoryBox from './CategoryBox';
import { useSearchParams } from 'react-router-dom';
const Category = () => {
    const [params, setParams] = useSearchParams();
    const paramsCategory = params.get("category")
    return (
        <div className='flex justify-between gap-2 mb-8 overflow-x-auto'>
            {
                categories?.map((category, idx) => (
                    <CategoryBox key={idx} categories={category} selected={paramsCategory === category.label}></CategoryBox>
                ))
            }
        </div>
    );
};

export default Category;