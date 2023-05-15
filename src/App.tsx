import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Status from './components/Status';
import { type } from 'os';

export type StatusTyps =  "Active" | "Expired" | "Banned";


export interface UserTypes {
  fullName: string;
  status: StatusTyps;
  email: string;
}
const data: Array<UserTypes> = [
  {
    fullName: "sharon",
    status: "Active",
    email: "sharon@gmail.com"
  },
  {
    fullName: "noam",
    status: "Expired",
    email: "noam@gmail.com"
  },
  {
    fullName: "shir",
    status: "Active",
    email: "shir@gmail.com"
  },
  {
    fullName: "Maor",
    status: "Banned",
    email: "maor@gmail.com"
  }
]

function App() {

  function handeleClick(user: UserTypes) {
    console.log(`${user.fullName} ${user.status}`);
  }
  return (
    <div className="bg-light m-4">
      <table className='table w-50 border border-dark table-hover'>
        <thead>
          <tr>
            <th scope="col">Full name</th>
            <th scope="col">Status</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(user =>
              <tr key={user.email}>
                 <td>
                  <button onClick={() => handeleClick(user)}>{user.fullName}</button>
                  </td>
                 <td><Status type={user.status}/></td>
                 <td>{user.email}</td>
              </tr>
            )
          }
        </tbody>


      </table>
      
    </div>
  );
}

export default App;
