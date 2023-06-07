const Home = () => {

    const handleClick = () => {
        console.log('Hello Ninjas');
    };

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    };

    return (
        <div className="name">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('mario')}>Click Me Again</button>
        </div>
    );
}
 
export default Home;