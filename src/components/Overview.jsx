import './style/App.css';

import {BarChart, PieChart} from './ProjectCharts';
import { useState } from 'react';
import {UserData} from './data'


const Overview= () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain)
    }],
  })

  return (
    <div className='OverviewBody'>
      <div className='Bar'>
        <BarChart chartData={userData}/>     
      </div>   
      <div className="Pie">
        <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default Overview