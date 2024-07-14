import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { FaEdit } from "react-icons/fa";
const columns = [
  {
    title: "Phase",
    dataIndex: "phase",
  },
  {
    title: "Lesson",
    dataIndex: "lesson",
  },
  {
    title: "Code",
    dataIndex: "code",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const LessonList = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      phase: 1,
      lesson: "PH Phonics",
      code: `K41PH`,
      action: (
        <>
          <div className="flex justify-start items-center gap-4">
            <Link
              to={'/admin/add-lesson'}
              className="p-[8px] bg-green-300 rounded hover:shadow-lg hover:shadow-green-300/50 text-white"
            >
              <FaEdit />
            </Link>
          </div>
        </>
      ),
    });
  }
  return (
    <div className="px-2 lg:px-7 py-3">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center pb-2">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-2">
            Class: K4Abeka
          </h2>
          <div className="border p-3 bg-[#5e93f5] rounded-lg text-[#f2f4f8] font-bold">
            <Link to={"/admin/add-lesson"} className="">
              Add Lesson
            </Link>
          </div>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{
              y: 700,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonList;
