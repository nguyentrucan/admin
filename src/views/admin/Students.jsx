import { Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Class",
    dataIndex: "class",
    sorter: (a, b) => a.class.length - b.class.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Students = () => {
  const data1 = [
    {
      key: 1,
      class: "Abeka-K4",
      action: (
        <>
          <div className="flex justify-start items-center gap-4">
            <Link
              to="/admin/classes/:id"
              className="p-[8px] bg-green-300 rounded hover:shadow-lg hover:shadow-green-300/50 text-white"
            >
              <FaEye />
            </Link>
          </div>
        </>
      ),
    },
    {
      key: 2,
      class: "Speaking",
      action: (
        <>
          <div className="flex justify-start items-center gap-4">
            <Link
              to="/admin/classes/:id"
              className="p-[8px] bg-green-300 rounded hover:shadow-lg hover:shadow-green-300/50 text-white"
            >
              <FaEye />
            </Link>
          </div>
        </>
      ),
    },
    {
      key: 3,
      class: "Books",
      action: (
        <>
          <div className="flex justify-start items-center gap-4">
            <Link
              to="/admin/classes/:id"
              className="p-[8px] bg-green-300 rounded hover:shadow-lg hover:shadow-green-300/50 text-white"
            >
              <FaEye />
            </Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="px-2 lg:px-7 py-6">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center pb-2">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-2">Students</h2>
          <div className="border p-3 bg-[#5e93f5] rounded-lg text-[#f2f4f8] font-bold">
            <Link to={'/admin/add-lesson'} className="">Add Students</Link>
          </div>
        </div>
        <div >
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Students;
