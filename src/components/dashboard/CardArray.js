import {FaUserCircle,  } from 'react-icons/fa';
import { GoGoal } from "react-icons/go";
import { BsFillBagHeartFill } from "react-icons/bs";
import { TbMoneybag } from "react-icons/tb";
import { BiSolidDish } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";

export const cardData = [
  {
    icon: <BsFillBagHeartFill size={25} color='#58287F'/>, // Growth icon
    title: 'Growth',
    num: 50,
    pers: '20%',
  },
  {
    icon: <BsFillBagHeartFill size={25} color='158467'/>, // Ideas icon
    title: 'Ideas',
    num: 30,
    pers: '10%',
  },
  {
    icon: <BsFillBagHeartFill size={25} color='#D71313'/>, // Hot Topics icon
    title: 'Hot Topics',
    num: 75,
    pers: '15%',
  },
  {
    icon: <TbMoneybag size={28} color='#DF0E62'/>, // Statistics icon
    title: 'Statistics',
    num: '$ 155',
    pers: '25%',
  },
];
  
export  const customerData = [
    {
      customerName: 'John Doe',
      orderNo: '12345',
      amount: '$250.00',
      status: 'Delivered'
    },
    {
      customerName: 'Jane Smith',
      orderNo: '12346',
      amount: '$450.00',
      status: 'Cancelled'
    },
    {
      customerName: 'Alice Johnson',
      orderNo: '12347',
      amount: '$175.00',
      status: 'Delivered'
    },
    {
      customerName: 'Bob Brown',
      orderNo: '12348',
      amount: '$300.00',
      status: 'Cancelled'
    },
    {
      customerName: 'Alice Johnson',
      orderNo: '12347',
      amount: '$175.00',
      status: 'Delivered'
    },
  ];

 export  const customerColumns = [
    {
      Header: 'Customer Name',
      accessor: 'customerName',
      Cell: ({ value }) => (
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <FaUserCircle style={{ marginRight: '6px' }} />
          {value}
        </div>
      )
    },
    {
      Header: 'Order No',
      accessor: 'orderNo'
    },
    {
      Header: 'Amount',
      accessor: 'amount'
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => {
        let color;
        switch (value) {
          case 'Delivered':
            color = 'green';
            break;
          case 'Cancelled':
            color = 'red';
            break;
          default:
            color = 'gray';
        }
        return <span style={{ color , alignItems: 'center'}}>{value}</span>;
      }
    }
  ];

  export const feedbackData = [
    {
      name: 'John Doe',
      rating: 4.5,
      comment: 'Great service and friendly staff!'
    },
    {
      name: 'Jane Smith',
      rating: 5,
      comment: 'Absolutely fantastic experience!'
    },
    {
      name: 'Alice Johnson',
      rating: 3,
      comment: 'Good, but there is room for improvement.'
    }
  ];

  export const goleData = [
    {
      userIcon: <GoGoal size={30} color='#D71313' />,
      goal: 'Goals'
    },
    {
      userIcon: <BiSolidDish size={30} color='#58287F'/>,
      goal: 'Popular Dishes'
    },
    {
      userIcon: <FaBowlFood size={30} color='#025955'/>,
      goal: 'Menus'
    }
  ];