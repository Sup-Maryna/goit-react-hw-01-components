import './App.css';
import userData from './social-profile/user.json';
import Profile from './social-profile/Profile';
import friends from './friend-list/friends.json';
import FriendList from './friend-list/FriendList';
import data from './statistics/data.json';
import Statistics from './statistics/Statistic';
import transactions from './transaction-history/transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory';

function App() {
  return (
    <div className="App">
      <h2>User Profile</h2>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <h2>Friend List</h2>
      <FriendList friends={friends} />
      <h2>Statistics</h2>
      <Statistics stats={data} />
      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
