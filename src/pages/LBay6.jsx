import './LBay.scss';
import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Table } from "antd";
import LBay from "../assets/images/LBay.jpg";
import ScaleG from "../assets/images/scaleG.png";
import ScaleO from "../assets/images/scaleO.png";
import ScaleR from "../assets/images/scaleR.png";
import ScaleY from "../assets/images/scaleY.png";

const LBay6 = () => {

  const rowClassName = (record) => {
    return record.id % 2 === 0 ? 'even-row' : 'odd-row';
  };

  const rowClassName2 = (record) => {
    return record.id % 2 === 0 ? 'even-row2' : 'odd-row2';
  };

  const cellStyle = {
    padding: 0
  };

  const handleClick = () => {
    window.location.reload(false);
  };

    const upperColumns = [
      {
        title: "A",
        dataIndex: "a",
        style: { padding: 0 }
      },
      {
        title: "B",
        dataIndex: "b",
        style: { padding: 0 }
      },
      {
        title: "C",
        dataIndex: "c",
        style: { padding: 0 }
      }
    ];
    
    const upperDataSource = [
      {
        a: <strong style={{ fontSize: '20px' }}> BAY 6 STATUS </strong>
      },
      {
        a: "Status:",
        b: "Bay Truck Type",
        c: "Bay Utilisation Time"
      },
      {
        a: <strong style={{ fontSize: '15px', color: "rgb(11,93,30)" }}> LOADING </strong>,
        b: <strong style={{ fontSize: '15px'}}> 606 Truck </strong>,
        c: <strong style={{ fontSize: '15px'}}> 5 Hours 06 Mins </strong>
      },
      {
        a: "Loading Since:",
        b: "Trucks Loaded Today:",
        c: "Bay Under-Utilisation Time:"
      },
      {
        a: <strong style={{ fontSize: '15px'}}> 29th November, 2022 1:30 PM </strong>,
        b: <strong style={{ fontSize: '15px'}}> 6 </strong>,
        c: <strong style={{ fontSize: '15px'}}> 3 Hours 14 Mins </strong>
      }
    ]

    const columns = [
      {
        title: "Serial No.",
        dataIndex: "serialNo",
        width: "13%"
      },
      {
        title: "Date",
        dataIndex: "date"
      },
      {
        title: "Truck Arrival",
        dataIndex: "truckArrival",
        width: "13%"
      },
      {
        title: "Truck Departure",
        dataIndex: "truckDeparture",
        width: "15%"
      },
      {
        title: "Cycle Time",
        dataIndex: "cycleTime",
        width: "17%"
      },
      {
        title: "Truck Type",
        dataIndex: "truckType"
      },
      
      Table.EXPAND_COLUMN,
    ];
  
    const dataSource = [
      {
        serialNo: "1",
        date: "29th November",
        truckArrival: "1:30 pm",
        truckDeparture: "3:50 pm",
        cycleTime: "2 hours 20 min",
        truckType: "Semi Truck"
      },
      {
        serialNo: "2",
        date: "29th November",
        truckArrival: "2:20 pm",
        truckDeparture: "4:00 pm",
        cycleTime: "2 hours 40 min",
        truckType: "Box"
      },
      {
        serialNo: "3",
        date: "29th November",
        truckArrival: "2:30 pm",
        truckDeparture: "3:50 pm",
        cycleTime: "1 hour 20 min",
        truckType: "606 Truck"
      },
      {
        serialNo: "4",
        date: "29th November",
        truckArrival: "3:30 pm",
        truckDeparture: "5:20 pm",
        cycleTime: "1 hour 50 min",
        truckType: "407 Truck"
      },
      {
        serialNo: "5",
        date: "29th November",
        truckArrival: "4:20 pm",
        truckDeparture: "5:50 pm",
        cycleTime: "1 hour 30 min",
        truckType: "DI Truck"
      },
      {
        serialNo: "6",
        date: "29th November",
        truckArrival: "4:50 pm",
        truckDeparture: "7:10 pm",
        cycleTime: "2 hours 20 min",
        truckType: "Semi Truck"
      },
      {
        serialNo: "7",
        date: "29th November",
        truckArrival: "5:30 pm",
        truckDeparture: "6:50 pm",
        cycleTime: "1 hour 20 min",
        truckType: "606 Truck"
      },
      {
        serialNo: "8",
        date: "29th November",
        truckArrival: "6:30 pm",
        truckDeparture: "8:50 pm",
        cycleTime: "1 hour 30 min",
        truckType: "DI Truck"
      },
    ];
  
  const nestedColumns = [
    {
      title: "Cycle",
      dataIndex: "cycle",
    },
    {
      title: "Worker",
      dataIndex: "worker"
    },
    {
      title: "Trolley",
      dataIndex: "trolley"
    }
  ];

  const nestedDataSource = [
    {
      cycle: 
      <>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleY} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleR} style={{height: 20, width: 14, marginLeft: 10.5}}/>
      </>,
      worker:
      <>
      <img src={ScaleG} style={{height: 20, width: 14}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleY} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleY} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleR} style={{height: 20, width: 14, marginLeft: 10.5}}/>
      </>,
      trolley:
      <>
      <img src={ScaleG} style={{height: 20, width: 14}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleY} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleG} style={{height: 20, width: 14, marginLeft: 11}}/>
      <img src={ScaleR} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 10}}/>
      <img src={ScaleO} style={{height: 20, width: 14, marginLeft: 10.5}}/>
      </>
    },
    {
      cycle: "Uncompensated Cycle Time",
      worker: "Uncompensated Idle Time, No Worker",
      trolley: "Uncompensated Idle Time, No Trolley"
    },
    { 
      cycle: <strong style={{ fontSize: '15px' }}> 2 Hours 45 Mins </strong>,
      worker: <strong style={{ fontSize: '15px' }}> 39 Mins </strong>,
      trolley: <strong style={{ fontSize: '15px' }}> 23 Mins </strong>
    },
    {
      cycle: "Arrival Image",
      worker: "Departure Image",
      trolley: ""
    },
    {
      cycle: 
        <img src={LBay} 
        style={{
          height: 100,
          width: 200}}
        />,
      worker:
        <img src={LBay} 
        style={{
          height: 100,
          width: 200}}              
        />,
      trolley: 
        <><textarea
          
          style={{
            background: "#f2f2f2",
            height: 30,
            width: 250,
            color: "#000",
            placeholder: "#ccc",
            padding: 10,
            boxSizing: "border-box",
            border: "0px solid #fff",
            borderRadius: 10,
            minHeight: 80,
            minWidth: 150
          }}
          
          placeholder="Enter cycle remarks here..."
        /> <br />
        
        <input type="Submit" onClick={handleClick} className="flat_button" value="Submit Remark"

        style={{
          background: "rgb(75, 59, 145)",
          color: "#fff",
          height: 30,
          width: 250,
          fontSize: "15px",
          fontWeight: "550",
          fontFamily: "sans-serif",
          textDecoration: "none",
          padding: "2px 2px",
          border: "1.1px solid rgb(89, 101, 177)",
          whiteSpace: "nowrap",
          borderRadius: "10px",
          '&:hover': {
            background: "#f7b100",
            color: "#002434",
          }
        }}
        />
        </>
    }
  ];

  return (
    <div className="container table_page">
    <div className="text_zone">
      <Table
      cellStyle={cellStyle}
      showHeader={false}
      pagination={false}
      style={{ border: '0.5px solid black', background: "#ccc", width: "1050px" }} 
      columns={upperColumns}
      dataSource={upperDataSource}
      size="small"
      >
      </Table>
      
      <Table  
        rowClassName={rowClassName}
        pagination={false} 
        scroll={{ x: null, y: 450 }}
        style={{ border: 'none', background: "#ccc", width: "1050px", borderRadius: "60px" }} 
        columns={columns}
        dataSource={dataSource}
        rowKey={(record, index) => index}
        expandable={{
          rowExpandable: (record) => true,
          expandedRowRender: (record) => {
              return (
              <Table 
                rowClassName={rowClassName2}
                style={{marginLeft: "-24px"}}
                showHeader={false} 
                pagination={false}
                scroll={true}
                size="small"
                columns={nestedColumns}
                dataSource={nestedDataSource}
                rowKey={(record, index) => index}
              >
              </Table>
              );
          },
          defaultExpandAllRows: false,
          expandIcon: ({ expanded, onExpand, record }) => {
            return expanded ? (
            <FaChevronUp onClick={(e) =>
              onExpand (record, e)}
              style={{ cursor: "pointer" }}
            />
            ) : ( 
            <FaChevronDown onClick={(e) =>
              onExpand (record, e)}
              style={{ cursor: "pointer" }}
            />
            )
          }
        }}
      ></Table>
    </div>
    </div>
  );
};

export default LBay6;