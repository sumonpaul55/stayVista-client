/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from "query-string"
const CategoryBox = ({ categories, selected }) => {
    const { label, icon: Icon, } = categories
    // console.log(categories)
    const [params, setParams] = useSearchParams();
    const naviget = useNavigate();
    params.get("category")
    const handleClick = () => {
        let currentQuery = {}
        if (params) {
            // params value convert to object using qs from query string
            currentQuery = qs.parse(params.toString())
        }
        // stored the query value in updatedQuery
        const updateQuery = { ...currentQuery, category: label }
        // converting object ot string useing 
        const url = qs.stringifyUrl({
            url: "/",
            query: updateQuery
        })
        naviget(url)

    }
    return (
        <div onClick={handleClick} className={`flex gap-2 flex-col border-b-2 items-center justify-center p-3 cursor-pointer ${selected ? "border-b-2 border-black" : "border-0"}`}>
            <span className='text-xl md:text-2xl lg:text-3xl'><Icon /></span>
            <h3 className='font-semibold'>{label}</h3>
        </div>
    );
};

export default CategoryBox;