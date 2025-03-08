import Navigator from "../components/navigator"
function Home(){
    function FormSubmit(){
        console.log("logging")
    }
    return(
        <div>
            <Navigator />
        <div>my name</div>
        <form action="" onSubmit={FormSubmit}>
            <label htmlFor="">Email:</label>
            <input type="email"/>
            <label htmlFor=""> Password:</label>
            <input type="password" />
            <button>Submmit</button>
        </form>
        </div>
    )
}


export default Home