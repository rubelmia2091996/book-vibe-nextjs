"use client";

import React, { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from 'recharts';
import { BookContext } from '../context/BookContext';
import { IBook } from '@/app/types/books.type';


const ChartPage = () => {
    const {readBooks} = useContext(BookContext);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
    const data = readBooks.map((book:IBook, index:number)=>{
        return{
            name: book.bookName, uv: book.totalPages, pv: book.yearOfPublishing, amt: book.rating 
        }
    })

    // FIXED: Corrected math operator (2 * width) and removed stray hyphen
    const getPath = (x: number, y: number, width: number, height: number) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
    };

    const TriangleBar = (props: BarShapeProps) => {
        const { x, y, width, height, index } = props;
        const color = colors[(index ?? 0) % colors.length];

        return (
            <path
                strokeWidth={props.isActive ? 5 : 0}
                d={getPath(Number(x), Number(y), Number(width), Number(height))}
                stroke={color}
                fill={color}
                style={{
                    transition: 'stroke-width 0.3s ease-out',
                }}
            />
        );
    };

    const CustomColorLabel = (props: LabelProps) => {
        const fill = colors[(props.index ?? 0) % colors.length];
        return <Label {...props} fill={fill} />;
    };




    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            {/* FIXED: Removed duplicate return statement and <RechartsDevtools /> */}
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip cursor={{ fillOpacity: 0.5 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" shape={TriangleBar} activeBar>
                    <LabelList content={CustomColorLabel} position="top" />
                </Bar>
            </BarChart>
        </div>
    );
};

export default ChartPage;