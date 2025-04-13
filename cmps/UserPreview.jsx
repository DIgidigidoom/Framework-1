export function UserPreview() {
    var user = { fullname: 'Puki Reactovich', score: 8 }
    return <section className="user-preview">
        <h2>{user.fullname}</h2>
        <h3>Score: {user.score}</h3>
    </section>  
}