import "./End.css";

const End = ({retry}) => {
  return (
    <div>
        <h1>
          <h1>Reset Game</h1>
          <button onClick={retry}>Reset</button>
        </h1>
    </div>
  )
}

export default End