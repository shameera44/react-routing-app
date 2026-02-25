import Card from "../components/Card";


const UsersList = ({ users }) => {


  return (

    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6">

      {
        users.map((user) => {
          return (
            <div>
              <Card key={user.id} user={user} />

            </div>
          )
        })
      }
    </div>
  )
}

export default UsersList