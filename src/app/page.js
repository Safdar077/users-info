export default async function(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="m-2">
      <h1 className="font-bold text-lg">Users Information</h1>
      {users.map(user => (
        <div key={user.id} className="m-2 text-lg">
          <p><strong>Name:</strong>{user.name}</p>
          <p><strong>email:</strong>{user.email}</p>
          <p><strong>Address:</strong>{user.address.street}<br></br>
          {user.address.city} {user.address.zipcode}</p>
        </div>
      ))}
    </div>
  );
}
