import './style/App.css';

const Financial = () => {
  return ( 
    <table>
      <tr>
        <th>Date</th>
        <th>Bank / Cash</th>
        <th>Type</th>
        <th>Sum</th>
        <th>Document</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>22.2.2023</td>
        <td>Bank</td>
        <td>Income</td>
        <td>150</td>
        <td>tds/2256</td>
        <td>Income from activities - Web Develppment</td>
      </tr>
      <tr>
        <td>5.7.2023</td>
        <td>Cash</td>
        <td>Income</td>
        <td>200</td>
        <td>tds/2256</td>
        <td>Income from activities - Web Develppment</td>
      </tr>
    </table>        
    )
}

export default Financial